import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img alt="banner" src="./resource/banner1.jpg" />
      <div className={styles["banner-text"]}>
        <p>New inspiration 2020</p>
        <h2>20% off on new season</h2>
        <button>Browse collections</button>
      </div>
    </div>
  );
};

export default Banner;
