import { useEffect } from "react";


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

