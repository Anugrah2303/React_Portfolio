export type FadeDirection = "up" | "down" | "left" | "right";
export type Cleanup = () => void;

export interface gsapFadeProps {
  target: gsap.TweenTarget;
  timeline?: gsap.core.Timeline;
  delay?: number;
  duration?: number;
  stagger?: number | gsap.StaggerVars;
  direction?: FadeDirection;
  distance?: number;
  position?: gsap.Position;
}

export interface gsapTriggerFadeProps {
  target: gsap.TweenTarget;
  /** Element (or selector) that starts the animation. Defaults to each target itself. */
  trigger?: gsap.DOMTarget;
  stagger?: number | gsap.StaggerVars;
  ease?: string;
  toggleActions?: string;
  markers?: boolean;
  delay?: number;
  duration?: number;
  direction?: FadeDirection;
  distance?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}
