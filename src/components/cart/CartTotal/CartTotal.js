import styles from "./CartTotal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

// in cart page, has total mount of all products in cart, a field to add coupon

const CouponSelect = () => {
  return (
    <div className={styles.coupon}>
      <input type="text" placeholder="Enter your coupon" />
      <button>
        <FontAwesomeIcon icon={faGift} />
        &nbsp;Apply coupon
      </button>
    </div>
  );
};

const CartTotal = ({ total }) => {
  return (
    <div className={styles["cart-total"]}>
      <h3>Cart total</h3>
      <div className={styles.subtotal}>
        <h5>Subtotal</h5>
        <p>{total.toLocaleString().split(",").join(".")} VND</p>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5>Total</h5>
        <p className={styles.total}>
          {total.toLocaleString().split(",").join(".")} VND
        </p>
      </div>
      <CouponSelect />
    </div>
  );
};

export default CartTotal;
