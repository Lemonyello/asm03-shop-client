import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

const ProductList = ({ listSize }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const data = await res.json();
      console.log(data);
      setProductList(data);
    })();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {productList.slice(0, 8).map((product, i) => (
        <div
          key={i}
          className={`${styles["product-item"]} ${
            listSize === 3 ? styles["product-item3"] : ""
          }`}
        >
          <img src={product.img1} alt={product.name} />
          <h5>{product.name}</h5>
          <p>
            {Number(product.price).toLocaleString().split(",").join(".")} VND
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
