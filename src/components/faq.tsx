"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Accordion of common questions. Answers stay in the HTML (hidden, not removed) so search engines can read them. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold transition-colors hover:text-brand"
              >
                {f.q}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full border transition-colors",
                    isOpen ? "border-brand bg-brand text-black" : "border-white/15",
                  )}
                >
                  <Plus className="size-4" />
                </motion.span>
              </button>
            </h3>
            <motion.div
              id={`faq-${i}`}
              initial={false}
              animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 pr-12 leading-relaxed text-white/60">{f.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
