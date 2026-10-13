import type { FadeDirection } from "../types/animations";

export const getOffset = (direction: FadeDirection, distance: number) => ({
  x: direction === "left" ? -distance : direction === "right" ? distance : 0,
  y: direction === "up" ? distance : direction === "down" ? -distance : 0,
});

export const num = (value: string | undefined, fallback: number) => {
  const n = parseFloat(value ?? "");
  return Number.isFinite(n) ? n : fallback;
};

/**
 * Splits plain text into masked words or chars so they can slide up
 * from behind an invisible line (the classic award-site headline reveal).
 * Works on plain-text elements. revert() restores the original markup.
 */
export const splitText = (el: HTMLElement, mode: "words" | "chars" = "words") => {
  const original = el.innerHTML;
  const text = (el.textContent ?? "").trim();
  const targets: HTMLElement[] = [];

  el.setAttribute("aria-label", text);
  el.textContent = "";

  const makeInner = (str: string) => {
    const s = document.createElement("span");
    s.textContent = str;
    s.style.display = "inline-block";
    s.style.willChange = "transform";
    targets.push(s);
    return s;
  };

  text.split(/\s+/).forEach((word, i, arr) => {
    const mask = document.createElement("span");
    mask.setAttribute("aria-hidden", "true");
    // padding/negative margin keep descenders (g, y, p) from being clipped
    mask.style.cssText =
      "display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.14em;margin-bottom:-.14em";

    if (mode === "chars") {
      Array.from(word).forEach((ch) => mask.appendChild(makeInner(ch)));
    } else {
      mask.appendChild(makeInner(word));
    }

    el.appendChild(mask);
    if (i < arr.length - 1) el.appendChild(document.createTextNode(" "));
  });

  return {
    targets,
    revert: () => {
      el.innerHTML = original;
      el.removeAttribute("aria-label");
    },
  };
};
