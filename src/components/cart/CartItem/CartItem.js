import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import QuantityButton from "../../UI/QuantityButton";

const CartItem = ({ item }) => {
  return (
    <div className={styles["cart-item"]}>
      <img alt={item.name} src={item.img} />
      <h4>{item.name}</h4>
      <p>{Number(item.price).toLocaleString().split(",").join(".")} VND</p>
      <QuantityButton />
      <p>{Number(item.price).toLocaleString().split(",").join(".")} VND</p>
      <button>
        <FontAwesomeIcon icon={faTrashCan} className={styles.icon} />
      </button>
    </div>
  );
};

export default CartItem;
