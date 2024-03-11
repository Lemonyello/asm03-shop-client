import { useSelector } from "react-redux";
import styles from "./OrderTotal.module.css";

// in checkout page, the total amount of all the products in user cart
const OrderTotal = ({ items, bill }) => {
  const { failItems } = useSelector((state) => state.orderTotal);

  return (
    <div className={styles["total-order"]}>
      <h3>Your order</h3>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.item} ${
            failItems.some((itm) => itm === item._id) ? styles.fail : ""
          }`}
        >
          <h5>{item.name}</h5>
          <p>
            {item.price.toLocaleString().split(",").join(".")} VND x{" "}
            {item.quantity}
          </p>
        </div>
      ))}
      <div className={styles.total}>
        <h4>Total</h4>
        <p>
          {bill.toLocaleString().split(",").join(".")}
          VND
        </p>
      </div>
    </div>
  );
};

export default OrderTotal;
