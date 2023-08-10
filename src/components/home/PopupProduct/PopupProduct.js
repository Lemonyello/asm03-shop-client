import styles from "./PopupProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const PopupProduct = ({ product }) => {
  return (
    <div className={styles.backdrop}>
      <div className={`${styles["popup-window"]} ${styles["window-appear"]}`}>
        <button>x</button>
        <div className="d-flex">
          <img alt={product.name} src={product.img} />
          <div>
            <h4>{product.name}</h4>
            <h5>
              {Number(product.price).toLocaleString().split(",").join(".")} VND
            </h5>
            <p>{product.long_desc}</p>
            <button>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />{" "}
              &nbsp; View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupProduct;
