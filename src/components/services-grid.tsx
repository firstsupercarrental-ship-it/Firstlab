"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { TiltCard } from "./ui/tilt-card";

/** Image cards for all services with 3D tilt and staggered entrance. */
export function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard className="h-full">
            <Link
              href={`/services/${s.slug}/`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-ink-800"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
              <span className="absolute left-5 top-5 font-display text-xs text-white/60">{String(i + 1).padStart(2, "0")}</span>
              <span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-white/20 bg-black/50 transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-black">
                <ArrowUpRight className="size-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:[transform:translateZ(40px)]">
                <h3 className="text-xl font-bold capitalize leading-tight">{s.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {s.short}
                </p>
              </div>
            </Link>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}
