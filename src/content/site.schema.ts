import { z } from "zod";

const navItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const ultrasoundCategorySchema = z.object({
  title: z.string().min(1),
  items: z.array(z.string().min(1)).min(1),
});

const faqItemSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

const galleryImageSchema = z.object({
  imageKey: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
});

const processStepSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const actionButtonSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z.enum(["primary", "secondary", "whatsapp"]),
});

export const siteSchema = z
  .object({
    meta: z.object({
      siteName: z.string().min(1),
      title: z.string().min(1),
      description: z.string().min(1),
      locale: z.string().min(2),
      baseUrl: z.string().url().optional(),
    }),
    doctor: z.object({
      fullName: z.string().min(1),
      credentialId: z.string().min(1),
      specialties: z.array(z.string().min(1)).min(1),
      shortBio: z.string().min(1),
    }),
    contact: z.object({
      phone: z.string().min(1),
      whatsapp: z.string().min(1),
      address: z.string().min(1),
      city: z.string().min(1),
      state: z.string().min(1),
      googleMapsUrl: z.string().url().optional(),
    }),
    hours: z.object({
      daysLabel: z.string().min(1),
      timeLabel: z.string().min(1),
    }),
    nav: z.object({
      items: z.array(navItemSchema).min(1),
    }),
    ctas: z.object({
      primaryLabel: z.string().min(1),
      primaryHref: z.string().min(1),
      secondaryLabel: z.string().min(1),
      secondaryHref: z.string().min(1),
    }),
    hero: z.object({
      headline: z.string().min(1),
      subheadline: z.string().min(1),
      imageKey: z.string().min(1),
      imageAlt: z.string().min(1),
    }),
    trustBar: z.object({
      items: z.array(z.string().min(1)).length(3),
    }),
    services: z.object({
      title: z.string().min(1),
      generalMedicine: z.object({
        title: z.string().min(1),
        items: z.array(z.string().min(1)).min(1),
        note: z.string().min(1).optional(),
      }),
      ultrasound: z.object({
        title: z.string().min(1),
        categories: z.array(ultrasoundCategorySchema).min(1),
      }),
    }),
    clinicGallery: z.object({
      title: z.string().min(1),
      subtitle: z.string().min(1).optional(),
      images: z.array(galleryImageSchema).length(3),
    }),
    aboutDoctor: z.object({
      title: z.string().min(1),
      imageKey: z.string().min(1),
      imageAlt: z.string().min(1),
      bio: z.array(z.string().min(1)).min(1),
    }),
    process: z.object({
      title: z.string().min(1),
      steps: z.array(processStepSchema).length(3),
    }),
    locationHours: z.object({
      title: z.string().min(1),
      subtitle: z.string().min(1).optional(),
      mapEmbedUrl: z.string().url().optional(),
      actions: z.array(actionButtonSchema).min(1),
    }),
    finalCta: z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      buttonLabel: z.string().min(1),
      buttonHref: z.string().min(1),
    }),
    sections: z.object({
      showProcess: z.boolean(),
      showClinicGallery: z.boolean(),
      showFAQ: z.boolean().optional(),
    }),
    faq: z.array(faqItemSchema).optional(),
    privacy: z.object({
      title: z.string().min(1),
      body: z.array(z.string().min(1)).min(1),
    }),
    analytics: z.object({
      enabled: z.boolean(),
      provider: z.string().min(1),
      measurementId: z.string().min(1),
    }),
  })
  .superRefine((data, ctx) => {
    if (data.sections.showFAQ && (!data.faq || data.faq.length === 0)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "faq is required when sections.showFAQ is true",
        path: ["faq"],
      });
    }
  });

export type SiteContent = z.infer<typeof siteSchema>;
