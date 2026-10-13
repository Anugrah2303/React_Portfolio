import type { gsapFadeProps } from "../types/animations";
import gsap from "../lib/gsap";
import { getOffset } from "./utils";

/** Immediate (non-scroll) fade. Use for load sequences. */
const fade = ({
  target,
  timeline,
  delay = 0,
  duration = 1.1,
  stagger = 0,
  direction = "up",
  distance = 50,
  position,
}: gsapFadeProps) => {
  const { x, y } = getOffset(direction, distance);

  const vars: gsap.TweenVars = {
    x,
    y,
    autoAlpha: 0,
    delay,
    duration,
    stagger,
    ease: "expo.out",
    force3D: true,
    clearProps: "transform,opacity,visibility",
  };

  // position must be undefined (not "") or GSAP mis-places the tween
  if (timeline) return timeline.from(target, vars, position || undefined);
  return gsap.from(target, vars);
};

export default fade;
