import { z } from "zod";

const privacySectionSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
});

export const siteSchema = z.object({
  locale: z.string().min(2),
  brand: z.object({
    name: z.string().min(1),
    tagline: z.string().min(1),
  }),
  seo: z.object({
    siteUrl: z.string().url(),
    defaultTitle: z.string().min(1),
    titleTemplate: z.string().min(1),
    defaultDescription: z.string().min(1),
    defaultImageAlt: z.string().min(1),
  }),
  navigation: z.object({
    homeLabel: z.string().min(1),
    privacyLabel: z.string().min(1),
  }),
  home: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    ctaLabel: z.string().min(1),
    ctaHref: z.string().min(1),
  }),
  privacy: z.object({
    title: z.string().min(1),
    updatedAt: z.string().min(1),
    sections: z.array(privacySectionSchema).min(1),
  }),
  footer: z.object({
    legalLine: z.string().min(1),
  }),
  analytics: z.object({
    enabled: z.boolean(),
    provider: z.string().min(1),
    measurementId: z.string().min(1),
  }),
});

export type SiteContent = z.infer<typeof siteSchema>;
