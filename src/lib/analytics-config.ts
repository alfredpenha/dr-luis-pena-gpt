import { site } from "@/lib/content";

const envMeasurementId = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID;
const measurementId = envMeasurementId || site.analytics.measurementId;

export const analyticsConfig = {
  enabled: site.analytics.enabled && Boolean(measurementId),
  provider: site.analytics.provider,
  measurementId,
} as const;
