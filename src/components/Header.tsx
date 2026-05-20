import { useEffect, useRef, useState } from "react";
import type { NavItem } from "../data/mockData";

export interface HeaderProps {
  readonly activeSection: string;
  readonly isMenuOpen: boolean;
  readonly navItems: readonly NavItem[];
  readonly onCloseMenu: () => void;
  readonly onToggleMenu: () => void;
}

export function Header({
  activeSection,
  isMenuOpen,
  navItems,
  onCloseMenu,
  onToggleMenu,
}: Readonly<HeaderProps>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const progressBar = progressBarRef.current;
      if (progressBar) {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        progressBar.style.width = `${scrolled}%`;
        progressBar.setAttribute("aria-valuenow", Math.round(scrolled).toString());
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}>
      <div
        ref={progressBarRef}
        className="scroll-progress-bar"
        role="progressbar"
        aria-label="Scroll progress indicator"
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <a href="#projects" className="skip-to-content">
        Skip to main content
      </a>
      <nav className="nav shell" aria-label="Primary">
        <a className="brand" href="#home" onClick={onCloseMenu}>
          Maherukh Islam
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label="Open navigation menu"
          onClick={onToggleMenu}
        >
          <span />
          <span />
        </button>
        <div className={`nav-menu${isMenuOpen ? " is-open" : ""}`} id="nav-menu">
          {navItems.map((item) => {
            const targetId = item.href.replace("#", "");
            const className = [
              "nav-link",
              activeSection === targetId ? "is-active" : "",
              item.isCta ? "nav-link--cta" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <a key={item.href} className={className} href={item.href} onClick={onCloseMenu}>
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
