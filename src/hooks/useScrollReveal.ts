import { useEffect } from "react";

const revealSelector = [
  ".hero__copy",
  ".hero__visual",
  ".section-heading",
  ".feature-card",
  ".skill-card",
  ".project",
  ".placeholder-card",
  ".timeline__item",
  ".op-timeline__entry",
  ".note-card",
  ".quote-panel",
  ".future-learning",
  ".manifesto",
  ".vision-card",
  ".contact-form",
  ".contact-card",
  ".dossier-card",
  ".leadership",
  ".about__art",
  ".site-footer .footer__inner",
].join(", ");

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 90}ms`);
    });

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);
}
