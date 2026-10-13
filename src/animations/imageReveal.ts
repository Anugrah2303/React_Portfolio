import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";

/** Curtain wipe + inner zoom-out. Put data-anim="image" on the wrapper. */
const imageReveal = (el: HTMLElement): Cleanup => {
  const media = el.querySelector<HTMLElement>("img, video");

  const tl = gsap.timeline({
    scrollTrigger: { trigger: el, start: "top 88%", once: true },
  });

  tl.fromTo(
    el,
    { clipPath: "inset(100% 0% 0% 0%)" },
    { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut", clearProps: "clipPath" }
  );

  if (media) {
    tl.fromTo(media, { scale: 1.4 }, { scale: 1, duration: 2, ease: "expo.out", force3D: true }, 0);
  }

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
};

export default imageReveal;
