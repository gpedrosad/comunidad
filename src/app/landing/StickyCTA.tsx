"use client";

import { CTA_LABEL } from "@/lib/landing";

export type StickyCTAProps = {
  visible: boolean;
  hiddenByModal: boolean;
  onCta: () => void;
};

export default function StickyCTA({
  visible,
  hiddenByModal,
  onCta,
}: StickyCTAProps) {
  if (!visible || hiddenByModal) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-page px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]">
      <button type="button" onClick={onCta} className="btn-cta">
        {CTA_LABEL}
      </button>
    </div>
  );
}
