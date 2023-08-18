import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

// in cart page, list of products that user has added to cart

const Cart = ({ listCart }) => {
  return (
    <div className={styles.cart}>
      <div className={styles["table-header"]}>
        <h5 className={styles.image}>image</h5>
        <h5 className={styles.product}>product</h5>
        <h5 className={styles.price}>price</h5>
        <h5 className={styles.quantity}>quantity</h5>
        <h5 className={styles.total}>total</h5>
        <h5 className={styles.remove}>remove</h5>
      </div>
      {listCart.map((item, i) => (
        <CartItem key={i} item={item} />
      ))}
    </div>
  );
};

export default Cart;
