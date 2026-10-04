import { cn } from "@/lib/utils";

/**
 * Diagonal light beam that sweeps in once (Aceternity / 21st.dev "Spotlight").
 * Drawn with a radial gradient instead of an SVG blur filter, which is far
 * cheaper for the GPU and avoids flicker.
 */
export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-[1] h-[110%] w-[140%] animate-spotlight opacity-0 lg:w-[90%]",
        "bg-[radial-gradient(ellipse_50%_9%_at_50%_50%,rgba(226,113,30,0.22),transparent_100%)]",
        "[rotate:-35deg]",
        className,
      )}
    />
  );
}
