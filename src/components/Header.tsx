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
  return (
    <header className="site-header">
      <a href="#operational-focus" className="skip-to-content">
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
