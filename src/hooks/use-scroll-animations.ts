import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to elements marked with `data-animate`
 * or `data-stagger`.
 *
 * `data-animate="ios-page-enter"` will apply the class to the element when it
 * enters the viewport.
 *
 * `data-stagger="ios-stagger-enter"` will apply the animation class to each
 * direct child with an increasing delay, creating iOS-style staggered
 * animations.
 */
export const useScrollAnimations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-animate], [data-stagger]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animation = el.dataset.animate;
            const stagger = el.dataset.stagger;

            if (animation) {
              el.classList.add(animation);
              el.removeAttribute("data-animate");
            } else if (stagger) {
              const children = el.querySelectorAll<HTMLElement>(":scope > *");
              children.forEach((child, index) => {
                child.style.animationDelay = `${index * 100}ms`;
                child.classList.add(stagger);
              });
              el.removeAttribute("data-stagger");
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

