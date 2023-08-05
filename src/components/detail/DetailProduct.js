import styles from "./DetailProduct.module.css";

const DescriptionImages = ({ prod }) => {
  return (
    <div className={`d-flex flex-column ${styles["desc-img"]}`}>
      <img src={prod.img1} alt="color 1" />
      <img src={prod.img2} alt="color 2" />
      <img src={prod.img3} alt="color 3" />
      <img src={prod.img4} alt="color 4" />
    </div>
  );
};

const QuantitySelect = () => {
  return (
    <div className="d-flex ">
      <div className="d-flex justify-content-between ">
        <p>QUANTITY</p>
        <div className="d-flex">
          <button>-</button>
          <p className={styles.quantity}>1</p>
          <button>+</button>
        </div>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

const ProductDescription = ({ prod }) => {
  return (
    <div className={styles["product-desc"]}>
      <h2>{prod.name}</h2>
      <h3>{prod.price}</h3>
      <p>{prod.description}</p>
      <h4>
        CATEGORY:<span>{prod.category}</span>
      </h4>
      <QuantitySelect />
    </div>
  );
};

const DetailProduct = ({ prod }) => {
  return (
    <div className={`d-flex ${styles["detail-product"]} `}>
      <DescriptionImages prod={prod} />
      <img src={prod.img1} alt="color 1" />
      <ProductDescription prod={prod} />
    </div>
  );
};

export default DetailProduct;
