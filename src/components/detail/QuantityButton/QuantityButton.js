import styles from "./QuantityButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

// in detail page, has buttons to change quantity of product before adding to cart
const QuantityButton = ({ changeProductAmount }) => {
  const quantityRef = useRef();

  // when click button
  const onChangeQuantityHandler = (quantity) => {
    const currentAmount = quantityRef.current.value;

    // if current amount selecting is 1, and user click button decrease amount => return
    if (Number(currentAmount) === 1 && quantity < 0) return; // prevent amount to go below 1

    // update the new amount to the component
    quantityRef.current.value = Number(currentAmount) + quantity;

    // pass the new amount to parent, for button Add to cart in parent to use
    changeProductAmount(Number(quantityRef.current.value));
  };

  return (
    <div className={styles["quantity-buttons"]}>
      <button onClick={onChangeQuantityHandler.bind(null, -1)}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <input type="text" disabled value={1} ref={quantityRef} />

      <button onClick={onChangeQuantityHandler.bind(null, 1)}>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default QuantityButton;
