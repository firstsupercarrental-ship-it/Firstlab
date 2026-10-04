import { pageMetadata } from "@/lib/seo";
import { ClientProjects } from "@/components/client-projects";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { WorkGallery } from "@/components/work-gallery";

export const metadata = pageMetadata({
  title: "Our Work – Video & Branding Projects",
  description:
    "Websites and apps for First Super Car Rental, La Touche Royale, Drivo and M9 Autos, plus video, 3D and branding work by First Lab, Dubai.",
  path: "/work/",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Creative that gets Dubai talking."
        highlight={["Dubai"]}
        description="Websites, mobile apps, video, 3D and design from the lab — including live projects for First Super Car Rental, La Touche Royale, Drivo and M9 Autos."
      />
      <section className="container-x pb-28">
        <SectionHeading
          eyebrow="Client Projects"
          title="Websites and apps we've launched."
          highlight={["launched."]}
          text="Real products live today for brands across Dubai and the UAE."
        />
        <ClientProjects />
      </section>

      <section className="container-x">
        <SectionHeading eyebrow="Creative" title="Video, 3D and design from the lab." highlight={["lab."]} />
      </section>
      <WorkGallery />
      <CtaSection title="Want results like these?" />
    </>
  );
}
