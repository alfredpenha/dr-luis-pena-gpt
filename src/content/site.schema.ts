import { z } from "zod";

const navItemSchema = z
  .object({
    label: z.string().min(1),
    href: z.string().min(1),
  })
  .strict();

const ultrasoundCategorySchema = z
  .object({
    title: z.string().min(1),
    items: z.array(z.string().min(1)).min(1),
  })
  .strict();

const faqItemSchema = z
  .object({
    q: z.string().min(1),
    a: z.string().min(1),
  })
  .strict();

const galleryImageSchema = z
  .object({
    srcKey: z.enum(["consultorio", "equipoMedico", "doctor"]),
    alt: z.string().min(1),
    caption: z
      .string()
      .min(1)
      .refine((value) => value.trim().split(/\s+/).length <= 8, {
        message: "caption must contain at most 8 words",
      }),
  })
  .strict();

const processStepSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
  })
  .strict();

const actionButtonSchema = z
  .object({
    label: z.string().min(1),
    href: z.string().min(1),
    variant: z.enum(["primary", "secondary", "whatsapp"]),
  })
  .strict();

const heroActionSchema = z
  .object({
    label: z.string().min(1),
    href: z.string().min(1),
  })
  .strict();

const trustItemSchema = z
  .object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    iconKey: z.string().min(1),
  })
  .strict();

const footerLinkSchema = z
  .object({
    label: z.string().min(1),
    href: z.string().min(1),
  })
  .strict();

const mapsStaticSchema = z
  .object({
    enabled: z.boolean(),
    centerQuery: z.string().min(1),
    zoom: z.number().int().min(0).max(21),
    size: z.string().regex(/^\d+x\d+$/, "size must follow WIDTHxHEIGHT"),
    scale: z.number().int().min(1).max(2),
    maptype: z.enum(["roadmap", "satellite", "terrain", "hybrid"]),
    markerColor: z.string().regex(/^0x[0-9A-Fa-f]{6}$/),
  })
  .strict();

export const siteSchema = z
  .object({
    meta: z
      .object({
        siteName: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
        locale: z.string().min(2),
        baseUrl: z.string().url().optional(),
        ogImage: z.string().min(1).optional(),
      })
      .strict(),
    brand: z
      .object({
        clinicName: z.string().min(1),
        lockupText: z.string().min(1),
        tagline: z.string().min(1).optional(),
      })
      .strict(),
    doctor: z
      .object({
        fullName: z.string().min(1),
        credentialId: z.string().min(1),
        specialties: z.array(z.string().min(1)).min(1),
        shortBio: z.string().min(1),
      })
      .strict(),
    contact: z
      .object({
        phone: z.string().min(1),
        whatsapp: z.string().min(1),
        addressLine: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),
        mapsUrl: z.string().url(),
        address: z.string().min(1),
        country: z.string().min(1),
        googleMapsUrl: z.string().url().optional(),
      })
      .strict(),
    hours: z
      .object({
        daysLabel: z.string().min(1),
        timeLabel: z.string().min(1),
        openingHours: z.array(z.string().min(1)).optional(),
      })
      .strict(),
    maps: z
      .object({
        provider: z.enum(["google"]),
        static: mapsStaticSchema,
      })
      .strict(),
    nav: z
      .object({
        items: z.array(navItemSchema).min(1),
      })
      .strict(),
    ctas: z
      .object({
        primaryLabel: z.string().min(1),
        primaryHref: z.string().min(1),
        secondaryLabel: z.string().min(1),
        secondaryHref: z.string().min(1),
      })
      .strict(),
    hero: z
      .object({
        eyebrow: z.string().min(1),
        h1: z.string().min(1),
        subheadline: z.string().min(1),
        description: z.string().min(1),
        ctas: z
          .object({
            primary: heroActionSchema,
            secondary: heroActionSchema,
          })
          .strict(),
        image: z
          .object({
            srcKey: z.string().min(1),
            alt: z.string().min(1),
          })
          .strict(),
        headline: z.string().min(1),
        imageKey: z.string().min(1),
        imageAlt: z.string().min(1),
      })
      .strict(),
    trust: z
      .object({
        items: z.array(trustItemSchema).min(1),
      })
      .strict(),
    trustBar: z
      .object({
        items: z.array(z.string().min(1)).length(3),
      })
      .strict(),
    valueProp: z
      .object({
        title: z.string().min(1),
        bullets: z.array(z.string().min(1)).min(4),
      })
      .strict(),
    services: z
      .object({
        title: z.string().min(1),
        generalMedicine: z
          .object({
            title: z.string().min(1),
            items: z.array(z.string().min(1)).min(1),
            note: z.string().min(1).optional(),
          })
          .strict(),
        ultrasound: z
          .object({
            title: z.string().min(1),
            categories: z.array(ultrasoundCategorySchema).min(1),
          })
          .strict(),
      })
      .strict(),
    clinicGallery: z.array(galleryImageSchema).length(3),
    aboutDoctor: z
      .object({
        title: z.string().min(1),
        imageKey: z.string().min(1),
        imageAlt: z.string().min(1),
        bio: z.array(z.string().min(1)).min(1),
      })
      .strict(),
    process: z
      .object({
        title: z.string().min(1),
        steps: z.array(processStepSchema).length(3),
      })
      .strict(),
    locationHours: z
      .object({
        title: z.string().min(1),
        subtitle: z.string().min(1).optional(),
        mapEmbedUrl: z.string().url().optional(),
        actions: z.array(actionButtonSchema).min(1),
      })
      .strict(),
    footer: z
      .object({
        quickLinks: z.array(footerLinkSchema).min(1),
        note: z.string().min(1).optional(),
      })
      .strict(),
    finalCta: z
      .object({
        title: z.string().min(1),
        description: z.string().min(1),
        buttonLabel: z.string().min(1),
        buttonHref: z.string().min(1),
      })
      .strict(),
    sections: z
      .object({
        showProcess: z.boolean(),
        showClinicGallery: z.boolean(),
        showFAQ: z.boolean().optional(),
      })
      .strict(),
    faq: z.array(faqItemSchema).optional(),
    privacy: z
      .object({
        title: z.string().min(1),
        body: z.array(z.string().min(1)).min(1),
      })
      .strict(),
    analytics: z
      .object({
        enabled: z.boolean(),
        provider: z.string().min(1),
        measurementId: z.string().min(1),
      })
      .strict(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.sections.showFAQ && (!data.faq || data.faq.length === 0)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "faq is required when sections.showFAQ is true",
        path: ["faq"],
      });
    }
    if (data.hero.image.srcKey !== "doctor") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'hero.image.srcKey must be "doctor"',
        path: ["hero", "image", "srcKey"],
      });
    }
  });

export type SiteContent = z.infer<typeof siteSchema>;
