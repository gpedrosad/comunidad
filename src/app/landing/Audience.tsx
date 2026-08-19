"use client";

const AUDIENCES = [
  ["¿Das mentorías?", "Creá una membresía."],
  ["¿Das clases?", "Creá un espacio para tus alumnos."],
  ["¿Entrenás personas?", "Creá un programa mensual."],
  ["¿Creás contenido?", "Creá una comunidad paga."],
  ["¿Tenés una academia?", "Llevá tus alumnos y contenido a un solo lugar."],
];

export default function Audience() {
  return (
    <section className="border-t border-line px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <h2 className="font-serif max-w-xl text-[1.85rem] leading-[1.15] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
          Si ya enseñás algo, podés convertirlo en una membresía.
        </h2>
        <ul className="mt-10 border-t border-line">
          {AUDIENCES.map(([question, answer]) => (
            <li
              key={question}
              className="grid gap-1 border-b border-line py-3.5 sm:grid-cols-[minmax(160px,220px)_1fr] sm:gap-10"
            >
              <p className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                {question}
              </p>
              <p className="text-[15px] leading-snug text-muted">{answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
