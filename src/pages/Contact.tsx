import styles from "../styles/Contact.module.scss";
import ContactImage from "../assets/images/structure/mtl_2019_stlaurent-stairs.webp";

import clsx from "clsx";

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ContactForm from "components/ContactForm";

function Contact() {
  return (
    <Layout pageTitle="Contact" pageBodyClassName={clsx(styles.cContact, "c-contact")}>

      <section className="c-contact-section-form">

        <div className="c-container">

          <div className="c-contact-section-form-grid">

            <div className="c-contact-section-form-grid-image">

              <div className="c-contact-section-form-grid-image-wrapper">

                <img
                  src={ContactImage}
                  alt="Contact image"
                />

              </div>

            </div>

            <div className="c-contact-section-form-grid-content">

              <PageTitle text="Get in touch" />

              <ContactForm />

            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
