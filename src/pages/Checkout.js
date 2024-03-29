import { useSelector } from "react-redux";
import PageHeader from "../components/Layout/PageHeader/PageHeader";
import OrderForm from "../components/checkout/OrderForm/OrderForm";
import OrderTotal from "../components/checkout/OrderTotal/OrderTotal";

// checkout page, has a form for user to fill out billing details, total amount of the bill
const CheckoutPage = () => {
  const { listCart } = useSelector((state) => state.cart);

  const totalBill = listCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <PageHeader header="checkout" path="home/cart" />
      <h1 className="fs-5 text-uppercase fw-bold mb-4">Billing details</h1>
      <div
        className="d-flex justify-content-between"
        style={{ marginBottom: "96px" }}
      >
        <OrderForm bill={totalBill} />
        <OrderTotal items={listCart} bill={totalBill} />
      </div>
    </>
  );
};

export default CheckoutPage;
