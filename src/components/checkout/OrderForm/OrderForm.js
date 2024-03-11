import { Form, useActionData } from "react-router-dom";
import styles from "./OrderForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage, CURRENT_USER } from "../../../store/local-storage";
import { create_order } from "../../../store/url";
import { orderTotalActions } from "../../../store/order-total";

// in checkout page, a form for user to fill out full name, email, phone, address for shipping
const OrderForm = ({ bill }) => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const { listCart } = useSelector((state) => state.cart);
  const { name, email, phone, _id } = getFromStorage(CURRENT_USER, {});

  if (actionData && actionData.failItems)
    dispatch(orderTotalActions.setFailItems(actionData.failItems));

  return (
    <Form className={styles.form} method="POST">
      <label>Full name:</label>
      <input
        type="text"
        placeholder="Enter Your Full Name Here!"
        name="name"
        defaultValue={name}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter Your Email Here!"
        name="email"
        defaultValue={email}
        required
      />
      <label>Phone number:</label>
      <input
        type="number"
        placeholder="Enter Your Phone Number Here!"
        name="phone"
        defaultValue={phone}
        required
      />
      <label>Address:</label>
      <input
        type="text"
        placeholder="Enter Your Address Here!"
        name="address"
        required
      />
      <input type="hidden" name="cart" value={JSON.stringify(listCart)} />
      <input type="hidden" name="bill" value={bill} />
      <input type="hidden" name="userId" value={_id} />
      <button type="submit">Place order</button>
      {actionData && (
        <span className={styles["result-text"]}>{actionData.msg}</span>
      )}
    </Form>
  );
};

export default OrderForm;

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();

    const order = {
      userId: formData.get("userId"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      products: JSON.parse(formData.get("cart")),
      payStatus: "Waiting for pay",
      deliveryStatus: "Waiting for progressing",
      bill: formData.get("bill"),
    };

    const res = await fetch(create_order, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(order),
    });

    const data = await res.json();

    return data;
  } catch (error) {}
};
