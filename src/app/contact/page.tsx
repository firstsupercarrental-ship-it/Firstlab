import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with First Lab, a digital marketing agency at Azizi Riviera 46, Dubai. Call 056 136 8008 or email info@firstlab.ae.",
};

const channels = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with the team", href: site.whatsapp, external: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: InstagramIcon, label: "Instagram", value: "@firstlabmedia", href: site.instagram, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's build something remarkable."
        highlight={["remarkable."]}
        description="Tell us about your brand and goals. We'll reply with ideas, a plan and a quote — usually within one working day."
      />

      <section className="container-x grid gap-10 pb-24 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <SpotlightCard>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-5 p-6"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <c.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-white/40">{c.label}</span>
                    <span className="mt-1 block font-semibold">{c.value}</span>
                  </span>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
          <Reveal delay={0.35}>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-2 text-white/60 hover:text-white">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
              {site.address}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </section>

      <section className="container-x pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <iframe
              title="First Lab location on Google Maps"
              src={site.mapsEmbed}
              className="h-[420px] w-full grayscale invert-[0.92] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
