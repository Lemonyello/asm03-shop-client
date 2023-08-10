import styles from "./DetailProduct.module.css";
import QuantityButton from "../UI/QuantityButton";

const DescriptionImages = ({ prod }) => {
  return (
    <div className={styles["desc-img"]}>
      <img src={prod.img1} alt="color 1" />
      <img src={prod.img2} alt="color 2" />
      <img src={prod.img3} alt="color 3" />
      <img src={prod.img4} alt="color 4" />
    </div>
  );
};

const QuantitySelect = () => {
  return (
    <div className={styles["add-to-cart"]}>
      <div className={styles["quantity-select"]}>
        <h6>QUANTITY</h6>
        <QuantityButton />
      </div>
      <button>Add to cart</button>
    </div>
  );
};

const ProductDescription = ({ prod }) => {
  return (
    <div className={styles["product-desc"]}>
      <h2>{prod.name}</h2>
      <h3>{Number(prod.price).toLocaleString().split(",").join(".")} VND</h3>
      <p>{prod.short_desc}</p>
      <h4>
        CATEGORY:<span> {prod.category}</span>
      </h4>
      <QuantitySelect />
    </div>
  );
};

const DetailProduct = ({ prod }) => {
  return (
    <div className={styles["detail-product"]}>
      <DescriptionImages prod={prod} />
      <img src={prod.img1} alt="color 1" />
      <ProductDescription prod={prod} />
    </div>
  );
};

export default DetailProduct;
