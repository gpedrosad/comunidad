"use client";

import { useEffect, useRef, useState } from "react";
import { captureAttribution, trackEvent } from "@/lib/analytics";
import {
  V2_CTA_HREF,
  V2_CTA_LABEL,
  V2_HEADLINE,
  V2_HERO_HREF,
  V2_MICROCOPY,
  V2_SITE_NAME,
  V2_SUBHEADLINE,
} from "@/lib/v2-landing";
import MembershipShowcase from "./MembershipShowcase";
import Pricing from "./Pricing";

type View = "hero" | "pricing";

export default function HeroLanding({
  initialView = "hero",
}: {
  initialView?: View;
}) {
  const [view, setView] = useState<View>(initialView);
  const [ready, setReady] = useState(false);
  const pricingScreen = useRef<HTMLElement>(null);

  useEffect(() => {
    const attribution = captureAttribution();
    trackEvent("LANDING_VIEW", {
      variant: "v2",
      view: initialView,
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
      utm_term: attribution.utm_term,
    });
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, [initialView]);

  useEffect(() => {
    function onPopState() {
      setView(
        window.location.pathname.startsWith(V2_CTA_HREF) ? "pricing" : "hero",
      );
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function goPricing() {
    trackEvent("CTA_CLICK", { location: "v2-hero" });
    setView("pricing");
    pricingScreen.current?.scrollTo(0, 0);
    if (!window.location.pathname.startsWith(V2_CTA_HREF)) {
      window.history.pushState({ v2: "pricing" }, "", V2_CTA_HREF);
    }
  }

  function goHero() {
    if (window.history.state?.v2 === "pricing") {
      window.history.back();
      return;
    }
    setView("hero");
    if (window.location.pathname.startsWith(V2_CTA_HREF)) {
      window.history.pushState({ v2: "hero" }, "", V2_HERO_HREF);
    }
  }

  return (
    <div
      className={`v2-track${view === "pricing" ? " is-pricing" : ""}${ready ? " is-ready" : ""}`}
    >
      <section
        className="v2-screen"
        aria-hidden={view !== "hero"}
        inert={view !== "hero" ? true : undefined}
      >
        <main className="v2-shell">
          <img
            className="v2-logo"
            src="/logo.png"
            alt={V2_SITE_NAME}
            width={140}
            height={40}
          />

          <div className="v2-copy">
            <h1 className="v2-headline">{V2_HEADLINE}</h1>
            <p className="v2-sub">{V2_SUBHEADLINE}</p>
          </div>

          <MembershipShowcase />

          <a
            href={V2_CTA_HREF}
            className="v2-cta"
            onClick={(event) => {
              event.preventDefault();
              goPricing();
            }}
          >
            {V2_CTA_LABEL}
          </a>
          <p className="v2-micro">{V2_MICROCOPY}</p>
        </main>
      </section>

      <section
        ref={pricingScreen}
        className="v2-screen"
        aria-hidden={view !== "pricing"}
        inert={view !== "pricing" ? true : undefined}
      >
        <main className="v2-shell">
          <button type="button" className="v2-back" onClick={goHero}>
            Atrás
          </button>
          <img
            className="v2-logo"
            src="/logo.png"
            alt={V2_SITE_NAME}
            width={140}
            height={40}
          />
          <Pricing />
        </main>
      </section>
    </div>
  );
}
