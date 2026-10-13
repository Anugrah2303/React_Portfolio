import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";

/**
 * Pinned section that scrolls sideways.
 * <section data-anim="horizontal"><div data-track style="display:flex;width:max-content">...panels...</div></section>
 */
const horizontalScroll = (el: HTMLElement): Cleanup => {
  const track = el.querySelector<HTMLElement>("[data-track]");
  if (!track) return () => {};

  const distance = () => Math.max(0, track.scrollWidth - el.clientWidth);

  const tween = gsap.to(track, {
    x: () => -distance(),
    ease: "none",
    force3D: true,
    scrollTrigger: {
      trigger: el,
      start: "top top",
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  return () => {
    tween.scrollTrigger?.kill(true); // true = revert pin spacing
    tween.kill();
    gsap.set(track, { clearProps: "transform" });
  };
};

export default horizontalScroll;
