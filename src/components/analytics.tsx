"use client";

import { useEffect } from "react";
import Script from "next/script";
import { eventForLink, TAG_IDS, track } from "@/lib/analytics";

/** Loads the Google tag for GA4 + Google Ads and records clicks on WhatsApp, phone, email and app store links. */
export function Analytics() {
  useEffect(() => {
    if (!TAG_IDS.length) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const event = eventForLink(link.getAttribute("href") ?? "");
      if (event) track(event, { link_url: link.href, link_text: link.innerText.replace(/\s+/g, " ").trim().slice(0, 100) || link.getAttribute("aria-label") || "" });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!TAG_IDS.length) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${TAG_IDS[0]}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${TAG_IDS.map((id) => `gtag('config','${id}');`).join("")}`}
      </Script>
    </>
  );
}
