"use client";

import { MOCK_PRICE } from "@/lib/landing";

export default function Result() {
  return (
    <section className="bg-wash px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-3xl">
          <h2 className="font-serif max-w-xl text-[1.85rem] leading-[1.15] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
            Dejá de vender una sola vez.
          </h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted">
            Construí una membresía alrededor de lo que ya sabés.
          </p>

          <p className="font-serif mt-12 text-[2.15rem] leading-[1.15] font-semibold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            30 miembros
            <br />
            <span className="text-muted">×</span> {MOCK_PRICE} / mes
            <br />
            <span className="text-accent">= $600.000 / mes</span>
          </p>
          <p className="mt-4 text-[13px] text-muted">
            Ejemplo, no una promesa de ingresos.
          </p>
          <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-muted">
            Tu contenido deja de ser solamente algo que vendés una vez y pasa a
            formar parte de una membresía mes a mes.
          </p>
        </div>
      </div>
    </section>
  );
}
