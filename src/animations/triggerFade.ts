import type { Cleanup, gsapTriggerFadeProps } from "../types/animations";
import gsap from "../lib/gsap";
import { getOffset } from "./utils";

/** Scroll-triggered fade. Plays once (or scrubs if scrub is set). */
const triggerFade = ({
  target,
  delay = 0,
  duration = 1.1,
  direction = "up",
  distance = 50,
  start = "top 88%",
  end = "top 55%",
  scrub = false,
}: gsapTriggerFadeProps): Cleanup => {
  const elems = gsap.utils.toArray<HTMLElement>(target as string);
  if (!elems.length) return () => {};

  const { x, y } = getOffset(direction, distance);

  const tweens = elems.map((elem) =>
    gsap.fromTo(
      elem,
      { x, y, autoAlpha: 0 },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: scrub ? "none" : "expo.out",
        force3D: true,
        // duration/delay do nothing when scrubbing, so only set them when not
        ...(scrub ? {} : { duration, delay, clearProps: "transform,opacity,visibility" }),
        scrollTrigger: { trigger: elem, start, end, scrub, once: !scrub },
      }
    )
  );

  return () => {
    tweens.forEach((t) => {
      t.scrollTrigger?.kill();
      t.kill();
    });
  };
};

export default triggerFade;
