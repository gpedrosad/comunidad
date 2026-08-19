"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CTA_LABEL,
  CTA_MICRO_BOTTOM,
  FORM_TRUST,
  SECOND_CTA_TITLE,
} from "@/lib/landing";
import { captureAttribution, trackEvent } from "@/lib/analytics";
import Audience from "./Audience";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import LeadModal from "./LeadModal";
import Problem from "./Problem";
import ProductMockup from "./ProductMockup";
import StickyCTA from "./StickyCTA";

type CtaLocation = "hero" | "middle" | "bottom";

const SCROLL_MARKS = [25, 50, 75, 90] as const;

export default function LandingPage() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);

  const openForm = useCallback((location: CtaLocation) => {
    trackEvent("CTA_CLICK", { location });
    setModalOpen(true);
    trackEvent("FORM_OPEN");
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

  const stickyVisible = !heroCtaVisible;

  return (
    <div className="bg-page font-sans text-ink">
      <main className={`mx-auto w-full max-w-[1100px] ${stickyVisible ? "pb-24" : ""}`}>
        <Hero onCta={() => openForm("hero")} ctaRef={ctaRef} />
        <Problem />
        <HowItWorks />
        <ProductMockup />
        <Audience />

        <section className="border-t border-line px-4 py-16 text-center sm:py-20">
          <h2 className="text-[1.65rem] font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
            {SECOND_CTA_TITLE}
          </h2>
          <button
            type="button"
            onClick={() => openForm("middle")}
            className="btn-cta btn-cta-auto mx-auto mt-6 max-w-sm"
          >
            {CTA_LABEL}
          </button>
          <p className="mt-2 text-[13px] text-muted">{CTA_MICRO_BOTTOM}</p>
          <p className="mt-1 text-[13px] text-muted">{FORM_TRUST}</p>
        </section>
      </main>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <StickyCTA
        visible={stickyVisible}
        hiddenByModal={modalOpen}
        onCta={() => openForm("bottom")}
      />
    </div>
  );
}
