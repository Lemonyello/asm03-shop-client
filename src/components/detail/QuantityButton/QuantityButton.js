import styles from "./QuantityButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const QuantityButton = ({ changeProductAmount }) => {
  const quantityRef = useRef();

  const onChangeQuantityHandler = (amount) => {
    const currentAmount = quantityRef.current.value;
    if (Number(currentAmount) === 1 && amount < 0) return;
    quantityRef.current.value = Number(currentAmount) + amount;
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
