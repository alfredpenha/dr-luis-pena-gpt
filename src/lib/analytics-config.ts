import { site } from "@/lib/site";

export const analyticsConfig = {
  enabled: site.analytics.enabled,
  provider: site.analytics.provider,
  measurementId: site.analytics.measurementId,
} as const;
