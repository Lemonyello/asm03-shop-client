import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HistoryListItem.module.css";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function HistoryListItem({
  item: { _id, userId, name, phone, address, bill, deliveryStatus, payStatus },
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.item}>
      <p className={styles["id-order"]}>{_id}</p>
      <p className={styles["id-user"]}>{userId}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.phone}>{phone}</p>
      <p className={styles.address}>{address}</p>
      <p className={styles.total}>
        {bill.toLocaleString().split(",").join(".")} VND
      </p>
      <p className={styles.delivery}>{deliveryStatus}</p>
      <p className={styles.pay}>{payStatus}</p>
      <div className={styles.detail}>
        <button onClick={navigate.bind(null, "/orders/" + _id)}>
          View&nbsp;
          <FontAwesomeIcon icon={faRightLong} />
        </button>
      </div>
    </div>
  );
}
