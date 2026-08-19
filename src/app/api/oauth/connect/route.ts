import { cookies } from "next/headers";
import { randomBytes } from "node:crypto";

export async function GET() {
  const clientId = process.env.MERCADOPAGO_CLIENT_ID;
  const redirectUri = process.env.MERCADOPAGO_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return Response.json(
      {
        error:
          "Faltan MERCADOPAGO_CLIENT_ID o MERCADOPAGO_REDIRECT_URI en .env.local",
      },
      { status: 500 },
    );
  }

  const state = randomBytes(16).toString("hex");
  const cookieStore = await cookies();
  cookieStore.set("mp_oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  const url = new URL("https://auth.mercadopago.com/authorization");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("platform_id", "mp");
  url.searchParams.set("state", state);
  url.searchParams.set("redirect_uri", redirectUri);

  return Response.redirect(url.toString());
}
