"use client";

import { useState, useEffect, useRef, type RefObject } from "react";

/**
 * Scroll reveal hook based on Intersection Observer.
 * Detects when an element enters/exits the viewport — no absolute scroll positions needed.
 *
 * @param threshold - How much of the element must be visible (0.0–1.0). Default: 0.1
 * @param rootMargin - Shrinks/grows the detection area, e.g. "-100px" means the element
 *                     needs to be 100px inside the viewport to trigger. Default: "0px"
 * @returns { ref, visible } — attach `ref` to the wrapper element
 */
export function useInViewReveal(
  threshold = 0.1,
  rootMargin = "0px",
): {
  ref: RefObject<HTMLDivElement | null>;
  visible: boolean;
} {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // Determine if element exited above or below the detection area
          const rootTop = entry.rootBounds?.top ?? 0;
          const rootBottom = entry.rootBounds?.bottom ?? window.innerHeight;
          const rootMid = (rootTop + rootBottom) / 2;

          if (entry.boundingClientRect.top > rootMid) {
            // Element is in the lower half → user scrolled back up → hide
            setVisible(false);
          }
          // Element is in the upper half → user scrolled past it → stay visible
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, visible };
}
