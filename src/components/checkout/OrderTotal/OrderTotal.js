import styles from "./OrderTotal.module.css";

// in checkout page, the total amount of all the products in user cart
const OrderTotal = ({ items }) => {
  return (
    <div className={styles["total-order"]}>
      <h3>Your order</h3>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <h5>{item.name}</h5>
          <p>
            {item.price.toLocaleString().split(",").join(".")} VND x{" "}
            {item.amount}
          </p>
        </div>
      ))}
      <div className={styles.total}>
        <h4>Total</h4>
        <p>
          {items
            .reduce((sum, item) => sum + item.price * item.amount, 0)
            .toLocaleString()
            .split(",")
            .join(".")}
          VND
        </p>
      </div>
    </div>
  );
};

export default OrderTotal;
