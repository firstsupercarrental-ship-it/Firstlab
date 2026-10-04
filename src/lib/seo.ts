import type { Metadata } from "next";
import { site } from "./site";

const OG_IMAGE = { url: "/og.jpg", width: 1200, height: 630, alt: "First Lab — Digital Marketing Agency in Dubai" };

/**
 * Full per-page metadata. Next.js replaces (not merges) nested objects like
 * `openGraph`, so every page builds the complete set here: canonical URL,
 * Open Graph and Twitter card.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle,
}: {
  title: string;
  /** Skip the "| First Lab Dubai" suffix (used by the home page). */
  absoluteTitle?: boolean;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const images = image ? [{ url: image, alt: title }] : [OG_IMAGE];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AE",
      siteName: site.legalName,
      url: path,
      title,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images: images.map((i) => i.url) },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
