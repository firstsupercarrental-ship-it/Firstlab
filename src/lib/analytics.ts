/**
 * Google Analytics 4 + Google Ads, loaded through one Google tag (gtag.js).
 * IDs come from Vercel environment variables, so tracking is off until they
 * are set (Project → Settings → Environment Variables), then redeploy:
 *   NEXT_PUBLIC_GA_ID          GA4 Measurement ID, e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_GOOGLE_ADS_ID  Google Ads tag ID,  e.g. AW-123456789
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
export const TAG_IDS = [GA_ID, ADS_ID].filter(Boolean);

type GtagParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event" | "config" | "js", target: string | Date, params?: GtagParams) => void;
  }
}

/** Sends a GA4 event. Mark the lead events as "key events" in GA4, then import them into Google Ads as conversions. */
export function track(event: string, params: GtagParams = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, { page_path: window.location.pathname, ...params });
}

/** Maps outbound contact links to the lead events used for Google Ads conversions. */
export function eventForLink(href: string): string | null {
  if (href.startsWith("https://wa.me/") || href.includes("api.whatsapp.com")) return "whatsapp_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.includes("apps.apple.com")) return "app_store_click";
  if (href.includes("play.google.com")) return "google_play_click";
  return null;
}
