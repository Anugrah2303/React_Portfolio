import type { Cleanup } from "../types/animations";
import gsap from "../lib/gsap";

/** Smooth follower dot that grows over links, buttons and [data-cursor] elements. */
const cursor = (): Cleanup => {
  const dot = document.createElement("div");
  dot.setAttribute("aria-hidden", "true");
  Object.assign(dot.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "16px",
    height: "16px",
    marginLeft: "-8px",
    marginTop: "-8px",
    borderRadius: "50%",
    background: "#fff",
    mixBlendMode: "difference",
    pointerEvents: "none",
    zIndex: "9998",
    opacity: "0",
  } as Partial<CSSStyleDeclaration>);
  document.body.appendChild(dot);

  const xTo = gsap.quickTo(dot, "x", { duration: 0.4, ease: "power3" });
  const yTo = gsap.quickTo(dot, "y", { duration: 0.4, ease: "power3" });

  const move = (e: MouseEvent) => {
    xTo(e.clientX);
    yTo(e.clientY);
    gsap.to(dot, { opacity: 1, duration: 0.3, overwrite: "auto" });
  };
  const over = (e: MouseEvent) => {
    const hit = (e.target as Element | null)?.closest("a, button, [data-cursor]");
    gsap.to(dot, { scale: hit ? 3.2 : 1, duration: 0.5, ease: "expo.out", overwrite: "auto" });
  };
  const leave = () => {
    gsap.to(dot, { opacity: 0, duration: 0.3 });
  };

  window.addEventListener("mousemove", move);
  document.addEventListener("mouseover", over);
  document.documentElement.addEventListener("mouseleave", leave);

  return () => {
    window.removeEventListener("mousemove", move);
    document.removeEventListener("mouseover", over);
    document.documentElement.removeEventListener("mouseleave", leave);
    gsap.killTweensOf(dot);
    dot.remove();
  };
};

export default cursor;
