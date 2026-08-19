"use client";

import { SITE_NAME } from "@/lib/landing";

const HOY_ITEMS = [
  "Cobras manualmente",
  "Revisas transferencias",
  "Preguntas quién pagó",
  "Agregas miembros",
  "Recuerdas renovaciones",
];

const CON_ITEMS = [
  "Compartes un link",
  "El miembro se suscribe",
  "Mercado Pago cobra",
  "El acceso se activa",
  "La membresía se renueva",
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-line px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
        <article className="bg-wash px-5 py-6 sm:px-6">
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
            HOY
          </p>
          <ul className="mt-5">
            {HOY_ITEMS.map((item, index) => (
              <li
                key={item}
                className={`flex items-baseline gap-3 py-2.5 text-[15px] leading-snug text-ink ${
                  index < HOY_ITEMS.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="w-4 shrink-0 text-[11px] tabular-nums text-muted">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="border-l-2 border-l-accent bg-white px-5 py-6 sm:px-6">
          <p className="text-[11px] font-medium tracking-[0.18em] text-accent">
            CON {SITE_NAME.toUpperCase()}
          </p>
          <ul className="mt-5">
            {CON_ITEMS.map((item, index) => (
              <li
                key={item}
                className={`flex items-baseline gap-3 py-2.5 text-[15px] leading-snug text-ink ${
                  index < CON_ITEMS.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="w-4 shrink-0 text-[11px] tabular-nums text-accent">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
