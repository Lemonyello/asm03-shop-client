import styles from "./QuantityButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import { saveCartToStorage } from "../../../store/local-storage";

// in cart page, in every product, has buttons for user to adjust amount of each product in cart
const QuantityButton = ({ amount, id }) => {
  const dispatch = useDispatch();

  const onChangeQuantityHandler = (amountToAdd) => {
    // if current amount of this product is 1 and user click Decrease amount
    if (Number(amount) === 1 && amountToAdd < 0) return; // prevent the amount to decrease and become 0

    // update the product amount in local storage and in state as well
    saveCartToStorage({ amount: amountToAdd, id });
    dispatch(cartActions.updateItem({ amount: amountToAdd, id }));
  };

  return (
    <div className={styles["quantity-buttons"]}>
      <button onClick={onChangeQuantityHandler.bind(null, -1)}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <input type="text" disabled value={amount} />

      <button onClick={onChangeQuantityHandler.bind(null, 1)}>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default QuantityButton;
