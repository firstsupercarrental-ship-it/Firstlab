"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { Reveal } from "../ui/reveal";

const points = [
  "Concept, script & storyboard",
  "On-location shoots across Dubai",
  "3D / CGI and motion graphics",
  "Edits cut for Reels, TikTok & YouTube",
];

/** Phone-framed vertical reel that rotates upright as you scroll (21st.dev "Container Scroll"). */
export function ReelShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const glow = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow mb-5">3D Video Production</p>
          </Reveal>
          <BlurText
            text="Content made for the scroll, shot in Dubai."
            highlight={["scroll,", "scroll", "Dubai."]}
            className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
          />
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              From cinematic brand films to CGI billboards and short-form reels, our production team creates video that
              grabs attention in the first second and keeps it.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/80">
                  <span className="grid size-6 place-items-center rounded-full bg-brand/15 text-brand">
                    <Check className="size-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/services/3d-video-production/">See video production</Button>
            </div>
          </Reveal>
        </div>

        <div className="order-1 flex justify-center lg:order-2" style={{ perspective: 1400 }}>
          <motion.div style={{ rotateX, rotateZ, scale }} className="relative">
            <motion.div style={{ opacity: glow }} className="absolute -inset-10 rounded-full bg-brand/40 blur-[90px]" aria-hidden />
            <div className="relative w-[260px] rounded-[2.75rem] border border-white/15 bg-ink-800 p-2.5 shadow-2xl sm:w-[300px]">
              <div className="absolute left-1/2 top-4 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden />
              <video
                className="aspect-[9/16] w-full rounded-[2.25rem] object-cover"
                src="/media/hero-vertical.mp4"
                poster="/media/hero-vertical-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
