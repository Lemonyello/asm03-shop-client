import { useLoaderData } from "react-router-dom";
import OrderList from "../../components/order/OrderList/OrderList";
import { get_order } from "../../store/url";
import styles from "./Order.module.css";

export default function OrderPage() {
  const { products, userId, name, phone, address, bill } = useLoaderData() ?? {
    products: [],
    bill: -1000000,
  };

  return (
    <div className={styles.page}>
      <h1>information order</h1>
      <p>
        ID user: <span>{userId}</span>
      </p>
      <p>
        full name: <span>{name}</span>
      </p>
      <p>
        phone: <span>{phone}</span>
      </p>
      <p>
        address: <span>{address}</span>
      </p>
      <p>
        total: <span>{bill.toLocaleString().split(",").join(".")} VND</span>
      </p>
      <OrderList list={products} />
    </div>
  );
}

export const loader = async ({ params }) => {
  try {
    const res = await fetch(get_order + params.orderId);

    const data = await res.json();

    if (res.ok) return data;
    else return null;
  } catch (error) {}
};
