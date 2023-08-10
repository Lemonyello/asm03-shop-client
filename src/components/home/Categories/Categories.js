import { useNavigate } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = () => {
  const navigate = useNavigate();

  const onClickCategoryHandler = (path) => navigate(path);

  return (
    <div className={styles.categories}>
      <h3>Carefully created collections</h3>
      <h4>Browse our categories</h4>
      <div>
        <img
          alt="iPhone"
          src="./resource/product_1.png"
          onClick={onClickCategoryHandler.bind(null, "/shop")}
        />
        <img
          alt="Mac"
          src="./resource/product_2.png"
          onClick={onClickCategoryHandler.bind(null, "/shop")}
        />
      </div>
      <div>
        <img
          alt="iPad"
          src="./resource/product_3.png"
          onClick={onClickCategoryHandler.bind(null, "/shop")}
        />
        <img
          alt="Watch"
          src="./resource/product_4.png"
          onClick={onClickCategoryHandler.bind(null, "/shop")}
        />
        <img
          alt="AirPods"
          src="./resource/product_5.png"
          onClick={onClickCategoryHandler.bind(null, "/shop")}
        />
      </div>
    </div>
  );
};

export default Categories;
