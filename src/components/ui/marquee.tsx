import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
};

/** Infinite horizontal scroller (Magic UI / 21st.dev "Marquee"). */
export function Marquee({ children, className, reverse, pauseOnHover = true, repeat = 4 }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:3rem] [gap:var(--gap)]",
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn(
            "flex shrink-0 animate-marquee items-center justify-around [gap:var(--gap)]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
