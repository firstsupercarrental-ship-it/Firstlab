import { Gauge, Layers, LineChart, MessageCircle, Sparkles, Users } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { ReelShowcase } from "@/components/home/reel-showcase";
import { CtaSection } from "@/components/cta-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { SectionHeading } from "@/components/section-heading";
import { ServicesGrid } from "@/components/services-grid";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { faqs, site } from "@/lib/site";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digital Marketing Agency Dubai | First Lab",
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const stats = [
  { value: 8, suffix: "", label: "Core services under one roof" },
  { value: 360, suffix: "°", label: "Campaigns from idea to launch" },
  { value: 24, suffix: "h", label: "Response to every enquiry" },
];

const reasons = [
  { icon: Layers, title: "Everything in one lab", text: "Strategy, design, development, ads and video under one roof — no juggling agencies." },
  { icon: LineChart, title: "Results you can measure", text: "Clear KPIs, live tracking and honest reports on leads, sales and return on spend." },
  { icon: Users, title: "Local market expertise", text: "We know Dubai's audiences, platforms and seasons, from Ramadan to DSF." },
  { icon: Gauge, title: "Fast execution", text: "Lean team, quick decisions, and campaigns that go live in days, not months." },
  { icon: Sparkles, title: "Creative that stands out", text: "Cinematic video, 3D and design that make your brand impossible to scroll past." },
  { icon: MessageCircle, title: "Always reachable", text: "Talk to the people doing the work, directly on WhatsApp or in our Dubai office." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="intro" className="container-x grid scroll-mt-24 gap-16 py-28 lg:grid-cols-2 lg:items-end">
        <SectionHeading
          eyebrow="Who we are"
          title="A creative digital lab built for Dubai brands."
          highlight={["lab", "Dubai"]}
          text="First Lab is a full-service digital marketing agency in Dubai. We blend data, design and storytelling to help businesses get found, get noticed and get chosen — online and offline."
        />
        <div className="grid grid-cols-3 gap-4 lg:mb-14">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <NumberTicker value={s.value} suffix={s.suffix} className="block font-display text-3xl text-brand sm:text-4xl" />
              <p className="mt-3 text-xs leading-snug text-white/60 sm:text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="container-x pb-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our Services" title="Everything your brand needs to grow." highlight={["grow."]} />
          <Reveal className="mb-14">
            <Button href="/services/" variant="ghost">
              All services
            </Button>
          </Reveal>
        </div>
        <ServicesGrid />
      </section>

      <ReelShowcase />

      <section className="container-x py-28">
        <SectionHeading
          eyebrow="Why First Lab"
          title="Built to deliver growth, not just deliverables."
          highlight={["growth,"]}
          center
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.1}>
              <SpotlightCard className="h-full">
                <div className="p-8">
                  <span className="grid size-12 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                    <r.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{r.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-x">
          <SectionHeading eyebrow="How we work" title="From first call to full launch." highlight={["launch."]} center />
          <ProcessTimeline />
        </div>
      </section>

      <section className="container-x py-28">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }}
        />
        <SectionHeading eyebrow="FAQ" title="Questions about digital marketing in Dubai." highlight={["Dubai."]} center />
        <Faq />
      </section>

      <CtaSection />
    </>
  );
}
