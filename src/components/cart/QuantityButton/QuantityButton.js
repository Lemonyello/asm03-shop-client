import styles from "./QuantityButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import { saveCartToStorage } from "../../../store/local-storage";
import { get_quantity } from "../../../store/url";

// in cart page, in every product, has buttons for user to adjust amount of each product in cart
const QuantityButton = ({ quantity, _id }) => {
  const dispatch = useDispatch();

  const onChangeQuantityHandler = async (amountToAdd) => {
    // if current amount of this product is 1 and user click Decrease amount
    if (Number(quantity) === 1 && amountToAdd < 0) return; // prevent the amount to decrease and become 0

    try {
      const res = await fetch(get_quantity, {
        body: JSON.stringify({
          amountToBuy: quantity + amountToAdd,
          productId: _id,
        }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg);
        return;
      }
    } catch (error) {}

    // update the product amount in local storage and in state as well
    saveCartToStorage({ quantity: amountToAdd, _id });
    dispatch(cartActions.updateItem({ quantity: amountToAdd, _id }));
  };

  return (
    <div className={styles["quantity-buttons"]}>
      <button onClick={onChangeQuantityHandler.bind(null, -1)}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <input type="text" disabled value={quantity} />
      <button onClick={onChangeQuantityHandler.bind(null, 1)}>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default QuantityButton;
