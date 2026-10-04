"use client";

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

/** Word-by-word blur-in headline (21st.dev "Blur Text" pattern). */
export function BlurText({ text, className, highlight = [], delay = 0, as = "h2" }: BlurTextProps) {
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.07, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={cn(
            "mr-[0.25em] inline-block",
            highlight.includes(word.replace(/[^\w]/g, "")) && "text-gradient-brand",
          )}
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
