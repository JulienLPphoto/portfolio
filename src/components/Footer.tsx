import styles from '../styles/Footer.module.scss';
import React from 'react';
import clsx from "clsx";

function Footer() {
  return (
    <footer className={clsx(styles.cFooter, "c-footer")}>
        <div className="c-container">
        <div className="sMedia">
         
        </div>
        <div className="copyRight">
          <p>コピライト &copy; 2025 julienlp.com</p>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
