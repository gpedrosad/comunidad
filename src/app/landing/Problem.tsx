"use client";

const STEPS = [
  ["Instagram", "conseguir clientes"],
  ["WhatsApp", "comunidad"],
  ["Google Drive / YouTube", "contenido"],
  ["Mercado Pago / transferencias", "cobrar"],
  ["Sheets", "controlar quién pagó"],
];

export default function Problem() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <h2 className="font-serif max-w-xl text-[1.85rem] leading-[1.15] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
          Tu negocio no debería vivir en cinco aplicaciones.
        </h2>
        <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted">
          Esas herramientas funcionan. El problema es que tu membresía queda
          fragmentada.
        </p>

        <ul className="mt-10 border-t border-line">
          {STEPS.map(([tool, job]) => (
            <li
              key={tool}
              className="grid gap-1 border-b border-line py-3.5 sm:grid-cols-[minmax(180px,260px)_1fr] sm:gap-10"
            >
              <p className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                {tool}
              </p>
              <p className="text-[15px] leading-snug text-muted">{job}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-base font-medium tracking-[-0.02em] text-ink">
          Reuní todo en un solo lugar.
        </p>
      </div>
    </section>
  );
}
