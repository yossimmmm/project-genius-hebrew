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
          const el = entry.target as HTMLElement;
          const animation = el.dataset.animate;
          const stagger = el.dataset.stagger;

          if (entry.isIntersecting) {
            if (animation) {
              el.classList.add(animation);
            } else if (stagger) {
              const children = el.querySelectorAll<HTMLElement>(":scope > *");
              children.forEach((child, index) => {
                child.style.animationDelay = `${index * 150}ms`;
                child.classList.add(stagger);
              });
            }
          } else {
            if (animation) {
              el.classList.remove(animation);
            } else if (stagger) {
              const children = el.querySelectorAll<HTMLElement>(":scope > *");
              children.forEach((child) => {
                child.classList.remove(stagger);
                child.style.animationDelay = "";
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

