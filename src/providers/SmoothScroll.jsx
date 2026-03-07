"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3, // Duration of the scroll animation, default is 1.3s
      easing: (t) => 1 - Math.pow(1 - t, 3), // Easing function for smoother scroll animation, default is easeOutCubic (t^3)
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return children;
}
