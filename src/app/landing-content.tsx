import { SUBSCRIPTION_AMOUNT, SUBSCRIPTION_NAME } from "@/lib/product";
import SubscribeForm from "./c/[sellerId]/subscribe-form";

export default function LandingContent({
  seller,
  error,
}: {
  seller: { id: string; nickname: string } | null;
  error?: string;
}) {
  const appUrl = process.env.APP_URL ?? "http://localhost:3000";

  return (
    <main className="mx-auto flex min-h-full max-w-md flex-col justify-center gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">{SUBSCRIPTION_NAME}</h1>
        <p className="mt-1 text-zinc-800">
          ${SUBSCRIPTION_AMOUNT.toLocaleString("es-AR")} ARS por mes
        </p>
        {seller ? (
          <p className="mt-2 text-zinc-600">Suscripción a {seller.nickname}</p>
        ) : (
          <p className="mt-2 text-zinc-600">
            Conectá tu Mercado Pago para activar el cobro en tu cuenta. Después
            va a aparecer el email y el pago para suscribirse.
          </p>
        )}
      </div>

      {seller ? (
        <>
          <SubscribeForm sellerId={seller.id} />
          <p className="break-all text-sm text-zinc-600">
            Landing: {appUrl}/c/{seller.id}
          </p>
        </>
      ) : (
        <a
          href="/api/oauth/connect"
          className="cursor-pointer rounded bg-black px-4 py-2 text-center text-white"
        >
          Conectar Mercado Pago
        </a>
      )}

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </main>
  );
}
