import rawSite from "@/content/site.json";
import { siteSchema } from "@/content/site.schema";

export const site = siteSchema.parse(rawSite);
