"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ROTATING = ["unforgettable.", "stand out.", "grow.", "lead."];
const LINES = [["Digital", "marketing", "agency", "in", "Dubai"], ["that", "makes", "brands"]];
const SWAP_EVERY = 2600;
const LEAVE_MS = 350;

/**
 * Hero H1: words rise from behind a mask line by line, then the final word
 * cycles (21st.dev "Animated Hero" rotating-text pattern). All motion is CSS
 * keyframes/transitions so iOS Safari renders it without flicker. The first
 * rotating word is server-rendered so the full sentence is in the HTML for SEO.
 */
export function HeroHeadline() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let swap: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setLeaving(true);
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING.length);
        setLeaving(false);
      }, LEAVE_MS);
    }, SWAP_EVERY);
    return () => {
      clearInterval(id);
      clearTimeout(swap);
    };
  }, []);

  let n = 0;
  return (
    <h1 className="mx-auto max-w-6xl text-center text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">
      {LINES.map((line, li) => (
        <span key={li} className="block">
          {line.map((word) => (
            <span key={word} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <span
                className="inline-block animate-[rise_1s_cubic-bezier(0.22,1,0.36,1)_backwards]"
                style={{ animationDelay: `${0.35 + n++ * 0.06}s` }}
              >
                {word}
              </span>
              {" "}
            </span>
          ))}
          {li === LINES.length - 1 && (
            <span
              className="inline-flex animate-[fade-in_0.6s_ease_backwards] overflow-hidden pb-[0.12em] align-bottom"
              style={{ animationDelay: `${0.35 + n * 0.06}s` }}
            >
              <span
                key={index}
                className={cn(
                  "inline-block animate-[word-in_0.5s_cubic-bezier(0.22,1,0.36,1)_backwards] whitespace-nowrap pr-[0.06em] font-serif font-normal italic transition-[opacity,translate] duration-300",
                  leaving && "-translate-y-1/2 opacity-0",
                )}
              >
                <span className="text-gradient-brand">{ROTATING[index]}</span>
              </span>
            </span>
          )}
        </span>
      ))}
    </h1>
  );
}
