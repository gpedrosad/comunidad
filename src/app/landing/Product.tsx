"use client";

const PILLARS = ["Contenido", "Comunidad", "Miembros"] as const;

export default function Product() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="max-w-3xl">
        <h2 className="font-serif text-[1.85rem] leading-[1.15] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
          Todo lo necesario para tu membresía.
        </h2>
        <ul className="font-serif mt-12 text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
          {PILLARS.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-[36ch] text-base leading-relaxed text-muted">
          Contenido, comunidad y miembros en un solo espacio.
        </p>
      </div>
    </section>
  );
}
