"use client";

import type { RefObject } from "react";
import {
  EYEBROW,
  HEADLINE,
  HEADLINE_EMPHASIS,
  SUBHEADLINE,
  CTA_LABEL,
  CTA_HREF,
  CTA_MICRO_HERO,
  HERO_PATH,
} from "@/lib/landing";

export type HeroProps = {
  onCta: () => void;
  ctaRef: RefObject<HTMLDivElement | null>;
};

export default function Hero({ onCta, ctaRef }: HeroProps) {
  const emphasisIndex = HEADLINE.indexOf(HEADLINE_EMPHASIS);
  const headlineBefore =
    emphasisIndex >= 0 ? HEADLINE.slice(0, emphasisIndex) : HEADLINE;
  const headlineEmphasis =
    emphasisIndex >= 0 ? HEADLINE_EMPHASIS : "";
  const headlineAfter =
    emphasisIndex >= 0
      ? HEADLINE.slice(emphasisIndex + HEADLINE_EMPHASIS.length)
      : "";

  return (
    <section className="px-4 pb-14 pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-6 lg:pb-20 lg:pt-16">
      <div className="max-w-xl">
        <p className="text-[15px] font-medium tracking-[-0.02em] text-muted">
          {EYEBROW}
        </p>
        <h1 className="font-serif mt-3 text-[2.35rem] leading-[1.12] font-semibold tracking-[-0.03em] text-pretty text-ink sm:text-[3.1rem] lg:text-[3.5rem] lg:leading-[1.08]">
          {headlineBefore}
          {headlineEmphasis ? (
            <>
              <br />
              {headlineEmphasis}
            </>
          ) : null}
          {headlineAfter}
        </h1>
        <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-muted sm:text-[17px]">
          {SUBHEADLINE}
        </p>
        <p className="mt-5 text-[15px] leading-snug text-ink">{HERO_PATH}</p>

        <div ref={ctaRef} className="mt-7">
          <a href={CTA_HREF} onClick={onCta} className="btn-cta btn-cta-auto">
            {CTA_LABEL}
          </a>
          <p className="mt-2 text-[13px] leading-snug text-muted">
            {CTA_MICRO_HERO}
          </p>
        </div>
      </div>
    </section>
  );
}
