"use client";

import type { RefObject } from "react";
import {
  SITE_NAME,
  EYEBROW,
  HEADLINE,
  HEADLINE_EMPHASIS,
  SUBHEADLINE,
  CTA_LABEL,
  CTA_MICRO_HERO,
  HERO_BENEFITS,
  MOCK_CLUB_NAME,
  MOCK_PRICE,
  SITE_DOMAIN_EXAMPLE,
} from "@/lib/landing";

export type HeroProps = {
  onCta: () => void;
  ctaRef: RefObject<HTMLDivElement | null>;
};

export default function Hero({ onCta, ctaRef }: HeroProps) {
  const emphasisIndex = HEADLINE.indexOf(HEADLINE_EMPHASIS);
  const headlineBefore =
    emphasisIndex >= 0 ? HEADLINE.slice(0, emphasisIndex) : HEADLINE;
  const headlineAfter =
    emphasisIndex >= 0
      ? HEADLINE.slice(emphasisIndex + HEADLINE_EMPHASIS.length)
      : "";

  return (
    <section className="flex min-h-[100svh] flex-col px-4 pb-5 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 lg:min-h-0 lg:pb-16 lg:pt-8">
      <div className="flex h-12 items-center justify-between">
        <p className="text-[15px] font-semibold tracking-[-0.03em] text-ink">
          {SITE_NAME}
        </p>
        <a
          href="#como-funciona"
          className="text-sm tracking-[-0.01em] text-muted no-underline hover:text-ink"
        >
          Cómo funciona
        </a>
      </div>

      <div className="mt-4 flex min-h-0 flex-1 flex-col lg:mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] text-accent">
            {EYEBROW}
          </p>
          <h1 className="mt-2 max-w-[20ch] text-[2rem] leading-[1.12] font-semibold tracking-[-0.035em] text-pretty text-ink sm:max-w-none sm:text-[2.5rem] lg:text-[2.85rem] lg:leading-[1.08]">
            {headlineBefore}
            {emphasisIndex >= 0 ? (
              <>
                <br className="hidden lg:block" />
                <span className="font-medium text-accent underline decoration-accent decoration-2 underline-offset-[0.16em]">
                  {HEADLINE_EMPHASIS}
                </span>
              </>
            ) : null}
            {headlineAfter}
          </h1>
          <p className="mt-3 max-w-[34ch] text-base leading-relaxed text-muted">
            {SUBHEADLINE}
          </p>

          <ul className="mt-4 flex flex-col gap-1.5">
            {HERO_BENEFITS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[15px] leading-snug text-ink"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>

          <div ref={ctaRef} className="mt-5 sm:mt-6">
            <button
              type="button"
              onClick={onCta}
              className="btn-cta btn-cta-auto"
            >
              {CTA_LABEL}
            </button>
            <p className="mt-2 text-[13px] leading-snug text-muted">
              {CTA_MICRO_HERO}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-1 items-end lg:mt-0 lg:block lg:flex-none">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[6px] border border-line bg-white lg:translate-y-2">
            <div className="flex h-8 items-center gap-2 border-b border-line bg-wash px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-line" />
              <span className="h-1.5 w-1.5 rounded-full bg-line" />
              <span className="h-1.5 w-1.5 rounded-full bg-line" />
              <p className="ml-1 truncate text-[11px] tracking-[-0.01em] text-muted">
                {SITE_DOMAIN_EXAMPLE}
              </p>
            </div>
            <div className="p-3.5 sm:p-5">
              <p className="text-[15px] font-semibold tracking-[-0.02em] text-ink sm:text-base">
                {MOCK_CLUB_NAME}
              </p>
              <p className="mt-0.5 text-sm text-muted">Membresía mensual</p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.03em] tabular-nums text-ink sm:mt-3 sm:text-2xl">
                {MOCK_PRICE} / mes
              </p>
              <div
                className="mt-3 flex min-h-12 w-full items-center justify-center rounded-[4px] bg-accent px-4 text-sm font-medium text-white"
                aria-hidden="true"
              >
                Suscribirme con Mercado Pago
              </div>
              <p className="mt-2.5 flex items-center gap-2 text-sm text-ink">
                <span
                  className="flex h-3.5 w-3.5 shrink-0 items-center justify-center bg-accent"
                  aria-hidden="true"
                >
                  <span className="mb-px block h-[6px] w-[3px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-white" />
                </span>
                Renovación mensual
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
