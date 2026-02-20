import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

/**
 * Scroll reveal hook with separate show/hide triggers.
 *
 * @param showDesktop - Scroll px to appear on desktop
 * @param hideDesktop - Scroll px to disappear on desktop (must be > showDesktop)
 * @param showMobile  - Scroll px to appear on mobile
 * @param hideMobile  - Scroll px to disappear on mobile (must be > showMobile)
 */
export function useScrollReveal(
  showDesktop: number,
  hideDesktop: number,
  showMobile: number,
  hideMobile: number,
) {
  const { scrollY } = useScroll();

  // Initialize based on current scroll position at mount time
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const isMobile = window.innerWidth < 768;
    const pos = window.scrollY;
    const show = isMobile ? showMobile : showDesktop;
    const hide = isMobile ? hideMobile : hideDesktop;
    return pos > show && pos < hide;
  });

  const visibleRef = useRef(visible);
  const dismissedRef = useRef(
    typeof window !== "undefined"
      ? (() => {
          const isMobile = window.innerWidth < 768;
          const pos = window.scrollY;
          const hide = isMobile ? hideMobile : hideDesktop;
          return pos >= hide;
        })()
      : false,
  );
  const reachedHideZone = useRef(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isMobile = window.innerWidth < 768;
    const triggerShow = isMobile ? showMobile : showDesktop;
    const triggerHide = isMobile ? hideMobile : hideDesktop;

    if (latest <= triggerShow) {
      // Below show point
      reachedHideZone.current = false;
      if (visibleRef.current) {
        // Was visible → hide and dismiss (prevents instant reappear at top)
        visibleRef.current = false;
        dismissedRef.current = true;
        setVisible(false);
      } else if (!dismissedRef.current) {
        // Wasn't visible and not dismissed → keep clean state (first load)
        dismissedRef.current = false;
      }
    } else if (dismissedRef.current && latest >= triggerHide + 3) {
      // Dismissed but scrolled back above triggerHide → REAPPEAR
      dismissedRef.current = false;
      reachedHideZone.current = true;
      visibleRef.current = true;
      setVisible(true);
    } else if (
      !dismissedRef.current &&
      !visibleRef.current &&
      latest < triggerHide
    ) {
      // Above show, below hide, not dismissed → APPEAR
      visibleRef.current = true;
      reachedHideZone.current = false;
      setVisible(true);
    } else if (visibleRef.current && latest >= triggerHide) {
      // Visible and above triggerHide → mark zone
      reachedHideZone.current = true;
    } else if (
      visibleRef.current &&
      reachedHideZone.current &&
      latest < triggerHide
    ) {
      // Was above triggerHide, now below → DISMISS
      visibleRef.current = false;
      dismissedRef.current = true;
      reachedHideZone.current = false;
      setVisible(false);
    }
  });

  return visible;
}
