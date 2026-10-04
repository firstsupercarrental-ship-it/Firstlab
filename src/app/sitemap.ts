import type { MetadataRoute } from "next";
import { nav, services, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...nav.map((n) => n.href), ...services.map((s) => `/services/${s.slug}/`)];
  return pages.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 }));
}
