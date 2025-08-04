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

    let mouseFrame: number | null = null;
    let scrollFrame: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFrame !== null) return;
      mouseFrame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--mouse-x", `${x}%`);
        el.style.setProperty("--mouse-y", `${y}%`);
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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
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

