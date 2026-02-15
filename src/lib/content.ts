import rawSite from "@/content/site.json";
import { siteSchema, type SiteContent } from "@/content/site.schema";

export const site: SiteContent = siteSchema.parse(rawSite);
