"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Flips to true the first time the element is at least `amount` visible, then
 * stops observing. Reveal animations are plain CSS transitions keyed off this
 * flag: Safari/iOS can flash an element back to its start state for a frame
 * when a JS (Web Animations API) opacity animation finishes, which made the
 * whole site appear to flicker on iPhones.
 */
export function useInViewOnce<T extends Element>(amount = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: amount },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount, inView]);
  return [ref, inView] as const;
}
