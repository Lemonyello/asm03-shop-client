import styles from "./QuantitySelect.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";
import QuantityButton from "../QuantityButton/QuantityButton";
import * as storage from "../../../store/local-storage";

// in detail page, has buttons to adjust quantity, button to add product to cart
const QuantitySelect = ({ prod }) => {
  const dispatch = useDispatch();
  let productAmount = 1;

  // function to pass to child component Quantity button, change value of productAmount to value  child component pass back to
  const changeProductAmountHandler = (amount) => {
    productAmount = amount;
  };

  const addToCartHandler = () => {
    const addProd = {
      id: prod._id.$oid,
      name: prod.name,
      price: Number(prod.price),
      amount: productAmount,
      img: prod.img1,
    };

    // when a product is added to cart, update the cart in local storage, update the cart state as well
    storage.saveCartToStorage(addProd);
    dispatch(cartActions.addItem(addProd));
  };

  return (
    <div className={styles["add-to-cart"]}>
      <div className={styles["quantity-select"]}>
        <h6>QUANTITY</h6>
        <QuantityButton changeProductAmount={changeProductAmountHandler} />
      </div>
      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  );
};

export default QuantitySelect;
