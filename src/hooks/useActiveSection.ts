import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const isAtBottom = window.scrollY + clientHeight >= scrollHeight - 15;

      if (isAtBottom && sectionIds.length > 0) {
        const lastSection = sectionIds[sectionIds.length - 1];
        if (lastSection) {
          setActiveSection(lastSection);
          return;
        }
      }

      const offset = window.scrollY + clientHeight * 0.25;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (offset >= top && offset < bottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
