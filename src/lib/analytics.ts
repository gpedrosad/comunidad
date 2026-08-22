import { mapToMetaEvent, newEventId } from "@/lib/meta";

export type Attribution = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  utm_id: string;
  fbclid: string;
};

const STORAGE_KEY = "cuota_attribution";

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      params?: Record<string, string>,
      options?: { eventID?: string },
    ) => void;
  }
}

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "fbclid",
] as const;

function emptyAttribution(): Attribution {
  return {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm_id: "",
    fbclid: "",
  };
}

function hasAnyValue(attribution: Attribution): boolean {
  return ATTRIBUTION_KEYS.some((key) => attribution[key] !== "");
}

function parseAttribution(value: unknown): Attribution | null {
  if (typeof value !== "object" || value === null) return null;

  const record = value as Record<string, unknown>;
  const attribution = emptyAttribution();

  for (const key of ATTRIBUTION_KEYS) {
    const field = record[key];
    if (typeof field === "string") {
      attribution[key] = field;
    }
  }

  return attribution;
}

function readStoredAttribution(): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return parseAttribution(JSON.parse(raw));
  } catch {
    return null;
  }
}

function writeStoredAttribution(attribution: Attribution): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // sessionStorage can throw in private mode; ignore.
  }
}

function attributionFromSearch(search: string): Attribution {
  const params = new URLSearchParams(search);
  const attribution = emptyAttribution();

  for (const key of ATTRIBUTION_KEYS) {
    attribution[key] = params.get(key) ?? "";
  }

  return attribution;
}

export function trackEvent(
  name: string,
  properties?: Record<string, unknown>,
  eventId = newEventId(),
): string | null {
  if (typeof window === "undefined") return null;

  if (process.env.NODE_ENV !== "production") {
    console.log(name, properties ?? {});
  }

  const mapped = mapToMetaEvent(name, properties);
  if (!mapped) return null;

  const pixelPayload = mapped.customData ?? {};
  window.fbq?.("track", mapped.eventName, pixelPayload, { eventID: eventId });

  const body = JSON.stringify({
    event_name: mapped.eventName,
    event_id: eventId,
    event_source_url: window.location.href,
    custom_data: mapped.customData,
  });

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/meta/events",
        new Blob([body], { type: "application/json" }),
      );
    } else {
      void fetch("/api/meta/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      });
    }
  } catch {
    // Beacon/fetch can fail in private mode; Pixel still fired.
  }

  return eventId;
}

/** Read UTM + fbclid + utm_id from the URL, persist to sessionStorage, return them. Call once on landing mount. First-touch: if session already has attribution, keep it and do not overwrite. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return emptyAttribution();

  const fromUrl = attributionFromSearch(window.location.search);
  const stored = readStoredAttribution();

  if (hasAnyValue(fromUrl)) {
    writeStoredAttribution(fromUrl);
    persistFbc(fromUrl.fbclid);
    return fromUrl;
  }

  if (stored && hasAnyValue(stored)) {
    return stored;
  }

  const empty = emptyAttribution();
  writeStoredAttribution(empty);
  return empty;
}

function persistFbc(fbclid: string) {
  if (!fbclid || readCookie("_fbc")) return;
  document.cookie = `_fbc=fb.1.${Date.now()}.${fbclid}; path=/; max-age=${90 * 24 * 60 * 60}; SameSite=Lax`;
}

function readCookie(name: string) {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : "";
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return emptyAttribution();
  return readStoredAttribution() ?? emptyAttribution();
}
