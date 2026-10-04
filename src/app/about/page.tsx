import Image from "next/image";
import { Compass, Eye, Target } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { SectionHeading } from "@/components/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { services } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Our Dubai Marketing Agency",
  description:
    "Meet First Lab Media, a creative digital marketing agency at Azizi Riviera, Dubai, blending strategy, design, technology and video production.",
  path: "/about/",
});

const pillars = [
  { icon: Target, title: "Our Mission", text: "To help ambitious UAE businesses grow with marketing that is creative, data-driven and measurable." },
  { icon: Eye, title: "Our Vision", text: "To be the lab where Dubai's most memorable brands are designed, launched and scaled." },
  { icon: Compass, title: "Our Approach", text: "Experiment, measure, refine. We treat every campaign like a lab test — and keep what works." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About First Lab"
        title="Where ideas are tested and brands are built."
        highlight={["tested", "built."]}
        description="First Lab Media is a Dubai digital marketing agency. We bring strategists, designers, developers, writers and video producers together to help businesses stand out and grow."
      />

      <section className="pb-24">
        <Marquee className="[--duration:60s] [--gap:1.25rem]" repeat={2}>
          {services.map((s) => (
            <div key={s.slug} className="relative isolate h-72 w-56 shrink-0 overflow-hidden rounded-3xl border border-white/10 sm:h-96 sm:w-72">
              <Image src={s.image} alt={s.title} fill sizes="288px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 font-bold capitalize">{s.title}</p>
            </div>
          ))}
        </Marquee>
      </section>

      <section className="container-x grid gap-16 pb-28 lg:grid-cols-2">
        <SectionHeading eyebrow="Our Story" title="A lab, not a factory." highlight={["lab,"]} />
        <Reveal className="space-y-6 text-lg leading-relaxed text-white/70">
          <p>
            We started First Lab with a simple idea: marketing works best when creativity and data sit at the same table.
            Too many businesses in Dubai juggle separate agencies for design, ads, web and video — and lose time, budget
            and consistency along the way.
          </p>
          <p>
            So we built one lab that does it all. From the first logo sketch to the last ad optimisation, the same team
            owns your brand, your message and your results.
          </p>
          <p>
            Based at Azizi Riviera in Dubai, we work with startups, retailers, real-estate, hospitality and service
            businesses across the UAE.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-28">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <SpotlightCard className="h-full">
                <div className="p-8">
                  <span className="grid size-12 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{p.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-12">
        <SectionHeading eyebrow="Our Process" title="How every project runs." highlight={["runs."]} center />
        <ProcessTimeline />
      </section>

      <CtaSection />
    </>
  );
}
