"use client";

import { Fragment } from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

type BlurTextProps = {
  text: string;
  className?: string;
  /** Words (exact match, punctuation stripped) to paint in the brand accent. */
  highlight?: string[];
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
};

/** Word-by-word fade-up headline (21st.dev "Blur Text" pattern), driven by CSS transitions. */
export function BlurText({ text, className, highlight = [], delay = 0, as: Tag = "h2" }: BlurTextProps) {
  const [ref, inView] = useInViewOnce<HTMLHeadingElement>(0.3);
  const words = text.split(" ");
  return (
    <Tag
      ref={ref}
      data-inview={inView}
      className={cn("reveal-words flex flex-wrap gap-x-[0.25em]", className)}
      style={{ "--reveal-delay": `${delay}s` } as React.CSSProperties}
    >
      {words.map((word, i) => (
        // Fragment keeps a real space between words so crawlers and screen readers read normal text.
        <Fragment key={i}>
          <span style={{ "--i": i } as React.CSSProperties} className="reveal-word inline-block">
            <span className={cn(highlight.includes(word.replace(/[^\w]/g, "")) && "text-gradient-brand")}>{word}</span>
          </span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}
