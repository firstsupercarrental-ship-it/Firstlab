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
        if (ref.current) ref.current.textContent = Math.round(latest).toString() + suffix;
      }),
    [spring, suffix],
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
