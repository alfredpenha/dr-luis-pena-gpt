import type { APIRoute } from "astro";
import { site } from "@/lib/content";
import { withBase } from "@/lib/urls";

function resolveBaseUrl(): string {
  const siteOrigin = import.meta.env.SITE
    ? new URL(import.meta.env.SITE).origin
    : "https://example.github.io";
  const basePath = import.meta.env.BASE_URL ?? "/";
  const resolved = new URL(basePath, siteOrigin).toString();
  return resolved.replace(/\/$/, "");
}

function uniquePaths(paths: string[]): string[] {
  return [...new Set(paths)];
}

export const GET: APIRoute = () => {
  const baseUrl = resolveBaseUrl();
  const navPaths = site.nav.items.map((item) => item.href);
  const paths = uniquePaths(["/", ...navPaths]);
  const urls = paths
    .map(
      (path) =>
        `<url><loc>${new URL(withBase(path), siteOriginFromBase(baseUrl)).toString()}</loc></url>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

function siteOriginFromBase(baseUrl: string): string {
  return new URL(baseUrl).origin;
}
