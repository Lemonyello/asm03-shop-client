import styles from "./QuantityButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import { saveCartToStorage } from "../../../store/local-storage";

const QuantityButton = ({ amount, id }) => {
  const dispatch = useDispatch();

  const onChangeQuantityHandler = (amountToAdd) => {
    if (Number(amount) === 1 && amountToAdd < 0) return;

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
