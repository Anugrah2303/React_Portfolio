import type { Cleanup } from "../types/animations";
import gsap, { ScrollTrigger } from "../lib/gsap";
import { num } from "./utils";

/**
 * Infinite marquee that speeds up and reverses with scroll velocity.
 * <div data-anim="marquee" data-duration="30"><div data-track style="display:flex;width:max-content">...items...</div></div>
 */
const marquee = (el: HTMLElement): Cleanup => {
  const track = el.querySelector<HTMLElement>("[data-track]");
  if (!track) return () => {};

  Array.from(track.children).forEach((child) => {
    const clone = child.cloneNode(true) as HTMLElement;
    clone.setAttribute("data-clone", "");
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });

  const loop = gsap.to(track, {
    xPercent: -50,
    duration: num(el.dataset.duration, 30),
    ease: "none",
    repeat: -1,
  });

  const st = ScrollTrigger.create({
    trigger: el,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      const v = self.getVelocity();
      if (Math.abs(v) < 10) return;
      const dir = v > 0 ? 1 : -1;
      gsap.to(loop, { timeScale: dir * (1 + Math.min(Math.abs(v) / 250, 6)), duration: 0.2, overwrite: true });
      gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.2 });
    },
  });

  return () => {
    st.kill();
    loop.kill();
    track.querySelectorAll("[data-clone]").forEach((n) => n.remove());
    gsap.set(track, { clearProps: "transform" });
  };
};

export default marquee;
