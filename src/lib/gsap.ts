import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once, globally. Every animation file imports gsap from here.
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "expo.out", duration: 1 });

// Stops mobile address-bar resize from re-calculating every trigger (a classic jump bug)
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger };
export default gsap;
