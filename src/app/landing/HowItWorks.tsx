"use client";

const STEPS = [
  ["Creá tu espacio", "Nombre, descripción y precio."],
  ["Agregá tu contenido", "Videos, clases, recursos y publicaciones."],
  [
    "Compartí tu link",
    "Tus miembros se suscriben y pagan todos los meses con Mercado Pago.",
  ],
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-wash px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-2xl">
          <h2 className="font-serif text-[1.85rem] leading-[1.15] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
            Empezá en minutos.
          </h2>
          <p className="mt-3 text-[15px] text-muted">Crear, publicar, cobrar.</p>

          <ol className="mt-12">
            {STEPS.map(([title, copy], index) => (
              <li
                key={title}
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-line py-5 first:border-t"
              >
                <span className="font-serif text-xl leading-none text-ink">
                  {index + 1}.
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-snug font-semibold tracking-[-0.02em] text-ink">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                    {copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
