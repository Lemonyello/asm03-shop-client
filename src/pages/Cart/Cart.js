import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import Cart from "../../components/cart/Cart/Cart";
import CartTotal from "../../components/cart/CartTotal/CartTotal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";

const NavigateButtons = () => {
  return (
    <div className={styles["navigate-buttons"]}>
      <button>
        <FontAwesomeIcon icon={faLeftLong} />
        &nbsp;Continue shopping
      </button>
      <button className={styles.checkout}>
        Proceed to checkout&nbsp;
        <FontAwesomeIcon icon={faRightLong} />
      </button>
    </div>
  );
};

const CartPage = () => {
  return (
    <>
      <PageHeader header="cart" />
      <h2 className={styles.header}>Shopping cart</h2>
      <div className="d-flex justify-content-between">
        <Cart />
        <CartTotal total={1970000} />
      </div>
      <NavigateButtons />
    </>
  );
};

export default CartPage;
