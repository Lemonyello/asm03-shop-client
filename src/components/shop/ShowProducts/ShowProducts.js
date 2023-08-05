import ProductList from "../../home/ProductList/ProductList";
import styles from "./ShowProducts.module.css";

const ShowProducts = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <input type="text" placeholder="Enter Search Here!"/>
        <select>
          <option>Default sorting</option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
      <ProductList />
    </div>
  );
};

export default ShowProducts;
