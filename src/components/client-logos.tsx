import Image from "next/image";
import Link from "next/link";
import { clients } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./ui/reveal";

/** Logo wall of brands First Lab has built for; each tile links to its project on /work. */
export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {clients.map((c, i) => (
        <Reveal key={c.slug} delay={i * 0.08} y={24}>
          <Link
            href={`/work/#${c.slug}`}
            className="group relative flex h-36 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_70%)] px-6 transition-colors duration-300 hover:border-brand/60 sm:h-40"
          >
            <Image
              src={c.logo}
              alt={`${c.name} logo`}
              width={240}
              height={120}
              className={cn(
                "h-auto max-h-16 w-auto max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105",
                c.logoOnBlack && "max-h-20 mix-blend-lighten sm:max-h-24",
              )}
            />
            <span className="absolute inset-x-0 bottom-3 text-center text-[11px] text-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {c.deliverables.join(" · ")}
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
