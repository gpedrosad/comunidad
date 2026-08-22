import { createHash } from "node:crypto";
import { cookies, headers } from "next/headers";
import {
  isMetaPixelConfigured,
  isMetaStandardEvent,
  META_PIXEL_ID,
  type MetaStandardEvent,
} from "@/lib/meta";

const GRAPH_VERSION = "v21.0";

export type CapiUserData = {
  client_ip_address?: string;
  client_user_agent?: string;
  fbp?: string;
  fbc?: string;
  em?: string[];
  ph?: string[];
  external_id?: string[];
};

export type CapiEvent = {
  event_name: MetaStandardEvent;
  event_id: string;
  event_time?: number;
  event_source_url?: string;
  action_source?: "website";
  user_data?: CapiUserData;
  custom_data?: Record<string, string>;
};

export function isMetaCapiConfigured() {
  return (
    isMetaPixelConfigured() && Boolean(process.env.META_CAPI_ACCESS_TOKEN)
  );
}

/** SHA-256 of normalized PII. Call this before sending email/phone to CAPI. */
export function hashPii(value: string) {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export async function userDataFromRequest(): Promise<CapiUserData> {
  const headerStore = await headers();
  const cookieStore = await cookies();
  const forwarded = headerStore.get("x-forwarded-for");

  return compactUserData({
    client_ip_address:
      forwarded?.split(",")[0]?.trim() ||
      headerStore.get("x-real-ip") ||
      undefined,
    client_user_agent: headerStore.get("user-agent") || undefined,
    fbp: cookieStore.get("_fbp")?.value,
    fbc: cookieStore.get("_fbc")?.value,
  });
}

export async function sendCapiEvents(events: CapiEvent[]) {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!isMetaCapiConfigured() || !token) {
    return { ok: true, skipped: true as const };
  }

  const payload: Record<string, unknown> = {
    data: events.map(normalizeEvent),
    access_token: token,
  };

  const testCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (testCode) payload.test_event_code = testCode;

  const response = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${META_PIXEL_ID}/events`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("META_CAPI_ERROR", response.status, detail.slice(0, 400));
    return { ok: false as const, skipped: false as const };
  }

  return { ok: true as const, skipped: false as const };
}

export async function sendCapiEvent(event: CapiEvent) {
  return sendCapiEvents([event]);
}

function normalizeEvent(event: CapiEvent) {
  return compactRecord({
    event_name: event.event_name,
    event_id: event.event_id,
    event_time: event.event_time ?? Math.floor(Date.now() / 1000),
    event_source_url: event.event_source_url,
    action_source: event.action_source ?? "website",
    user_data: event.user_data
      ? compactUserData(event.user_data)
      : undefined,
    custom_data: event.custom_data,
  });
}

function compactUserData(data: CapiUserData): CapiUserData {
  return compactRecord(data);
}

function compactRecord<T extends Record<string, unknown>>(data: T): T {
  return Object.fromEntries(
    Object.entries(data).filter(([, value]) => {
      if (value == null || value === "") return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    }),
  ) as T;
}

export function parseClientEvent(body: unknown): CapiEvent | null {
  if (typeof body !== "object" || body === null) return null;

  const record = body as Record<string, unknown>;
  if (
    typeof record.event_name !== "string" ||
    !isMetaStandardEvent(record.event_name)
  ) {
    return null;
  }
  if (typeof record.event_id !== "string" || record.event_id === "") {
    return null;
  }

  return {
    event_name: record.event_name,
    event_id: record.event_id,
    event_source_url:
      typeof record.event_source_url === "string"
        ? record.event_source_url
        : undefined,
    custom_data: parseCustomData(record.custom_data),
  };
}

function parseCustomData(value: unknown) {
  if (typeof value !== "object" || value === null) return undefined;
  const entries = Object.entries(value).filter(
    (entry): entry is [string, string] =>
      typeof entry[0] === "string" && typeof entry[1] === "string",
  );
  return entries.length > 0 ? Object.fromEntries(entries) : undefined;
}
