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

/** Isolated sink for analytics. Swap this body for Meta Pixel / PostHog later. */
export function trackEvent(
  name: string,
  properties?: Record<string, unknown>,
): void {
  console.log(name, properties ?? {});
}

/** Read UTM + fbclid + utm_id from the URL, persist to sessionStorage, return them. Call once on landing mount. First-touch: if session already has attribution, keep it and do not overwrite. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return emptyAttribution();

  const fromUrl = attributionFromSearch(window.location.search);
  const stored = readStoredAttribution();

  if (hasAnyValue(fromUrl)) {
    writeStoredAttribution(fromUrl);
    return fromUrl;
  }

  if (stored && hasAnyValue(stored)) {
    return stored;
  }

  const empty = emptyAttribution();
  writeStoredAttribution(empty);
  return empty;
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return emptyAttribution();
  return readStoredAttribution() ?? emptyAttribution();
}
