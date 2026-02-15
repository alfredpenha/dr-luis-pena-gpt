import type {
  AnalyticsEventName,
  AnalyticsEventPayload,
} from "@/lib/analytics";
import { isTrackableEventName } from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsEventPayload,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, payload);
}

export function parseTrackEventName(
  value: string | null,
): AnalyticsEventName | null {
  if (!value || !isTrackableEventName(value)) {
    return null;
  }

  return value;
}

export {};
