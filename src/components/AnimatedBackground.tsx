import { useEffect, useRef } from "react";

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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };

    const handleScroll = () => {
      const offset = window.scrollY * -0.1;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
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

