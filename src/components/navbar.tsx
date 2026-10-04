"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "./icons";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6",
          scrolled || open
            ? "border-white/10 bg-black/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="/" aria-label="First Lab home" className="shrink-0">
          <Image src="/brand/logo-wordmark.webp" alt="First Lab" width={132} height={44} priority className="h-8 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-black" : "text-white/70 hover:text-white",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 transition hover:text-brand">
            <InstagramIcon className="size-5" />
          </a>
          <Link
            href="/contact/"
            className="rounded-full border border-brand/60 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand hover:text-black"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.li key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-lg font-medium",
                      isActive(pathname, item.href) ? "bg-brand text-black" : "text-white/80",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a href={site.phoneHref} className="mt-4 block px-4 text-sm text-white/60">
              {site.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
