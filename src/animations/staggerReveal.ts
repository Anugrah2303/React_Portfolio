import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";

/** Children of the container rise in sequence. Use data-anim-item to pick children, else direct children. */
const staggerReveal = (el: HTMLElement): Cleanup => {
  const items = el.querySelectorAll<HTMLElement>("[data-anim-item]");
  const targets = items.length ? Array.from(items) : Array.from(el.children as HTMLCollectionOf<HTMLElement>);
  if (!targets.length) return () => {};

  const tween = gsap.from(targets, {
    y: 70,
    autoAlpha: 0,
    scale: 0.96,
    duration: 1.2,
    ease: "expo.out",
    stagger: { each: 0.1, from: "start" },
    force3D: true,
    clearProps: "transform,opacity,visibility",
    scrollTrigger: { trigger: el, start: "top 82%", once: true },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
};

export default staggerReveal;
