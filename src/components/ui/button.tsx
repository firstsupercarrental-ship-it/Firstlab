import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

/** Shimmering pill CTA with magnetic hover. */
export function Button({ href, children, variant = "primary", className, external }: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors",
    variant === "primary"
      ? "bg-brand text-black shadow-[0_0_40px_-8px_rgba(226,113,30,0.8)] hover:bg-brand-400"
      : "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-brand/60 hover:bg-white/10",
    className,
  );
  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      )}
      <span className="relative">{children}</span>
      <ArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  );
  return (
    <Magnetic>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {inner}
        </Link>
      )}
    </Magnetic>
  );
}
