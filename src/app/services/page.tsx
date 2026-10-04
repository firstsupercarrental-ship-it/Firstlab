import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Dubai",
  description:
    "Branding, web & app development, SEO, social media marketing, online advertising, graphic design, content writing and 3D video production in Dubai.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eight ways we grow your brand in Dubai."
        highlight={["grow", "Dubai."]}
        description="Pick one service or combine them into a full-funnel campaign. Every engagement starts with strategy and ends with measurable results."
      />

      <section className="container-x pb-12">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {services.map((s, i) => (
            <Reveal key={s.slug} y={20}>
              <Link
                href={`/services/${s.slug}/`}
                className="group relative grid items-center gap-6 py-10 transition-colors md:grid-cols-12 md:py-12"
              >
                <span className="font-display text-sm text-white/40 md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-3xl font-bold capitalize tracking-tight transition-all duration-500 group-hover:translate-x-3 group-hover:text-brand md:col-span-5 md:text-4xl">
                  {s.title}
                </h2>
                <p className="text-white/60 md:col-span-4">{s.short}</p>
                <div className="flex items-center justify-end gap-4 md:col-span-2">
                  <div className="relative hidden h-20 w-28 overflow-hidden rounded-2xl opacity-0 transition-all duration-500 group-hover:opacity-100 lg:block">
                    <Image src={s.image} alt="" fill sizes="112px" className="object-cover" />
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-black">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection title="Not sure which service you need?" text="Book a free consultation and we will recommend the right mix for your goals and budget." />
    </>
  );
}
