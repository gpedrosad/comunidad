import { cookies } from "next/headers";
import { newEventId } from "@/lib/meta";
import { sendCapiEvent, userDataFromRequest } from "@/lib/meta-capi";
import { saveSeller } from "@/lib/sellers";

export async function GET(request: Request) {
  const clientId = process.env.MERCADOPAGO_CLIENT_ID;
  const clientSecret = process.env.MERCADOPAGO_CLIENT_SECRET;
  const redirectUri = process.env.MERCADOPAGO_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return Response.redirect(new URL("/?error=config", request.url));
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  const cookieStore = await cookies();
  const expectedState = cookieStore.get("mp_oauth_state")?.value;
  cookieStore.delete("mp_oauth_state");

  if (!code || !state || !expectedState || state !== expectedState) {
    return Response.redirect(new URL("/?error=oauth", request.url));
  }

  const tokenResponse = await fetch("https://api.mercadopago.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    }),
  });

  const tokenData = (await tokenResponse.json()) as {
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
    user_id?: number;
  };

  if (
    !tokenResponse.ok ||
    !tokenData.access_token ||
    !tokenData.refresh_token ||
    !tokenData.user_id
  ) {
    return Response.redirect(new URL("/?error=token", request.url));
  }

  let nickname = `Comunidad ${tokenData.user_id}`;
  const meResponse = await fetch("https://api.mercadolibre.com/users/me", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  if (meResponse.ok) {
    const me = (await meResponse.json()) as { nickname?: string };
    if (me.nickname) nickname = me.nickname;
  }

  const sellerId = String(tokenData.user_id);
  await saveSeller({
    id: sellerId,
    nickname,
    accessToken: tokenData.access_token,
    refreshToken: tokenData.refresh_token,
    expiresAt: Date.now() + (tokenData.expires_in ?? 15552000) * 1000,
  });

  cookieStore.set("mp_seller_id", sellerId, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
  });

  await sendCapiEvent({
    event_name: "CompleteRegistration",
    event_id: newEventId(),
    event_source_url: new URL(`/c/${sellerId}`, request.url).toString(),
    user_data: await userDataFromRequest(),
    custom_data: { content_name: "mercadopago_oauth" },
  });

  return Response.redirect(new URL(`/c/${sellerId}`, request.url));
}
