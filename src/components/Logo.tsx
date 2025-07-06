import styles from "../styles/Logo.module.scss";
import React from 'react';
import {Link} from "react-router-dom";
import clsx from "clsx";
import {ReactComponent as LogoImg} from "../assets/logo.svg";

interface LogoProps {
  logoType?: "brandmark";
}

function Logo({logoType}:LogoProps) {
  return (
    <Link 
    to="/" 
    title="Home" 
    className={clsx(styles.cLogo, "c-logo", logoType === "brandmark" && "is-brandmark")}
    >
      {logoType === "brandmark" ? (
      <i><LogoImg/></i>
    ):(
      <span>
        Julien L.P.
      </span>
    )}
    </Link>
  )
}

export default Logo