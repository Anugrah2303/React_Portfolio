import Lenis from "lenis";

/**
 * Creates the smooth-scroll instance.
 * autoRaf is OFF on purpose: App.tsx drives it from gsap.ticker so
 * Lenis and ScrollTrigger share ONE animation-frame loop (no jitter).
 */
const LenisLib = () => {
  if (typeof window === "undefined") return null;

  return new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
    autoRaf: false,
  });
};

export default LenisLib;
