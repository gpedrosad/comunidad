const DEFAULT_GRAPH = "https://graph.facebook.com/v26.0";

export const META_GRAPH_API =
  process.env.META_GRAPH_API ?? DEFAULT_GRAPH;
export const META_AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID ?? "";
export const META_BUSINESS_ID = process.env.META_BUSINESS_ID ?? "";
export const META_APP_ID = process.env.META_APP_ID ?? "";
export const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID ?? "";

export function metaAdsAccessToken() {
  return (
    process.env.META_ADS_ACCESS_TOKEN ||
    process.env.FACEBOOK_ACCESS_TOKEN ||
    ""
  );
}

export function isMetaAdsConfigured() {
  return (
    Boolean(metaAdsAccessToken()) && META_AD_ACCOUNT_ID.startsWith("act_")
  );
}

export type MetaAdAccount = {
  id: string;
  name: string;
  account_status: number;
  currency: string;
  timezone_name: string;
};

export async function getAdAccount(): Promise<MetaAdAccount> {
  if (!isMetaAdsConfigured()) {
    throw new Error("Falta META_ADS_ACCESS_TOKEN o META_AD_ACCOUNT_ID");
  }

  const url = new URL(`${META_GRAPH_API}/${META_AD_ACCOUNT_ID}`);
  url.searchParams.set(
    "fields",
    "id,name,account_status,currency,timezone_name",
  );
  url.searchParams.set("access_token", metaAdsAccessToken());

  const response = await fetch(url);
  const body = (await response.json()) as MetaAdAccount & {
    error?: { message?: string; code?: number };
  };

  if (!response.ok || body.error) {
    throw new Error(
      body.error?.message ?? `Meta Ads API ${response.status}`,
    );
  }

  return body;
}
