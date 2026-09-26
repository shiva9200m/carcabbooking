export type GA4EventParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: GA4EventParams
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: GA4EventParams = {}
) {
  if (
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", eventName, params);
}