import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, services, site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="container-x relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image src="/brand/logo-full.png" alt="First Lab Media" width={180} height={180} className="-ml-4 -mt-8 h-40 w-auto mix-blend-lighten" />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            A Dubai digital marketing agency for branding, web &amp; app development, SEO, social media, advertising and 3D
            video production.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-brand hover:text-brand">
              <InstagramIcon className="size-5" />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-brand hover:text-brand">
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="eyebrow mb-5">Explore</h2>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/60 transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow mb-5">Services</h2>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="text-white/60 transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow mb-5">Get In Touch</h2>
          <ul className="space-y-4 text-sm text-white/60">
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                {site.address}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none text-center font-display text-[13vw] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]"
      >
        FIRSTLAB
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} firstlab.ae | All Rights Reserved</p>
          <p>Digital Marketing Agency · Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
