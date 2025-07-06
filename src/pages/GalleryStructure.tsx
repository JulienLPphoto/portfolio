import styles from "../styles/GalleryItem.module.scss";

import Masonry from 'react-masonry-css';
import clsx from "clsx";

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

import { DataList } from '../utils';

function GalleryStructure() {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    992: 2,
    576: 1
  };

    // Filter items that have "streetphoto" in their tags and sort by year
  const StructureList = DataList
    .filter(item => item.tags.some(tag => tag.toLowerCase().includes('structure')))
    .sort((a, b) => parseInt(a.year) - parseInt(b.year)); // Sort ascending by year

  return (
    <Layout pageTitle="Gallery | Structure" pageBodyClassName={clsx(styles.cGalleryItem, "c-gallery-item")}>

      <section className="c-gallery-item-section-grid">

        <div className="c-container">

          <PageTitle text="Structure"/>
          
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="c-masonry-grid"
            columnClassName="c-masonry-grid-column"
          >

            {StructureList.map((item, itemIdx) => (
              <div key={itemIdx}>
                <img src={item.image} alt="test" />
              </div>
            ))}

          </Masonry>

        </div>

      </section>

    </Layout>
  )
}

export default GalleryStructure;
