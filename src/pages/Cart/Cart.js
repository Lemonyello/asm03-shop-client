import styles from "./Cart.module.css";
import Cart from "../../components/cart/Cart/Cart";
import CartTotal from "../../components/cart/CartTotal/CartTotal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { orderTotalActions } from "../../store/order-total";

// cart page, has the products user has added to the cart, total amount, buttons to navigate to shop page and checkout page

const NavigateButtons = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["navigate-buttons"]}>
      <button onClick={navigate.bind(null, "/shop")}>
        <FontAwesomeIcon icon={faLeftLong} />
        &nbsp;Continue shopping
      </button>
      <button
        className={styles.checkout}
        onClick={navigate.bind(null, "/checkout")}
      >
        Proceed to checkout&nbsp;
        <FontAwesomeIcon icon={faRightLong} />
      </button>
    </div>
  );
};

const CartPage = () => {
  const { listCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderTotalActions.setFailItems([]));
  }, []);

  return (
    <>
      <PageHeader header="cart" />
      <h2 className={styles.header}>Shopping cart</h2>
      <div className="d-flex justify-content-between align-items-start">
        <Cart listCart={listCart} />
        <CartTotal
          total={listCart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        />
      </div>
      <NavigateButtons />
    </>
  );
};

export default CartPage;
