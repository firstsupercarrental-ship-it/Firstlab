import { site } from "@/lib/site";
import { BlurText } from "./ui/blur-text";
import { Button } from "./ui/button";
import { Meteors } from "./ui/meteors";
import { Reveal } from "./ui/reveal";

export function CtaSection({
  title = "Ready to grow your brand in Dubai?",
  text = "Tell us about your goals and we will come back with a clear plan, timeline and quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-black px-6 py-20 text-center sm:px-16">
        <Meteors number={22} />
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_50%_100%,rgba(226,113,30,0.3),transparent_75%)]" />
        <div className="relative">
          <p className="eyebrow mb-6">Let&apos;s Talk</p>
          <BlurText
            text={title}
            highlight={["Dubai?", "Dubai"]}
            className="mx-auto max-w-3xl justify-center text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
          />
          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-white/60">{text}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact/">Start a project</Button>
              <Button href={site.whatsapp} variant="ghost" external>
                WhatsApp us
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
