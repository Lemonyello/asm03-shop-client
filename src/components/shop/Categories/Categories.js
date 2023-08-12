import styles from "./Categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import { shopActions } from "../../../store/shop";

const categories = [
  {
    heading: "iphone & mac",
    cateNames: ["iPhone", "iPod", "Macbook"],
  },
  {
    heading: "wireless",
    cateNames: ["Airpod", "Watch"],
  },
  {
    heading: "other",
    cateNames: ["Mouse", "Keyboard", "Other"],
  },
];

const Categories = () => {
  const dispatch = useDispatch();

  const currentCategory = useSelector((state) => state.shop.currentCategory);

  const onClickCategoryHandler = (event) => {
    dispatch(
      shopActions.changeCategory(event.target.textContent.toLowerCase())
    );
  };

  return (
    <div className={styles.categories}>
      <h2>Categories</h2>
      <div>
        <h3>Apple</h3>
        <button
          onClick={onClickCategoryHandler}
          className={currentCategory === "all" ? styles.active : ""}
        >
          All
        </button>
        {categories.map((category, i) => (
          <div key={i}>
            <h4>{category.heading}</h4>
            {category.cateNames.map((name, i) => (
              <button
                key={i}
                onClick={onClickCategoryHandler}
                className={
                  currentCategory === name.toLowerCase() ? styles.active : ""
                }
              >
                {name}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
