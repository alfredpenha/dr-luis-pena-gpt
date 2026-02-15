import { analyticsConfig } from "@/lib/analytics-config";

export function isAnalyticsEnabled(): boolean {
  return analyticsConfig.enabled;
}

export function getAnalyticsScriptSrc(): string {
  if (analyticsConfig.provider === "google-analytics") {
    return `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}`;
  }

  return "";
}
