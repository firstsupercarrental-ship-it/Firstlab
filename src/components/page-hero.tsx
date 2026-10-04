import { BlurText } from "./ui/blur-text";
import { GridBackground } from "./ui/grid-background";
import { Reveal } from "./ui/reveal";
import { Spotlight } from "./ui/spotlight";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string[];
  description?: string;
  children?: React.ReactNode;
};

/** Header used at the top of every inner page. */
export function PageHero({ eyebrow, title, highlight, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
      <GridBackground />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
      <div aria-hidden className="absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
        </Reveal>
        <BlurText
          as="h1"
          text={title}
          highlight={highlight}
          className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        />
        {description && (
          <Reveal delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">{description}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.55}>{children}</Reveal>}
      </div>
    </section>
  );
}
