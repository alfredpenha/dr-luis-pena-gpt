import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const repoNameFromCi = process.env.GITHUB_REPOSITORY?.split("/")[1];
const defaultRepoName = repoNameFromCi ?? "dr-luis-pena-gpt";
const rawBasePath = process.env.PUBLIC_BASE_PATH ?? `/${defaultRepoName}`;
const normalizedBasePath =
  rawBasePath === "/" ? "/" : `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`;
const siteOrigin =
  process.env.PUBLIC_SITE_ORIGIN ?? "https://example.github.io";

export default defineConfig({
  site: siteOrigin,
  base: normalizedBasePath,
  output: "static",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [tailwind(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
