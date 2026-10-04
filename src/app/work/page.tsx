import { pageMetadata } from "@/lib/seo";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { WorkGallery } from "@/components/work-gallery";

export const metadata = pageMetadata({
  title: "Our Work – Video & Branding Projects",
  description: "Explore video, 3D, branding, web and social media work produced by First Lab, a digital marketing agency in Dubai.",
  path: "/work/",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Creative that gets Dubai talking."
        highlight={["Dubai"]}
        description="A selection of video, 3D, design and digital work from the lab. Filter by discipline to explore."
      />
      <WorkGallery />
      <CtaSection title="Want results like these?" />
    </>
  );
}
