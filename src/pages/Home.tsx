import styles from "../styles/Home.module.scss";
import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import Layout from "components/Layout";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout pageTitle="Home" pageBodyClassName={clsx(styles.cHome, "c-home", isHovered && "is-hovered")}>
      <section className={clsx("c-home-section-hero")}>
        <div className="c-container">
          <Link 
            to="/gallery"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={clsx(isHovered && "is-hovered")}
          >
            <span className="h1">Julien LP</span>
            <span className="subtitle">Photography</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
