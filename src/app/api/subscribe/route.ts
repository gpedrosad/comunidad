import {
  SUBSCRIPTION_AMOUNT,
  SUBSCRIPTION_CURRENCY,
  SUBSCRIPTION_NAME,
} from "@/lib/product";
import { getPublicSeller, getSellerAccessToken } from "@/lib/sellers";

async function readFields(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body: unknown = await request.json();
    const email =
      typeof body === "object" &&
      body !== null &&
      "email" in body &&
      typeof body.email === "string"
        ? body.email.trim()
        : "";
    const sellerId =
      typeof body === "object" &&
      body !== null &&
      "sellerId" in body &&
      typeof body.sellerId === "string"
        ? body.sellerId.trim()
        : "";
    return { email, sellerId, isForm: false };
  }

  const form = await request.formData();
  return {
    email: String(form.get("email") ?? "").trim(),
    sellerId: String(form.get("sellerId") ?? "").trim(),
    isForm: true,
  };
}

function fail(isForm: boolean, sellerId: string, request: Request, message: string, status: number) {
  if (isForm) {
    const origin = process.env.APP_URL ?? new URL(request.url).origin;
    const url = new URL(sellerId ? `/c/${sellerId}` : "/", origin);
    url.searchParams.set("error", message);
    return Response.redirect(url, 303);
  }

  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let email = "";
  let sellerId = "";
  let isForm = false;

  try {
    ({ email, sellerId, isForm } = await readFields(request));
  } catch {
    return fail(true, "", request, "No se pudo leer el formulario", 400);
  }

  if (!email) {
    return fail(isForm, sellerId, request, "El email es requerido", 400);
  }

  if (!sellerId) {
    return fail(isForm, sellerId, request, "Falta el vendedor", 400);
  }

  const seller = await getPublicSeller(sellerId);
  const accessToken = await getSellerAccessToken(sellerId);

  if (!seller || !accessToken) {
    return fail(
      isForm,
      sellerId,
      request,
      "Esa cuenta no está conectada a Mercado Pago",
      404,
    );
  }

  const backUrl =
    process.env.MERCADOPAGO_BACK_URL ?? "http://localhost:3000/success";

  const mpResponse = await fetch("https://api.mercadopago.com/preapproval", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reason: SUBSCRIPTION_NAME,
      external_reference: email,
      payer_email: email,
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: SUBSCRIPTION_AMOUNT,
        currency_id: SUBSCRIPTION_CURRENCY,
      },
      back_url: backUrl,
      status: "pending",
    }),
  });

  const mpData = (await mpResponse.json()) as {
    init_point?: string;
    message?: string;
    error?: string;
    cause?: Array<{ description?: string }>;
  };

  if (!mpResponse.ok) {
    const message =
      mpData.cause?.[0]?.description ??
      mpData.message ??
      mpData.error ??
      "Mercado Pago rechazó la creación de la suscripción";
    return fail(isForm, sellerId, request, message, mpResponse.status);
  }

  if (!mpData.init_point) {
    return fail(
      isForm,
      sellerId,
      request,
      "Mercado Pago no devolvió init_point",
      502,
    );
  }

  if (isForm) {
    return Response.redirect(mpData.init_point, 303);
  }

  return Response.json({ init_point: mpData.init_point });
}
