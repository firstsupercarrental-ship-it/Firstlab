import { cn } from "@/lib/utils";

type IphoneProps = {
  children: React.ReactNode;
  className?: string;
  /** Rendered device width, any CSS length. Everything else scales from it. */
  width?: string;
};

// Every dimension is a fraction of the device width so the mockup stays
// proportional (iPhone 17 Pro Max: 78.0 × 163.4 mm, 6.9" 19.5:9 display).
const u = (k: number) => `calc(var(--w) * ${k})`;

/** CSS iPhone 17 Pro Max in Cosmic Orange: aluminium frame, Dynamic Island, side buttons and Camera Control. */
export function Iphone17ProMax({ children, className, width = "clamp(280px, 78vw, 400px)" }: IphoneProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ "--w": width, width: "var(--w)", aspectRatio: "78 / 163.4" } as React.CSSProperties}
    >
      {/* Side buttons: Action + volume on the left, side button + Camera Control on the right */}
      {[
        { side: "left", top: 0.36, h: 0.085 },
        { side: "left", top: 0.5, h: 0.15 },
        { side: "left", top: 0.68, h: 0.15 },
        { side: "right", top: 0.55, h: 0.22 },
      ].map((b, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute rounded-full bg-gradient-to-b from-[#f0913f] via-[#c4581c] to-[#8e3a12] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]"
          style={{
            [b.side]: u(-0.012),
            top: u(b.top),
            height: u(b.h),
            width: u(0.016),
          }}
        />
      ))}
      <span
        aria-hidden
        className="absolute rounded-[3px] border border-[#7a3210] bg-gradient-to-b from-[#3a2a22] to-[#1a120e]"
        style={{ right: u(-0.008), top: u(1.2), height: u(0.13), width: u(0.012) }}
      />

      {/* Aluminium unibody frame */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#f59a4f] via-[#d0611f] to-[#8f3b12] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(0,0,0,0.6)]"
        style={{ borderRadius: u(0.175), padding: u(0.014) }}
      >
        <div
          className="h-full w-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
          style={{ borderRadius: u(0.162), padding: u(0.022) }}
        >
          {/* Display */}
          <div className="relative h-full w-full overflow-hidden bg-ink-900" style={{ borderRadius: u(0.142) }}>
            {children}

            {/* Status bar */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 flex items-center justify-between font-semibold text-white"
              style={{ padding: `${u(0.05)} ${u(0.09)} 0`, fontSize: u(0.042) }}
            >
              <span>9:41</span>
              <span className="flex items-center" style={{ gap: u(0.015) }}>
                <svg viewBox="0 0 18 12" fill="currentColor" style={{ width: u(0.048) }}>
                  <rect x="0" y="8" width="3" height="4" rx="1" />
                  <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                  <rect x="10" y="3" width="3" height="9" rx="1" />
                  <rect x="15" y="0" width="3" height="12" rx="1" />
                </svg>
                <svg viewBox="0 0 26 12" fill="none" style={{ width: u(0.07) }}>
                  <rect x="0.5" y="0.5" width="22" height="11" rx="3.5" stroke="currentColor" opacity="0.4" />
                  <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
                  <path d="M24 4v4a2 2 0 0 0 0-4Z" fill="currentColor" opacity="0.4" />
                </svg>
              </span>
            </div>

            {/* Dynamic Island */}
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black"
              style={{ top: u(0.032), width: u(0.33), height: u(0.095) }}
            >
              <span
                className="absolute rounded-full bg-[radial-gradient(circle_at_35%_35%,#2a3a5a,#05070c_60%)]"
                style={{ right: u(0.03), top: "50%", width: u(0.04), height: u(0.04), transform: "translateY(-50%)" }}
              />
            </div>

            {/* Glass reflection */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent"
              style={{ borderRadius: "inherit" }}
            />
            {/* Home indicator */}
            <span
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white/80"
              style={{ bottom: u(0.03), width: u(0.36), height: u(0.012) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
