"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] ring-4 ring-[#25D366]/20 sm:px-5"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden text-sm font-semibold sm:inline">Let&apos;s talk</span>
    </motion.a>
  );
}
