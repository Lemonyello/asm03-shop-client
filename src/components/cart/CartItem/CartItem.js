import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import QuantityButton from "../QuantityButton/QuantityButton";
import { removeProductFromStorage } from "../../../store/local-storage";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";

// in cart page, a product in product list in user cart
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const onRemoveProductHandler = () => {
    // when user click Remove item, remove it from storage and from state as well
    removeProductFromStorage(item._id);
    dispatch(cartActions.removeItem(item._id));
  };

  return (
    <div className={styles["cart-item"]}>
      <img alt={item.name} src={item.img} />
      <h4>{item.name}</h4>
      <p>{item.price.toLocaleString().split(",").join(".")} VND</p>
      <QuantityButton quantity={item.quantity} _id={item._id} />
      <p>
        {(item.price * item.quantity).toLocaleString().split(",").join(".")} VND
      </p>
      <button onClick={onRemoveProductHandler}>
        <FontAwesomeIcon icon={faTrashCan} className={styles.icon} />
      </button>
    </div>
  );
};

export default CartItem;
