"use client";

import { useEffect, useState } from "react";

const QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1024px)";

/**
 * True on desktop-class devices (mouse + wide screen). Scroll-linked and 3D
 * effects are only enabled there: on phones, Safari in particular flickers or
 * drops layers when 3D transforms and scroll-driven transforms run over video.
 */
export function useRichMotion() {
  const [rich, setRich] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const update = () => setRich(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return rich;
}
