"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

/** Counts up to `value` once visible (Magic UI / 21st.dev "Number Ticker"). */
export function NumberTicker({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 40, stiffness: 90 });
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest).toString();
      }),
    [spring],
  );

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {/* Suffix in the body font: the display font draws symbols like ° poorly. */}
      {suffix && <span className="font-sans font-semibold">{suffix}</span>}
    </span>
  );
}
