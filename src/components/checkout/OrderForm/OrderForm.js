import styles from "./OrderForm.module.css";

// in checkout page, a form for user to fill out full name, email, phone, address for shipping
const OrderForm = () => {
  return (
    <form className={styles.form}>
      <label>Full name:</label>
      <input type="text" placeholder="Enter Your Full Name Here!" />
      <label>Email:</label>
      <input type="email" placeholder="Enter Your Email Here!" />
      <label>Phone number:</label>
      <input type="number" placeholder="Enter Your Phone Number Here!" />
      <label>Address:</label>
      <input type="text" placeholder="Enter Your Address Here!" />
      <button>Place order</button>
    </form>
  );
};

export default OrderForm;
