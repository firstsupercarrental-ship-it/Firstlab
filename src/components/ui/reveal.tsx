"use client";

import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & { delay?: number; y?: number; x?: number };

/** Fades and lifts children into view once when scrolled to (CSS transition, see useInViewOnce). */
export function Reveal({ delay = 0, y = 32, x = 0, className, style, children, ...props }: RevealProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-inview={inView}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px`, "--reveal-x": `${x}px`, ...style } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
