import "./style/global.css";
import "./style/animations.css";
import Portfolio from "./routes/Portfolio";
import Preview from "./routes/Preview";
import { useEffect } from "react";
import LenisLib from "./lib/lenis";
import gsap, { ScrollTrigger } from "./lib/gsap";
import useAnimations from "./hooks/useAnimations";

const App = () => {
  // All [data-anim] elements get wired up here (before first paint)
  useAnimations();

  useEffect(() => {
    // Always start at the top on reload (fixes random restored-scroll jumps)
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const lenis = LenisLib();
    if (!lenis) return;

    // One shared frame loop: GSAP ticker drives Lenis, Lenis drives ScrollTrigger
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    // Recalculate trigger positions once layout is truly final
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preview />
      <Portfolio />
    </>
  );
};

export default App;
