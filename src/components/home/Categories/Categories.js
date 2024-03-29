import { useNavigate } from "react-router-dom";
import styles from "./Categories.module.css";

// in home page, buttons to show all product categories
const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.categories}>
      <h3>Carefully created collections</h3>
      <h4>Browse our categories</h4>
      <div>
        <img
          alt="iPhone"
          src="./resource/product_1.png"
          onClick={navigate.bind(null, "/shop")}
        />
        <img
          alt="Mac"
          src="./resource/product_2.png"
          onClick={navigate.bind(null, "/shop")}
        />
      </div>
      <div>
        <img
          alt="iPad"
          src="./resource/product_3.png"
          onClick={navigate.bind(null, "/shop")}
        />
        <img
          alt="Watch"
          src="./resource/product_4.png"
          onClick={navigate.bind(null, "/shop")}
        />
        <img
          alt="AirPods"
          src="./resource/product_5.png"
          onClick={navigate.bind(null, "/shop")}
        />
      </div>
    </div>
  );
};

export default Categories;
