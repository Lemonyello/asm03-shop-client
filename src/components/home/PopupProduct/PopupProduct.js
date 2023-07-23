import styles from "./PopupProduct.module.css";

const PopupProduct = ({ product }) => {
  return (
    <div className={`d-flex ${styles.popup}`}>
      <img alt={product.name} src={product.img} />
      <div>
        <h4>{product.name}</h4>
        <h5>{product.price}</h5>
        <p>{product.long_desc}</p>
        <button>View Detail</button>
      </div>
    </div>
  );
};

export default PopupProduct;
