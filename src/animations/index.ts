import type { Cleanup, FadeDirection } from "../types/animations";
import gsap from "../lib/gsap";
import fade from "./fade";
import triggerFade from "./triggerFade";
import textReveal from "./textReveal";
import imageReveal from "./imageReveal";
import parallax from "./parallax";
import staggerReveal from "./staggerReveal";
import counter from "./counter";
import lineReveal from "./lineReveal";
import magnetic from "./magnetic";
import marquee from "./marquee";
import horizontalScroll from "./horizontalScroll";
import scrollProgress from "./scrollProgress";
import cursor from "./cursor";
import { num } from "./utils";

export {
  fade, triggerFade, textReveal, imageReveal, parallax, staggerReveal,
  counter, lineReveal, magnetic, marquee, horizontalScroll, scrollProgress, cursor,
};

const all = (root: ParentNode, sel: string) =>
  Array.from(root.querySelectorAll<HTMLElement>(sel));

/**
 * One call wires up every [data-anim] element inside `root`.
 * Reduced-motion users get NO animation (content simply shows).
 * Returns a cleanup that kills every tween/ScrollTrigger and restores the DOM.
 */
export const initAnimations = (root: ParentNode = document): Cleanup => {
  const mm = gsap.matchMedia();

  // Motion for everyone who hasn't asked for reduced motion
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const cleanups: Cleanup[] = [];

    all(root, '[data-anim="text"]').forEach((el) => cleanups.push(textReveal(el)));
    all(root, '[data-anim="image"]').forEach((el) => cleanups.push(imageReveal(el)));
    all(root, '[data-anim="parallax"]').forEach((el) => cleanups.push(parallax(el)));
    all(root, '[data-anim="stagger"]').forEach((el) => cleanups.push(staggerReveal(el)));
    all(root, '[data-anim="counter"]').forEach((el) => cleanups.push(counter(el)));
    all(root, '[data-anim="line"]').forEach((el) => cleanups.push(lineReveal(el)));
    all(root, '[data-anim="marquee"]').forEach((el) => cleanups.push(marquee(el)));

    all(root, '[data-anim="fade"]').forEach((el) => {
      const props = {
        target: el,
        direction: (el.dataset.dir as FadeDirection) || "up",
        distance: num(el.dataset.distance, 50),
        delay: num(el.dataset.delay, 0),
      };
      if (el.dataset.trigger === "load") {
        const t = fade(props);
        cleanups.push(() => {
          t.kill();
        });
      } else {
        cleanups.push(triggerFade(props));
      }
    });

    cleanups.push(scrollProgress());
    return () => cleanups.forEach((c) => c());
  });

  // Pinned horizontal scroll only on large screens
  mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
    const cleanups = all(root, '[data-anim="horizontal"]').map(horizontalScroll);
    return () => cleanups.forEach((c) => c());
  });

  // Mouse-only effects
  mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
    const cleanups = all(root, '[data-anim="magnetic"]').map(magnetic);
    cleanups.push(cursor());
    return () => cleanups.forEach((c) => c());
  });

  return () => mm.revert();
};
