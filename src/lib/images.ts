import consultorio from "@/assets/images/consultorio.jpeg";
import doctor from "@/assets/images/doctor.jpeg";
import equipoMedico from "@/assets/images/equipo-medico.jpeg";
import logoTransparente from "@/assets/images/logo-transparente.png";
import type { ImageMetadata } from "astro";
import type { LocalImageProps } from "astro:assets";

const siteImages = {
  consultorio,
  doctor,
  equipoMedico,
  logoTransparente,
} as const;

export type SiteImageKey = keyof typeof siteImages;
export type ImagePreset = "hero" | "gallery" | "portrait";

const presetByName: Record<ImagePreset, { widths: number[]; sizes: string }> = {
  hero: {
    widths: [480, 768, 1024, 1280],
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  gallery: {
    widths: [400, 640, 960],
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  portrait: {
    widths: [420, 680, 960],
    sizes: "(min-width: 1024px) 40vw, 100vw",
  },
};

export function getSiteImage(imageKey: string): ImageMetadata {
  const image = siteImages[imageKey as SiteImageKey];
  if (!image) {
    throw new Error(`Unknown site image key: ${imageKey}`);
  }

  return image;
}

export function getPictureProps(
  imageKey: string,
  alt: string,
  preset: ImagePreset,
  loading: "eager" | "lazy" = "lazy",
): LocalImageProps {
  const src = getSiteImage(imageKey);
  const presetConfig = presetByName[preset];

  return {
    src,
    alt,
    formats: ["avif", "webp"],
    fallbackFormat: src.format,
    widths: presetConfig.widths,
    sizes: presetConfig.sizes,
    loading,
    decoding: "async",
  };
}
