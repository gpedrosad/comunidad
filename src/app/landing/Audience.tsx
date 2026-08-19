"use client";

const AUDIENCES = [
  "Comunidades privadas",
  "Mentorías grupales",
  "Profesores y clases",
  "Fitness y entrenamiento",
  "Creadores de contenido",
  "Clubes y membresías",
];

export default function Audience() {
  return (
    <section className="border-t border-line px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[1.65rem] font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
          Si cobrás acceso mensual, esto es para vos.
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {AUDIENCES.map((label) => (
            <li
              key={label}
              className="border border-line bg-white px-4 py-2 text-sm tracking-[-0.01em] text-ink"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
