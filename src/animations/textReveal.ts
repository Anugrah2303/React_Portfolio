import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";
import { num, splitText } from "./utils";

/**
 * Masked headline reveal: words (or chars) rise from behind a line.
 * data-split="chars|words"  data-delay="0.4"  data-trigger="load|scroll"
 */
const textReveal = (el: HTMLElement): Cleanup => {
  const mode = el.dataset.split === "chars" ? "chars" : "words";
  const onLoad = el.dataset.trigger === "load";
  const split = splitText(el, mode);

  const tween = gsap.from(split.targets, {
    yPercent: 115,
    rotate: 5,
    transformOrigin: "0% 100%",
    duration: 1.3,
    ease: "expo.out",
    stagger: mode === "chars" ? 0.025 : 0.08,
    delay: num(el.dataset.delay, 0),
    force3D: true,
    ...(onLoad
      ? {}
      : { scrollTrigger: { trigger: el, start: "top 90%", once: true } }),
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
    split.revert();
  };
};

export default textReveal;
