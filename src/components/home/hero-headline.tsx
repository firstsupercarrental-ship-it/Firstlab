"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ROTATING = ["unforgettable.", "stand out.", "grow.", "lead."];
const LINES = [["Digital", "marketing", "agency", "in", "Dubai"], ["that", "makes", "brands"]];
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Hero H1: words rise from behind a mask line by line, then the final word
 * cycles (21st.dev "Animated Hero" rotating-text pattern). The first rotating
 * word is server-rendered so the full sentence is in the HTML for SEO.
 */
export function HeroHeadline() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, []);

  let n = 0;
  return (
    <h1 className="mx-auto max-w-6xl text-center text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">
      {LINES.map((line, li) => (
        <span key={li} className="block">
          {line.map((word) => {
            const delay = 0.35 + n++ * 0.06;
            return (
              <span key={word} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay, ease: EASE }}
                >
                  {word}
                </motion.span>
                {" "}
              </span>
            );
          })}
          {li === LINES.length - 1 && (
            <motion.span
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 + n * 0.06, duration: 0.6, layout: { duration: 0.5, ease: EASE } }}
              className="relative inline-flex overflow-hidden pb-[0.12em] align-bottom"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={ROTATING[index]}
                  initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="inline-block whitespace-nowrap pr-[0.06em] font-serif font-normal italic text-gradient-brand"
                >
                  {ROTATING[index]}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          )}
        </span>
      ))}
    </h1>
  );
}
