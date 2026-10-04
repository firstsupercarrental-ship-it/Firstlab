"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

const VIDEOS = {
  wide: { src: "/media/hero-wide.mp4", poster: "/media/hero-wide-poster.jpg" },
  tall: { src: "/media/hero-vertical.mp4", poster: "/media/hero-vertical-poster.jpg" },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  // Pick the landscape or portrait cut after mount so phones only download the small vertical file.
  const [video, setVideo] = useState<(typeof VIDEOS)["wide"] | null>(null);
  useEffect(() => {
    setVideo(window.matchMedia("(min-aspect-ratio: 1/1)").matches ? VIDEOS.wide : VIDEOS.tall);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} aria-label="First Lab showreel" className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        {/* Server-rendered poster so the first paint (and LCP) never waits for JavaScript. */}
        <picture>
          <source media="(max-aspect-ratio: 1/1)" srcSet={VIDEOS.tall.poster} />
          <img
            src={VIDEOS.wide.poster}
            alt="First Lab digital marketing video production in Dubai"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        {video && (
          <video
            key={video.src}
            className="absolute inset-0 h-full w-full object-cover"
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
        )}
      </motion.div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-black/50 to-ink-950" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-x relative flex h-full items-end pb-24 sm:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          <span className="text-gradient-brand">Digital marketing agency in Dubai</span> that makes brands impossible to
          ignore.
        </motion.h1>
      </motion.div>

      <motion.a
        href="#intro"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
