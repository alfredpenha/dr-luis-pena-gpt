import consultorio from "@/assets/images/consultorio.jpeg";
import doctor from "@/assets/images/doctor.jpeg";
import equipoMedico from "@/assets/images/equipo-medico.jpeg";
import logoTransparente from "@/assets/images/logo-transparente.png";
import type { ImageMetadata } from "astro";

const siteImages = {
  consultorio,
  doctor,
  equipoMedico,
  logoTransparente,
} as const;

export type SiteImageKey = keyof typeof siteImages;

export function getSiteImage(imageKey: string): ImageMetadata {
  const image = siteImages[imageKey as SiteImageKey];
  if (!image) {
    throw new Error(`Unknown site image key: ${imageKey}`);
  }

  return image;
}
