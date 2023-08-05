import PageHeader from "../components/Layout/PageHeader/PageHeader";
import OrderForm from "../components/checkout/OrderForm/OrderForm";
import OrderTotal from "../components/checkout/OrderTotal/OrderTotal";

const CheckoutPage = () => {
  return (
    <>
      <PageHeader
        smallHeader="checkout"
        bigHeader="checkout"
        path="home/cart/"
      />
      <h1>Billing details</h1>
      <div className="d-flex justify-content-between">
        <OrderForm />
        <OrderTotal />
      </div>
    </>
  );
};

export default CheckoutPage;
