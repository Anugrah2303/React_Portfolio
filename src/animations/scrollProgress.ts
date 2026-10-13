import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";

/** Thin gradient progress bar pinned to the top of the viewport. */
const scrollProgress = (): Cleanup => {
  const bar = document.createElement("div");
  bar.setAttribute("aria-hidden", "true");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);

  const tween = gsap.fromTo(
    bar,
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    }
  );

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
    bar.remove();
  };
};

export default scrollProgress;
