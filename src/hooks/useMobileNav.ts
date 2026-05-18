import { useState } from "react";

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggleMenu,
    closeMenu,
  };
}
