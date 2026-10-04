"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

/** Card with a glow that follows the cursor (21st.dev "Spotlight Card"). */
export function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const background = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(226,113,30,0.16), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(226,113,30,0.7), transparent 70%)`;

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      className={cn("group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-px", className)}
    >
      <motion.div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ background: border }} aria-hidden />
      <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-ink-900">
        <motion.div className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background }} aria-hidden />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
}
