"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  title: string;
  category: string;
  href: string;
  className: string;
} & ({ image: string } | { video: string; poster: string });

const items: Item[] = [
  { title: "Dubai Brand Film", category: "Video", video: "/media/hero-wide.mp4", poster: "/media/hero-wide-poster.jpg", href: "/services/3d-video-production/", className: "md:col-span-2 aspect-video" },
  { title: "Vertical Social Reel", category: "Video", video: "/media/hero-vertical.mp4", poster: "/media/hero-vertical-poster.jpg", href: "/services/social-media-marketing/", className: "md:row-span-2 aspect-[9/16]" },
  { title: "CGI Billboard in the Clouds", category: "3D", image: "/media/3d-video.webp", href: "/services/3d-video-production/", className: "aspect-[4/5]" },
  { title: "Brand Identity System", category: "Branding", image: "/media/branding.webp", href: "/services/branding-identity/", className: "aspect-[4/5]" },
  { title: "Social Content Production", category: "Social", image: "/media/social-media.webp", href: "/services/social-media-marketing/", className: "aspect-[4/5]" },
  { title: "Web & App Experience", category: "Web", image: "/media/web-app.webp", href: "/services/web-app-development/", className: "md:col-span-2 aspect-video" },
  { title: "Creative Design", category: "Branding", image: "/media/graphic-design.webp", href: "/services/graphic-design/", className: "aspect-[4/5]" },
  { title: "Performance Ad Campaigns", category: "Social", image: "/media/advertising.webp", href: "/services/online-media-advertising/", className: "aspect-[4/5]" },
  { title: "SEO Growth Dashboard", category: "Web", image: "/media/seo.webp", href: "/services/seo/", className: "aspect-[4/5]" },
];

const filters = ["All", "Video", "3D", "Branding", "Social", "Web"];

export function WorkGallery() {
  const [active, setActive] = useState("All");
  const visible = items.filter((i) => active === "All" || i.category === active);

  return (
    <section className="container-x pb-12">
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn("relative rounded-full px-5 py-2 text-sm font-medium transition-colors", active === f ? "text-black" : "text-white/60 hover:text-white")}
          >
            {active === f && <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.div
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={cn("group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800", active === "All" && item.className, active !== "All" && "aspect-[4/5]")}
            >
              <Link href={item.href} className="absolute inset-0">
                {"video" in item ? (
                  <>
                    <video className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={item.video} poster={item.poster} autoPlay muted loop playsInline preload="metadata" />
                    <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-brand text-black">
                      <Play className="size-4 fill-current" />
                    </span>
                  </>
                ) : (
                  <Image src={item.image} alt={item.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="eyebrow mb-2">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
