import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";
import { num } from "./utils";

/**
 * Scroll parallax. data-speed="0.2" (negative = opposite direction).
 * Give the PARENT overflow:hidden for images. Don't combine with data-anim="image" on the same node.
 */
const parallax = (el: HTMLElement): Cleanup => {
  const speed = num(el.dataset.speed, 0.15);
  const amount = Math.abs(speed) * 100;

  if (el.tagName === "IMG" || el.tagName === "VIDEO") {
    gsap.set(el, { scale: 1 + Math.abs(speed) * 1.2 }); // hides edges while moving
  }

  const tween = gsap.fromTo(
    el,
    { yPercent: speed >= 0 ? -amount / 2 : amount / 2 },
    {
      yPercent: speed >= 0 ? amount / 2 : -amount / 2,
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
    gsap.set(el, { clearProps: "transform" });
  };
};

export default parallax;
