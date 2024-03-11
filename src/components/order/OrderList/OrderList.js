import OrderListItem from "../OrderListItem/OrderListItem";
import styles from "./OrderList.module.css";

const OrderListHeader = () => {
  return (
    <div className={styles.header}>
      <h5 className={styles.id}>id product</h5>
      <h5 className={styles.image}>image</h5>
      <h5 className={styles.name}>name</h5>
      <h5 className={styles.price}>price</h5>
      <h5 className={styles.count}>count</h5>
    </div>
  );
};

export default function OrderList({ list }) {
  return (
    <div className={styles.list}>
      <OrderListHeader />
      {list.map((item, i) => (
        <OrderListItem item={item} key={i} />
      ))}
    </div>
  );
}
