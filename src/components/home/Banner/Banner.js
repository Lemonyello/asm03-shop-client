import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.css";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.banner}>
      <img alt="banner" src="./resource/banner1.jpg" />
      <div className={styles["banner-text"]}>
        <p>New inspiration 2020</p>
        <h2>20% off on new season</h2>
        <button onClick={navigate.bind(null, "/shop")}>
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
