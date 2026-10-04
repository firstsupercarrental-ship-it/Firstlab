import { cn } from "@/lib/utils";

/** Fine grid with a radial fade, used behind section headers. */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]",
        "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]",
        className,
      )}
    />
  );
}
