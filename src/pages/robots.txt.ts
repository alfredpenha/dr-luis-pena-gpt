import type { APIRoute } from "astro";

function resolveBaseUrl(): string {
  const siteOrigin = import.meta.env.SITE
    ? new URL(import.meta.env.SITE).origin
    : "https://example.github.io";
  const basePath = import.meta.env.BASE_URL ?? "/";
  const resolved = new URL(basePath, siteOrigin).toString();
  return resolved.replace(/\/$/, "");
}

export const GET: APIRoute = () => {
  const baseUrl = resolveBaseUrl();
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
