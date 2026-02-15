import { getImage, type ImageMetadata } from "astro:assets";

export async function getResponsiveImage(source: ImageMetadata, alt: string) {
  const optimized = await getImage({
    src: source,
    alt,
    widths: [640, 960, 1280],
    formats: ["webp", "avif"],
  });

  return optimized;
}
