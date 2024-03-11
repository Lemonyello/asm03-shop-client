import { useLoaderData } from "react-router-dom";
import { get_history } from "../../../store/url";
import HistoryListItem from "../HistoryListItem/HistoryListItem";
import { getFromStorage, CURRENT_USER } from "../../../store/local-storage";
import styles from "./HistoryList.module.css";

const HistoryListHeader = () => {
  return (
    <div className={styles.header}>
      <h5 className={styles["id-order"]}>id order</h5>
      <h5 className={styles["id-user"]}>id user</h5>
      <h5 className={styles.name}>name</h5>
      <h5 className={styles.phone}>phone</h5>
      <h5 className={styles.address}>address</h5>
      <h5 className={styles.total}>total</h5>
      <h5 className={styles.delivery}>delivery</h5>
      <h5 className={styles.pay}>Status</h5>
      <h5 className={styles.detail}>detail</h5>
    </div>
  );
};

export default function HistoryList() {
  const history = useLoaderData();

  return (
    <div className={styles.list}>
      <HistoryListHeader />
      {history.map((order, i) => (
        <HistoryListItem key={i} item={order} />
      ))}
    </div>
  );
}

export const loader = async () => {
  try {
    const { _id } = getFromStorage(CURRENT_USER, {});
    const res = await fetch(get_history + _id);

    const data = await res.json();

    if (res.ok) return data;
    else return null;
  } catch (error) {}
};
