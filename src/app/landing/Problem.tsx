"use client";

const STEPS = [
  { label: "Grupo de WhatsApp", tone: "chip" as const },
  { label: "Contenido suelto en Drive", tone: "chip" as const },
  { label: "Cobros por transferencia", tone: "chip" as const },
  { label: "¿Quién pagó este mes?", tone: "message" as const },
  { label: "Control manual en una planilla", tone: "chip" as const },
];

export default function Problem() {
  return (
    <section className="border-t border-line px-4 py-16 sm:py-20">
      <h2 className="text-center text-[1.65rem] font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
        Si tu comunidad vive en WhatsApp…
      </h2>

      <ol className="relative mx-auto mt-10 max-w-[280px]">
        <span
          aria-hidden
          className="absolute top-3 bottom-3 left-[11px] w-px bg-line"
        />
        {STEPS.map((step) => (
          <li key={step.label} className="relative mb-3 flex items-start gap-3 last:mb-0">
            <span
              aria-hidden
              className="relative z-10 mt-2.5 h-[9px] w-[9px] shrink-0 bg-ink"
            />
            <div
              className={
                step.tone === "message"
                  ? "w-full border border-line bg-white px-3.5 py-2.5 text-[15px] leading-snug text-muted italic"
                  : "w-full border border-line bg-white px-3.5 py-2.5 text-[15px] leading-snug text-ink"
              }
            >
              {step.label}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-center text-base font-medium tracking-[-0.02em] text-ink">
        Hay una forma más simple.
      </p>
    </section>
  );
}
