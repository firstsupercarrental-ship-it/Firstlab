import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This experiment didn't work out." highlight={["experiment"]} description="The page you are looking for doesn't exist or has moved.">
      <div className="mt-10">
        <Button href="/">Back to home</Button>
      </div>
    </PageHero>
  );
}
