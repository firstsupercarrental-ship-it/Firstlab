import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { WorkGallery } from "@/components/work-gallery";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Video, 3D, branding, web and social work produced by First Lab, a digital marketing agency in Dubai.",
};

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
