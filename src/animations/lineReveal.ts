import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";

/** Divider lines draw themselves left to right. */
const lineReveal = (el: HTMLElement): Cleanup => {
  const tween = gsap.fromTo(
    el,
    { scaleX: 0, transformOrigin: "left center" },
    {
      scaleX: 1,
      duration: 1.6,
      ease: "expo.inOut",
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
    }
  );
  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
    gsap.set(el, { clearProps: "transform" });
  };
};

export default lineReveal;
