import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import QuantityButton from "../QuantityButton/QuantityButton";
import { removeProductFromStorage } from "../../../store/local-storage";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const onRemoveProductHandler = () => {
    removeProductFromStorage(item.id);
    dispatch(cartActions.removeItem(item.id));
  };

  return (
    <div className={styles["cart-item"]}>
      <img alt={item.name} src={item.img} />
      <h4>{item.name}</h4>
      <p>{item.price.toLocaleString().split(",").join(".")} VND</p>
      <QuantityButton amount={item.amount} id={item.id} />
      <p>
        {(item.price * item.amount).toLocaleString().split(",").join(".")} VND
      </p>
      <button onClick={onRemoveProductHandler}>
        <FontAwesomeIcon icon={faTrashCan} className={styles.icon} />
      </button>
    </div>
  );
};

export default CartItem;
