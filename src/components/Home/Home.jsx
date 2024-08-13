import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import rolexImg from "../../../public/rolex.jpg";
import smartphoneImg from "../../../public/smartphone.jpeg";
import jewelryImg from "../../../public/jewelry.webp";
import Icon from "@mdi/react";
import { mdilChevronRight } from "@mdi/light-js";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.heading}>Indulge in Luxurious Living</h1>
        <p className={styles.description}>
          Explore our expanded collection of luxury products, from designer
          fashion and beauty essentials to premium electronics and elegant home
          décor. Experience the finest in every category, all with the ease of
          seamless shopping and swift delivery.
        </p>
        <div className={styles.brandShowcaseContainer}>
          <div className={styles.brand}>
            <div className={styles.brandImageContainer}>
              <img className={styles.brandImage} src={jewelryImg} alt='' />
            </div>
            <div className={styles.brandContent}>
              <p className={styles.brandDescription}>
                Discover the epitome of elegance with our curated selection of
                women&apos;s jewelry. From timeless diamond pieces to modern
                statement designs.
              </p>
            </div>
            <div className={styles.btnContainer}>
              <Link className={styles.ctaBuy} to='women-jewelry'>
                Buy Women Jewelry <Icon path={mdilChevronRight} size={1} />
              </Link>
            </div>
          </div>
          <div className={styles.brand}>
            <div className={styles.brandImageContainer}>
              <img className={styles.brandImage} src={rolexImg} alt='' />
            </div>
            <div className={styles.brandContent}>
              <p className={styles.brandDescription}>
                Elevate your style with our exclusive collection of men&apos;s
                luxury watches. Featuring renowned brands known for their
                precision and design excellence.
              </p>
            </div>
            <div className={styles.btnContainer}>
              <Link className={styles.ctaBuy} to='men-watches'>
                Buy Men Watches <Icon path={mdilChevronRight} size={1} />
              </Link>
            </div>
          </div>
          <div className={styles.brand}>
            <div className={styles.brandImageContainer}>
              <img className={styles.brandImage} src={smartphoneImg} alt='' />
            </div>
            <div className={styles.brandContent}>
              <p className={styles.brandDescription}>
                Experience the pinnacle of technology with our range of luxury
                smartphones. Combining cutting-edge innovation with exquisite
                design.
              </p>
            </div>
            <div className={styles.btnContainer}>
              <Link className={styles.ctaBuy} to='smartphones'>
                Buy Smartphone <Icon path={mdilChevronRight} size={1} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to='all-products' className={styles.shopNow}>
        Shop Now
        <Icon path={mdilChevronRight} size={1} />
      </Link>
    </>
  );
};

export default Home;
