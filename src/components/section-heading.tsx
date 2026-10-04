import { cn } from "@/lib/utils";
import { BlurText } from "./ui/blur-text";
import { Reveal } from "./ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  text,
  center,
}: {
  eyebrow: string;
  title: string;
  highlight?: string[];
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-14 max-w-3xl", center && "mx-auto text-center")}>
      <Reveal>
        <p className="eyebrow mb-5">{eyebrow}</p>
      </Reveal>
      <BlurText
        text={title}
        highlight={highlight}
        className={cn("text-3xl font-bold leading-tight tracking-tight sm:text-5xl", center && "justify-center")}
      />
      {text && (
        <Reveal delay={0.25}>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{text}</p>
        </Reveal>
      )}
    </div>
  );
}
