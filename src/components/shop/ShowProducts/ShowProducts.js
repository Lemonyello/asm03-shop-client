import ProductList from "../../home/ProductList/ProductList";
import styles from "./ShowProducts.module.css";

const SearchField = () => {
  return (
    <div className={styles["search-field"]}>
      <input type="text" placeholder="Enter Search Here!" />
      <select>
        <option>Default sorting</option>
        <option>Ascending</option>
        <option>Descending</option>
      </select>
    </div>
  );
};

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <div className="d-flex gap-1">
        <button>{"<<"}</button>
        <p>1</p>
        <button>{">>"}</button>
      </div>
      <p>Showing 1-9 of 9 results</p>
    </div>
  );
};

const ShowProducts = () => {
  return (
    <div className={styles["show-products"]}>
      <SearchField />
      <ProductList listSize={3} />
      <Pagination />
    </div>
  );
};

export default ShowProducts;
