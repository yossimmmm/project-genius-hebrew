import { useEffect, useRef } from "react";
import geometricBg from "@/assets/geometric-bg.jpg";

/**
 * AnimatedBackground renders the luxurious animated gradient backdrop.
 * It reacts to mouse movement and scroll to mimic the subtle parallax
 * effects found in iOS interfaces.
 */
const AnimatedBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const rect = { left: 0, top: 0, width: 0, height: 0 };
    const updateRect = () => {
      const r = el.getBoundingClientRect();
      rect.left = r.left;
      rect.top = r.top;
      rect.width = r.width;
      rect.height = r.height;
    };
    updateRect();

    let mouseFrame: number | null = null;
    let scrollFrame: number | null = null;
    let lastX = -1;
    let lastY = -1;

    const handleMouseMove = (e: PointerEvent) => {
      if (mouseFrame !== null) return;
      mouseFrame = requestAnimationFrame(() => {
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        if (Math.abs(x - lastX) > 0.5 || Math.abs(y - lastY) > 0.5) {
          el.style.setProperty("--mouse-x", `${x}%`);
          el.style.setProperty("--mouse-y", `${y}%`);
          lastX = x;
          lastY = y;
        }
        mouseFrame = null;
      });
    };

    const handleScroll = () => {
      if (scrollFrame !== null) return;
      scrollFrame = requestAnimationFrame(() => {
        const offset = window.scrollY * -0.1;
        el.style.transform = `translateY(${offset}px)`;
        scrollFrame = null;
      });
    };
    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateRect);
      if (mouseFrame !== null) cancelAnimationFrame(mouseFrame);
      if (scrollFrame !== null) cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return (
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 apple-fluid-bg" />
      <div className="absolute inset-0 apple-overlay" />
      <div className="absolute inset-0 interactive-gradient" />
    </div>
  );
};

export default AnimatedBackground;

