import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

const ProductList = () => {
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
    <div className={styles["product-list"]}>
      <h3>Made the hard way</h3>
      <h4>top trending products</h4>
      <div className="d-flex flex-wrap gap-2">
        {productList.slice(0, 8).map((product, i) => (
          <div key={i} className={styles["product-item"]}>
            <img src={product.img1} alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
