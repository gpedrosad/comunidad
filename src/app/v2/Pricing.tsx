"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  MONTHLY_PRICE,
  V2_START_HREF,
  YEARLY_EQUIVALENT,
  YEARLY_FULL,
  YEARLY_PRICE,
} from "@/lib/v2-landing";

type Plan = "monthly" | "yearly";

export default function Pricing() {
  const [plan, setPlan] = useState<Plan>("yearly");

  return (
    <section className="v2-pricing">
      <h2 className="v2-headline">Elegí cómo pagar.</h2>
      <p className="v2-sub">
        {MONTHLY_PRICE} por mes, o el año con 2 meses gratis.
      </p>

      <div className="v2-plans">
        <button
          type="button"
          className="v2-plan"
          aria-pressed={plan === "monthly"}
          onClick={() => setPlan("monthly")}
        >
          <p className="v2-plan-name">Mensual</p>
          <p className="v2-plan-price">
            {MONTHLY_PRICE}
            <span> / mes</span>
          </p>
          <p className="v2-plan-note">Se renueva cada mes.</p>
        </button>

        <button
          type="button"
          className="v2-plan is-featured"
          aria-pressed={plan === "yearly"}
          onClick={() => setPlan("yearly")}
        >
          <p className="v2-plan-offer">2 meses gratis</p>
          <p className="v2-plan-name">Anual</p>
          <p className="v2-plan-price">
            {YEARLY_EQUIVALENT}
            <span> / mes</span>
          </p>
          <p className="v2-plan-note">
            <s>{YEARLY_FULL}</s> {YEARLY_PRICE} al año.
          </p>
        </button>
      </div>

      <a
        href={`${V2_START_HREF}?plan=${plan}`}
        className="v2-cta"
        onClick={() =>
          trackEvent("CTA_CLICK", { location: "v2-pricing", plan })
        }
      >
        {plan === "yearly" ? "Empezá con el anual" : "Empezá con el mensual"}
      </a>
      <p className="v2-micro">Podés cambiar de plan más adelante.</p>
    </section>
  );
}
