import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";
import { num } from "./utils";

/** <span data-anim="counter" data-to="120" data-suffix="+"></span>  (data-prefix, data-decimals optional) */
const counter = (el: HTMLElement): Cleanup => {
  const to = num(el.dataset.to ?? el.textContent ?? "", 0);
  const decimals = num(el.dataset.decimals, 0);
  const prefix = el.dataset.prefix ?? "";
  const suffix = el.dataset.suffix ?? "";
  const fmt = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  const finalText = `${prefix}${fmt.format(to)}${suffix}`;
  const state = { v: 0 };

  el.textContent = `${prefix}${fmt.format(0)}${suffix}`;

  const tween = gsap.to(state, {
    v: to,
    duration: 2.4,
    ease: "power3.out",
    onUpdate: () => {
      el.textContent = `${prefix}${fmt.format(state.v)}${suffix}`;
    },
    scrollTrigger: { trigger: el, start: "top 92%", once: true },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
    el.textContent = finalText; // never leave a half-counted number behind
  };
};

export default counter;
