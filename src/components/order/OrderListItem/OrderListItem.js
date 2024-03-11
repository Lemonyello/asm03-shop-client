import styles from "./OrderListItem.module.css";

export default function OrderListItem({ item }) {
  return (
    <div className={styles.item}>
      <p className={styles.id}>{item._id._id}</p>
      <div className={styles.image}>
        <img alt={item._id.name} src={item._id.img1} />
      </div>
      <p className={styles.name}>{item._id.name}</p>
      <p className={styles.price}>
        {item._id.price.toLocaleString().split(",").join(".")} VND
      </p>
      <p className={styles.count}>{item.quantity}</p>
    </div>
  );
}
