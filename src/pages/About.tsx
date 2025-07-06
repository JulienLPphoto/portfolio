import "../styles/About.module.scss";

import React from 'react';
import clsx from "clsx";

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

function About() {
  return (
    <Layout pageTitle="About" pageBodyClassName={clsx("c-about")}>
    <section className="c-about-section-hero">
      <div className='c-container'>
      <PageTitle text="About my work"/>
      <div className="aboutBottom">
        <p>Blahblahblah</p>
      </div>
      </div>
    </section>
    </Layout>
  );
}

export default About;
