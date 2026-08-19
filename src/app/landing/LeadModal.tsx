"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  FORM_SUBMIT,
  FORM_SUBTITLE,
  FORM_SUCCESS,
  FORM_TITLE,
  FORM_TRUST,
  STORAGE_LEAD_KEY,
} from "@/lib/landing";
import { getAttribution, trackEvent } from "@/lib/analytics";

const PRODUCT_TYPES = [
  "Comunidad privada",
  "Mentoría",
  "Clases",
  "Fitness / entrenamiento",
  "Contenido",
  "Otro",
] as const;

const CHARGING_OPTIONS = ["Sí", "Todavía no"] as const;

const MEMBER_RANGES = ["0", "1–10", "11–50", "51–200", "200+"] as const;

const PRICE_RANGES = [
  "Menos de $10.000",
  "$10.000–$25.000",
  "$25.000–$50.000",
  "$50.000+",
  "Todavía no sé",
] as const;

type LeadForm = {
  product_type: string;
  already_charging: string;
  member_range: string;
  price_range: string;
  phone: string;
};

const EMPTY_FORM: LeadForm = {
  product_type: "",
  already_charging: "",
  member_range: "",
  price_range: "",
  phone: "",
};

export type LeadModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const titleId = useId();
  const startedRef = useRef(false);
  const [form, setForm] = useState<LeadForm>(EMPTY_FORM);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    setSubmitted(false);
    setError("");
    setForm(EMPTY_FORM);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  function markStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("FORM_START");
  }

  function update<K extends keyof LeadForm>(key: K, value: LeadForm[K]) {
    markStart();
    setForm((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.product_type) {
      setError("Elegí qué vendes.");
      return;
    }
    if (!form.already_charging) {
      setError("Indicá si ya cobrás mensualmente.");
      return;
    }
    if (!form.member_range) {
      setError("Indicá cuántos miembros tenés.");
      return;
    }
    if (!form.price_range) {
      setError("Indicá cuánto cobrás o cobrarías.");
      return;
    }

    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 8) {
      setError("Ingresá un WhatsApp válido.");
      return;
    }

    const attribution = getAttribution();
    const lead = {
      ...form,
      created_at: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(STORAGE_LEAD_KEY, JSON.stringify(lead));
    } catch {
      // localStorage can throw in private mode; the lead event still fires.
    }

    trackEvent("LEAD", {
      product_type: form.product_type,
      already_charging: form.already_charging,
      member_range: form.member_range,
      price_range: form.price_range,
      utm_source: attribution.utm_source,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
    });

    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92dvh] w-full max-w-md flex-col overflow-y-auto rounded-t-[8px] bg-white px-5 pb-[max(20px,env(safe-area-inset-bottom))] pt-5 sm:rounded-[8px] sm:px-6 sm:pb-6"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="text-xl font-semibold tracking-[-0.03em] text-ink">
              {FORM_TITLE}
            </h2>
            {!submitted ? (
              <p className="mt-1 text-sm text-muted">{FORM_SUBTITLE}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl leading-none text-muted"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <p className="pb-4 text-base text-ink">{FORM_SUCCESS}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-ink">¿Qué vendes?</span>
              <select
                required
                value={form.product_type}
                onChange={(event) => update("product_type", event.target.value)}
                className="min-h-12 w-full rounded-[4px] border border-line bg-white px-3 text-base text-ink"
              >
                <option value="">Elegí una opción</option>
                {PRODUCT_TYPES.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <fieldset>
              <legend className="text-sm font-medium text-ink">
                ¿Ya cobras mensualmente?
              </legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {CHARGING_OPTIONS.map((option) => (
                  <ChoiceButton
                    key={option}
                    selected={form.already_charging === option}
                    onClick={() => update("already_charging", option)}
                  >
                    {option}
                  </ChoiceButton>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-medium text-ink">
                ¿Cuántos miembros tienes?
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {MEMBER_RANGES.map((option) => (
                  <ChoiceButton
                    key={option}
                    selected={form.member_range === option}
                    onClick={() => update("member_range", option)}
                    className="min-w-[30%] flex-1"
                  >
                    {option}
                  </ChoiceButton>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-medium text-ink">
                ¿Cuánto cobras o cobrarías por mes?
              </legend>
              <div className="mt-2 grid grid-cols-1 gap-2">
                {PRICE_RANGES.map((option) => (
                  <ChoiceButton
                    key={option}
                    selected={form.price_range === option}
                    onClick={() => update("price_range", option)}
                  >
                    {option}
                  </ChoiceButton>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-ink">WhatsApp</span>
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                required
                placeholder="11 1234 5678"
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                className="min-h-12 w-full rounded-[4px] border border-line bg-white px-3 text-base text-ink placeholder:text-muted"
              />
            </label>

            {error ? <p className="text-sm text-ink">{error}</p> : null}

            <button type="submit" className="btn-cta">
              {FORM_SUBMIT}
            </button>
            <p className="text-center text-[13px] text-muted">{FORM_TRUST}</p>
          </form>
        )}
      </div>
    </div>
  );
}

function ChoiceButton({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-12 rounded-[4px] border px-3 text-sm font-medium ${
        selected
          ? "border-accent bg-accent text-white"
          : "border-line bg-white text-ink"
      } ${className}`}
    >
      {children}
    </button>
  );
}
