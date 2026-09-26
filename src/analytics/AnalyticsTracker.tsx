import { useEffect } from "react";

import { trackEvent } from "@/analytics/GA4";

const GOOGLE_BUSINESS_URL =
  "https://share.google/0RjH4DRUBhenK3tYv";

export function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) return;

      const anchor = target.closest(
        "a"
      ) as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.href || "";

      const linkText =
        anchor.textContent?.trim().replace(/\s+/g, " ") ||
        "Unknown";

      // =========================
      // CALL CLICK
      // =========================

      if (href.startsWith("tel:")) {
        trackEvent("call_click", {
          link_text: linkText,
          link_url: href,
          page_path: window.location.pathname,
        });

        return;
      }

      // =========================
      // WHATSAPP CLICK
      // =========================

      if (
        href.includes("wa.me/") ||
        href.includes("api.whatsapp.com") ||
        href.includes("web.whatsapp.com")
      ) {
        trackEvent("whatsapp_click", {
          link_text: linkText,
          page_path: window.location.pathname,
        });

        return;
      }

      // =========================
      // GOOGLE BUSINESS CLICK
      // =========================

      if (
        href === GOOGLE_BUSINESS_URL ||
        href.includes("share.google/0RjH4DRUBhenK3tYv")
      ) {
        trackEvent("google_business_click", {
          link_text: linkText,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener(
      "click",
      handleClick,
      true
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClick,
        true
      );
    };
  }, []);

  return null;
}