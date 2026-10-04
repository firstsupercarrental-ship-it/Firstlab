import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { services, site } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} in Dubai`,
    description: `${service.short} By First Lab, digital marketing agency in Dubai.`,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();
  const service = services[index];
  const next = services[(index + 1) % services.length];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description: service.intro,
          image: `${site.url}${service.image}`,
          url: `${site.url}/services/${service.slug}/`,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "City", name: "Dubai" },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.title, path: `/services/${service.slug}/` },
        ])}
      />
      <PageHero eyebrow={`Service ${String(index + 1).padStart(2, "0")}`} title={`${service.title} in Dubai`} highlight={["Dubai"]} description={service.short}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact/">Get a quote</Button>
          <Button href={site.whatsapp} variant="ghost" external>
            WhatsApp us
          </Button>
        </div>
      </PageHero>

      <section className="container-x grid gap-14 pb-28 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <Image src={service.image} alt={service.title} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xl leading-relaxed text-white/80">{service.intro}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="eyebrow mb-6 mt-12">What&apos;s included</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-black">
                    <Check className="size-3" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-12">
        <SectionHeading eyebrow="What you get" title="Outcomes that move your business." highlight={["move"]} />
        <div className="grid gap-5 md:grid-cols-3">
          {service.outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.1}>
              <SpotlightCard className="h-full">
                <div className="p-8">
                  <span className="font-display text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-2xl font-bold">{o.title}</h3>
                  <p className="mt-3 text-white/60">{o.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pt-16">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-10 sm:flex-row">
          <Link href="/services/" className="inline-flex items-center gap-2 text-white/60 transition hover:text-white">
            <ArrowLeft className="size-4" /> All services
          </Link>
          <Link href={`/services/${next.slug}/`} className="group inline-flex items-center gap-3 text-right">
            <span className="text-white/60">Next:</span>
            <span className="text-xl font-bold capitalize transition group-hover:text-brand">{next.title}</span>
            <ArrowRight className="size-5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaSection title={`Let's talk about ${service.title.toLowerCase()}.`} />
    </>
  );
}
