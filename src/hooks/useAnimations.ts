import { useLayoutEffect } from "react";
import type { RefObject } from "react";
import { initAnimations } from "../animations";

/**
 * useLayoutEffect runs before paint, so hidden "from" states are applied
 * before the browser shows anything (no flash of un-animated content).
 * Cleanup makes it safe under React StrictMode double-mounting.
 */
const useAnimations = (scope?: RefObject<HTMLElement | null>) => {
  useLayoutEffect(() => {
    const root = scope?.current ?? document;
    return initAnimations(root);
  }, [scope]);
};

export default useAnimations;
