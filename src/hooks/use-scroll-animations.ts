import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to elements marked with `data-animate`.
 * When they enter the viewport the specified animation class is applied,
 * creating smooth iOS-like reveal effects on scroll.
 */
export const useScrollAnimations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animation = el.dataset.animate;
            if (animation) {
              el.classList.add(animation);
              el.removeAttribute("data-animate");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

