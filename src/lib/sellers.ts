import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type Seller = {
  id: string;
  nickname: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
};

type Store = {
  sellers: Record<string, Seller>;
};

const storePath = path.join(process.cwd(), ".data", "sellers.json");

async function readStore(): Promise<Store> {
  try {
    const raw = await readFile(storePath, "utf8");
    const parsed = JSON.parse(raw) as Store;
    return { sellers: parsed.sellers ?? {} };
  } catch {
    return { sellers: {} };
  }
}

async function writeStore(store: Store) {
  await mkdir(path.dirname(storePath), { recursive: true });
  await writeFile(storePath, JSON.stringify(store, null, 2));
}

export async function saveSeller(seller: Seller) {
  const store = await readStore();
  store.sellers[seller.id] = seller;
  await writeStore(store);
}

export async function getPublicSeller(sellerId: string) {
  const store = await readStore();
  const seller = store.sellers[sellerId];
  if (!seller) return null;
  return { id: seller.id, nickname: seller.nickname };
}

export async function getSellerAccessToken(sellerId: string) {
  const store = await readStore();
  const seller = store.sellers[sellerId];
  if (!seller) return null;

  const stillValid = seller.expiresAt > Date.now() + 60_000;
  if (stillValid) return seller.accessToken;

  const clientId = process.env.MERCADOPAGO_CLIENT_ID;
  const clientSecret = process.env.MERCADOPAGO_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;

  const response = await fetch("https://api.mercadopago.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: seller.refreshToken,
    }),
  });

  const data = (await response.json()) as {
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
  };

  if (!response.ok || !data.access_token || !data.refresh_token) {
    return null;
  }

  const refreshed: Seller = {
    ...seller,
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresAt: Date.now() + (data.expires_in ?? 15552000) * 1000,
  };

  await saveSeller(refreshed);
  return refreshed.accessToken;
}
