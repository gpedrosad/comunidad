"use client";

import { MOCK_PRICE } from "@/lib/landing";

const FLOW_STEPS = [
  ["Tu membresía", `${MOCK_PRICE} / mes`],
  ["Mercado Pago", "suscripción mensual"],
  ["Suscripción activa", "pago confirmado"],
  ["Acceso", "contenido y comunidad"],
] as const;

export default function MercadoPago() {
  return (
    <section className="border-t border-line px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="font-serif max-w-xl text-[1.85rem] leading-[1.15] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
          Tus miembros pagan cada mes con Mercado Pago.
        </h2>
        <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted">
          Definí el precio de tu membresía y dejá que tus miembros armen
          una suscripción mensual.
        </p>

        <ol className="mt-10 max-w-md">
          {FLOW_STEPS.map(([title, detail]) => (
            <li
              key={title}
              className="flex items-baseline justify-between gap-6 border-b border-line py-3.5 first:border-t"
            >
              <p className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                {title}
              </p>
              <p className="shrink-0 text-[15px] text-muted">{detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
