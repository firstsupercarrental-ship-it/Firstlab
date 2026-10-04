import type { Metadata, Viewport } from "next";
import { Michroma, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const michroma = Michroma({ subsets: ["latin"], weight: "400", variable: "--font-michroma", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Digital Marketing Agency Dubai | First Lab", template: "%s | First Lab Dubai" },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.legalName,
    title: "Digital Marketing Agency Dubai | First Lab",
    description: site.description,
    images: [{ url: "/media/hero-wide-poster.jpg", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#050505" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/brand/logo-full.png`,
  email: site.email,
  telephone: "+971561368008",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Azizi Riviera 46, Shop 26",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${michroma.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
