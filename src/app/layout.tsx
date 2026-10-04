import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Michroma, Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { services, site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-instrument", display: "swap" });
const michroma = Michroma({ subsets: ["latin"], weight: "400", variable: "--font-michroma", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Digital Marketing Agency Dubai | First Lab", template: "%s | First Lab Dubai" },
  description: site.description,
  applicationName: site.legalName,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 } },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: site.legalName,
    title: "Digital Marketing Agency Dubai | First Lab",
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "First Lab — Digital Marketing Agency in Dubai" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#050505" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MarketingAgency",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      alternateName: site.name,
      description: site.description,
      url: site.url,
      logo: `${site.url}/brand/logo-full.png`,
      image: `${site.url}/og.jpg`,
      email: site.email,
      telephone: "+971561368008",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Azizi Riviera 46, Shop 26",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital marketing services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/services/${s.slug}/` },
        })),
      },
      sameAs: [site.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.legalName,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${michroma.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before paint: scroll-reveal content is only hidden when JS can reveal it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <SpeedInsights />
      </body>
    </html>
  );
}
