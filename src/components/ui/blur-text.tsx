"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type BlurTextProps = {
  text: string;
  className?: string;
  /** Words (exact match, punctuation stripped) to paint in the brand accent. */
  highlight?: string[];
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
};

/** Word-by-word fade-up headline (21st.dev "Blur Text" pattern, without the GPU-heavy blur filter). */
export function BlurText({
  text,
  className,
  highlight = [],
  delay = 0,
  as = "h2",
}: BlurTextProps) {
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag
      className={cn("flex flex-wrap gap-x-[0.25em]", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.07, delayChildren: delay }}
    >
      {words.map((word, i) => (
        // Fragment keeps a real space between words so crawlers and screen readers read normal text.
        <Fragment key={i}>
          <motion.span
            className={cn(
              "inline-block",
              highlight.includes(word.replace(/[^\w]/g, "")) &&
                "text-gradient-brand",
            )}
            variants={{
              hidden: { opacity: 0, y: "0.4em" },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}
