"use client";

import { useEffect, useState } from "react";

type Meteor = { left: string; delay: string; duration: string };

/** Falling streaks background (Aceternity / 21st.dev "Meteors"). */
export function Meteors({ number = 18 }: { number?: number }) {
  // Random positions are generated after mount so server and client HTML match.
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, () => ({
        left: `${Math.floor(Math.random() * 120) - 10}%`,
        delay: `${(Math.random() * 6).toFixed(2)}s`,
        duration: `${(Math.random() * 6 + 4).toFixed(2)}s`,
      })),
    );
  }, [number]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m, i) => (
        <span
          key={i}
          className="absolute top-0 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-brand-200 shadow-[0_0_0_1px_#ffffff10] before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-brand before:to-transparent before:content-['']"
          style={{ left: m.left, animationDelay: m.delay, animationDuration: m.duration }}
        />
      ))}
    </div>
  );
}
