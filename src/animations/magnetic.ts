import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";
import { num } from "./utils";

/** Buttons/links gently follow the cursor. data-strength="0.35". Desktop pointers only. */
const magnetic = (el: HTMLElement): Cleanup => {
  const strength = num(el.dataset.strength, 0.35);
  const xTo = gsap.quickTo(el, "x", { duration: 0.9, ease: "elastic.out(1, 0.4)" });
  const yTo = gsap.quickTo(el, "y", { duration: 0.9, ease: "elastic.out(1, 0.4)" });

  const move = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    xTo((e.clientX - (r.left + r.width / 2)) * strength);
    yTo((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => {
    xTo(0);
    yTo(0);
  };

  el.addEventListener("mousemove", move);
  el.addEventListener("mouseleave", leave);

  return () => {
    el.removeEventListener("mousemove", move);
    el.removeEventListener("mouseleave", leave);
    gsap.set(el, { clearProps: "transform" });
  };
};

export default magnetic;
