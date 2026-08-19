"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CTA_HREF,
  CTA_LABEL,
  CTA_MICRO_BOTTOM,
  SECOND_CTA_TITLE,
} from "@/lib/landing";
import { captureAttribution, trackEvent } from "@/lib/analytics";
import Audience from "./Audience";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import MercadoPago from "./MercadoPago";
import Problem from "./Problem";
import Product from "./Product";
import Result from "./Result";
import StickyCTA from "./StickyCTA";

type CtaLocation = "hero" | "final" | "sticky";

const SCROLL_MARKS = [25, 50, 75, 90] as const;

export default function LandingPage() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const finalCtaRef = useRef<HTMLAnchorElement>(null);
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);

  const onCtaClick = useCallback((location: CtaLocation) => {
    trackEvent("CTA_CLICK", { location });
  }, []);

  useEffect(() => {
    const attribution = captureAttribution();
    trackEvent("LANDING_VIEW", {
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
      utm_term: attribution.utm_term,
    });
  }, []);

  useEffect(() => {
    const fired = new Set<number>();

    function onScroll() {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const percent = (window.scrollY / maxScroll) * 100;
      for (const mark of SCROLL_MARKS) {
        if (percent >= mark && !fired.has(mark)) {
          fired.add(mark);
          trackEvent(`SCROLL_${mark}`);
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const node = ctaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroCtaVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = finalCtaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFinalCtaVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stickyVisible = !heroCtaVisible && !finalCtaVisible;

  return (
    <div className="bg-page font-sans text-ink">
      <main className={stickyVisible ? "pb-24" : ""}>
        <div className="mx-auto w-full max-w-[1100px]">
          <Hero onCta={() => onCtaClick("hero")} ctaRef={ctaRef} />
          <Audience />
          <Problem />
        </div>

        <HowItWorks />

        <div className="mx-auto w-full max-w-[1100px]">
          <Product />
          <MercadoPago />
        </div>

        <Result />

        <div className="mx-auto w-full max-w-[1100px]">
          <section className="px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-xl">
              <h2 className="font-serif text-[1.85rem] leading-[1.15] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
                {SECOND_CTA_TITLE}
              </h2>
              <a
                ref={finalCtaRef}
                href={CTA_HREF}
                onClick={() => onCtaClick("final")}
                className="btn-cta btn-cta-auto mt-6"
              >
                {CTA_LABEL}
              </a>
              <p className="mt-2 text-[13px] text-muted">{CTA_MICRO_BOTTOM}</p>
              <p className="mt-1 text-[13px] text-muted">
                Sin tarjeta. Estamos validando demanda en Argentina.
              </p>
            </div>
          </section>
        </div>
      </main>

      <StickyCTA
        visible={stickyVisible}
        href={CTA_HREF}
        onCta={() => onCtaClick("sticky")}
      />
    </div>
  );
}
