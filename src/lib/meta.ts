export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export const META_STANDARD_EVENTS = [
  "PageView",
  "ViewContent",
  "InitiateCheckout",
  "Lead",
  "CompleteRegistration",
] as const;

export type MetaStandardEvent = (typeof META_STANDARD_EVENTS)[number];

export type MetaMappedEvent = {
  eventName: MetaStandardEvent;
  customData?: Record<string, string>;
};

export function isMetaPixelConfigured() {
  return /^\d+$/.test(META_PIXEL_ID);
}

export function isMetaStandardEvent(value: string): value is MetaStandardEvent {
  return (META_STANDARD_EVENTS as readonly string[]).includes(value);
}

export function mapToMetaEvent(
  name: string,
  properties?: Record<string, unknown>,
): MetaMappedEvent | null {
  if (name === "LANDING_VIEW") {
    return { eventName: "PageView" };
  }

  if (name !== "CTA_CLICK") return null;

  const location = stringProp(properties, "location");
  const plan = stringProp(properties, "plan");

  return {
    eventName: "Lead",
    customData: compactStrings({
      content_name: "whatsapp",
      content_category: plan ?? location,
    }),
  };
}

export function newEventId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function stringProp(
  properties: Record<string, unknown> | undefined,
  key: string,
) {
  const value = properties?.[key];
  return typeof value === "string" && value !== "" ? value : undefined;
}

function compactStrings(data: Record<string, string | undefined>) {
  return Object.fromEntries(
    Object.entries(data).filter(
      (entry): entry is [string, string] => Boolean(entry[1]),
    ),
  );
}
