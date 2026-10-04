"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { site } from "@/lib/site";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight";

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
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        {video && (
          <video
            key={video.src}
            className="h-full w-full object-cover"
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-x relative flex h-full flex-col justify-end pb-24 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-brand" />
          {site.tagline}
        </motion.p>
        <BlurText
          as="h1"
          text="We make brands impossible to ignore."
          highlight={["impossible", "ignore"]}
          delay={0.4}
          className="max-w-5xl text-5xl font-bold leading-[1] tracking-tight sm:text-7xl lg:text-8xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-white/70"
        >
          SEO, branding, web &amp; app development, social media, online advertising and 3D video production — one
          creative lab in the heart of Dubai.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/contact/">Start your project</Button>
          <Button href="/services/" variant="ghost">
            Explore services
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#intro"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
