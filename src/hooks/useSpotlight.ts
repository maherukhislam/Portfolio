import { useEffect } from "react";

/**
 * A hook that registers a single global mousemove listener to update CSS variables
 * (--mouse-x, --mouse-y) on the closest hovered card element (.panel).
 * This enables the modern spotlight glow effect on all cards page-wide with maximum efficiency.
 */
export function useSpotlight() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      // Find the closest panel card that is being hovered
      const target = (e.target as HTMLElement).closest(".panel") as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
