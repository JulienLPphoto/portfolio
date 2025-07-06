import { useEffect } from 'react'; // Add this import
import styles from "../styles/Header.module.scss";
import clsx from "clsx";
import { useMediaQuery } from 'usehooks-ts';
import Logo from "./Logo";
import NavItems from './NavItems';
import MobileMenu from "./MobileMenu";

function Header() {
  const isMobile = useMediaQuery('(max-width: 991px)');
  
  // Add this useEffect hook for the animation
  useEffect(() => {
    const header = document.querySelector('.c-header');
    
    const handleScroll = () => {
      if (window.scrollY > 50) { // Trigger after scrolling 50px
        header?.classList.add('visible');
      } else {
        header?.classList.remove('visible');
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <header className={clsx(styles.cHeader, "c-header")}>
      <nav className="c-header-nav">
        <Logo logoType="brandmark"/>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <NavItems extraClassName="c-desktop" />
        )}
      </nav>
    </header>
  )
}

export default Header;


/* import styles from "../styles/Header.module.scss";

import clsx from "clsx";
import { useMediaQuery } from 'usehooks-ts';

import Logo from "./Logo";
import NavItems from './NavItems';
import MobileMenu from "./MobileMenu";

function Header() {
  const isMobile = useMediaQuery('(max-width: 991px)');

  return (
    <header className={clsx(styles.cHeader, "c-header")}>
      <nav className="c-header-nav">
        <Logo logoType="brandmark"/>

        {isMobile ? (
          <MobileMenu />
        ) : (
          <NavItems extraClassName="c-desktop" />
        )}

      </nav>
    </header>
  )
}

export default Header; */
