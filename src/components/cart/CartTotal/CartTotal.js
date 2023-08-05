import styles from "./CartTotal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

const CartTotal = ({ total }) => {
  return (
    <div className={styles.total}>
      <h3>Cart total</h3>
      <div className="d-flex justify-content-between">
        <h5>Subtotal</h5>
        <p>{total} VND</p>
      </div>
      <div className="d-flex justify-content-between">
        <h5>Total</h5>
        <p>{total} VND</p>
      </div>
      <input type="text" placeholder="Enter your coupon" />
      <button>
        <FontAwesomeIcon icon={faGift} />
        Apply coupon
      </button>
    </div>
  );
};

export default CartTotal;
