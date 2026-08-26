"use client";

import { useEffect } from "react";
import { captureAttribution, trackEvent } from "@/lib/analytics";

export default function MetaPageView() {
  useEffect(() => {
    captureAttribution();
    trackEvent("LANDING_VIEW");
  }, []);

  return null;
}
