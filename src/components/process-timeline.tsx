"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { process } from "@/lib/site";
import { Reveal } from "./ui/reveal";

/** Vertical timeline whose line draws itself as you scroll (21st.dev "Timeline"). */
export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      <div className="absolute bottom-0 left-6 top-0 w-px bg-white/10 sm:left-1/2" aria-hidden />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-0 left-6 top-0 w-px origin-top bg-gradient-to-b from-brand via-brand-400 to-transparent sm:left-1/2"
        aria-hidden
      />
      <div className="space-y-16">
        {process.map((p, i) => (
          <Reveal
            key={p.step}
            x={i % 2 ? 40 : -40}
            y={0}
            className={`relative pl-16 sm:w-1/2 sm:pl-0 ${i % 2 ? "sm:ml-auto sm:pl-14" : "sm:pr-14 sm:text-right"}`}
          >
            <span
              className={`absolute top-1 grid size-12 place-items-center rounded-full border border-brand/50 bg-ink-950 font-display text-xs text-brand shadow-[0_0_30px_-4px_rgba(226,113,30,0.6)] left-0 ${
                i % 2 ? "sm:-left-6" : "sm:left-auto sm:-right-6"
              }`}
            >
              {p.step}
            </span>
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-white/60">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
