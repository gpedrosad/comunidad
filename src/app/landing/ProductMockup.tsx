"use client";

import {
  MOCK_CLUB_NAME,
  MOCK_PRICE,
  SITE_DOMAIN_EXAMPLE,
} from "@/lib/landing";

const MEMBERS = [
  { name: "Lucía", status: "Activa" },
  { name: "Martín", status: "Activo" },
  { name: "Sofía", status: "Activa" },
] as const;

const FLOW_STEPS = [
  { label: "MIEMBRO", kind: "chip" as const },
  { label: "Mercado Pago", kind: "brand" as const },
  { label: "SUSCRIPCIÓN ACTIVA", kind: "chip" as const },
  { label: "ACCESO", kind: "chip" as const },
];

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-[6px] border border-line bg-white">
      {children}
    </div>
  );
}

export default function ProductMockup() {
  return (
    <section className="border-t border-line px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-[1.65rem] font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
          Así de simple.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium tracking-[0.18em] text-accent">
              PASO 1
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
              Creá tu membresía
            </h3>
            <Frame>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-base font-medium tracking-[-0.02em] text-ink">
                  {MOCK_CLUB_NAME}
                </p>
                <p className="mt-4 text-sm text-muted">Precio mensual:</p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.03em] tabular-nums text-ink">
                  {MOCK_PRICE} ARS
                </p>
                <div className="mt-6 flex min-h-12 w-full items-center justify-center rounded-[4px] bg-accent px-4 text-sm font-medium text-white">
                  Crear
                </div>
              </div>
            </Frame>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium tracking-[0.18em] text-accent">
              PASO 2
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
              Compartí tu página
            </h3>
            <Frame>
              <div className="flex flex-1 flex-col p-5">
                <p className="border border-line bg-page px-3 py-3 text-sm tracking-[-0.01em] text-ink">
                  {SITE_DOMAIN_EXAMPLE}
                </p>
                <div className="mt-6 flex min-h-12 w-full items-center justify-center rounded-[4px] border border-line px-4 text-sm font-medium text-ink">
                  Copiar link
                </div>
              </div>
            </Frame>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-medium tracking-[0.18em] text-accent">
              PASO 3
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
              Tus miembros se suscriben
            </h3>
            <Frame>
              <div className="flex flex-1 flex-col p-5">
                <ul>
                  {MEMBERS.map((member, index) => (
                    <li
                      key={member.name}
                      className={`flex items-center justify-between gap-3 py-3 text-[15px] text-ink ${
                        index < MEMBERS.length - 1 ? "border-b border-line" : ""
                      }`}
                    >
                      <span>{member.name}</span>
                      <span className="text-[13px] font-medium tracking-[-0.01em] text-accent">
                        {member.status}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4 text-sm">
                  <span className="text-muted">3 miembros activos</span>
                  <span className="font-semibold tabular-nums text-ink">
                    $60.000 / mes
                  </span>
                </div>
              </div>
            </Frame>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center text-center">
          <h2 className="max-w-lg text-[1.65rem] font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
            Ellos pagan con Mercado Pago.
          </h2>
          <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-muted">
            Tus miembros autorizan una suscripción mensual y vos ves quién tiene
            su membresía activa.
          </p>

          <ol className="relative mx-auto mt-10 max-w-[240px] text-left">
            <span
              aria-hidden
              className="absolute top-3 bottom-3 left-[7px] w-px bg-line"
            />
            {FLOW_STEPS.map((step) => (
              <li
                key={step.label}
                className="relative mb-3 flex items-center gap-3 last:mb-0"
              >
                <span
                  aria-hidden
                  className={`relative z-10 h-[15px] w-[15px] shrink-0 ${
                    step.kind === "brand" ? "bg-accent" : "bg-ink"
                  }`}
                />
                <span
                  className={
                    step.kind === "brand"
                      ? "text-[15px] font-medium text-ink"
                      : "text-[11px] font-medium tracking-[0.16em] text-muted"
                  }
                >
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
