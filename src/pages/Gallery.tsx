import styles from '../styles/Gallery.module.scss';

import { Link } from "react-router-dom";
import clsx from "clsx";

import { GalleryList } from '../utils/commonData';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

function Gallery() {
  return (
    <Layout pageTitle='Gallery' pageBodyClassName={clsx(styles.cGallery, "c-gallery")}>

      <section className="c-gallery-section-grid">

        <div className='c-container'>
          <PageTitle text="Gallery" />

          <div className="c-gallery-section-grid-wrapper">

            {GalleryList.map((gallery) => (
              <Link
                key={gallery.id}
                to={gallery.id}
                className='c-gallery-section-grid-card'
                title={`See all ${gallery.name}`}
              >
                <span
                  className="c-gallery-section-grid-card-image"
                  style={{
                    backgroundImage: `url(${gallery.image})`
                  }}
                />

                <span className="c-gallery-section-grid-card-overlay">
                  <span>{gallery.name}</span>
                </span>

              </Link>
            ))}

          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Gallery;
