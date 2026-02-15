import { analyticsConfig } from "@/lib/analytics-config";

export type AnalyticsEventName = "click_whatsapp" | "click_maps" | "click_call";
export type AnalyticsSource = "header" | "hero" | "location" | "footer";

export interface AnalyticsEventPayload {
  source: AnalyticsSource;
  href?: string;
  label?: string;
}

export function isAnalyticsEnabled(): boolean {
  return analyticsConfig.enabled;
}

export function getAnalyticsScriptSrc(): string {
  if (analyticsConfig.provider === "google-analytics") {
    return `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}`;
  }

  return "";
}

export function isTrackableEventName(
  value: string,
): value is AnalyticsEventName {
  return (
    value === "click_whatsapp" ||
    value === "click_maps" ||
    value === "click_call"
  );
}
