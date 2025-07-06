import styles from "../styles/MobileMenu.module.scss";

import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useOnClickOutside, useMediaQuery } from "usehooks-ts";

import Button from "./Button";
import NavItems from "./NavItems";

function MobileMenu() {
  const isMobile = useMediaQuery('(max-width: 991px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }, [setIsMenuOpen]);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.classList.add("menu-is-open");
    } else {
      document.body.classList.remove("menu-is-open");
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, isMobile]);

  useOnClickOutside(mobileMenuRef as unknown as React.RefObject<HTMLElement>, handleMenuClose);

  return (
    <div className={clsx(styles.cMobileMenu, "c-mobile-menu")} ref={mobileMenuRef}>
      <Button
        extraClassName={clsx("c-mobile-menu-toggle-btn", isMenuOpen && "is-open")}
        title={isMenuOpen ? "Close menu" : "Open menu"}
         btnVariant="icon"
        btnColor="ghost"
        onClick={handleMenuToggle}
      >
        <i className="c-mobile-menu-toggle-btn-icon" />
      </Button>

      <aside className={clsx("c-mobile-menu-content", isMenuOpen && "is-open")}>
        <div className="c-mobile-menu-content-wrapper">
        <div className="c-mobile-menu-content-inner">
          <NavItems extraClassName="c-mobile-menu-nav-items"/>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MobileMenu;
