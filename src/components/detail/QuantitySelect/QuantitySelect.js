import styles from "./QuantitySelect.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart";
import QuantityButton from "../QuantityButton/QuantityButton";
import * as storage from "../../../store/local-storage";
import { useNavigate } from "react-router-dom";
import { get_quantity } from "../../../store/url";

// in detail page, has buttons to adjust quantity, button to add product to cart
const QuantitySelect = ({ prod }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  let productAmount = 1;

  // function to pass to child component Quantity button, change value of productAmount to value  child component pass back to
  const changeProductAmountHandler = (quantity) => {
    productAmount = quantity;
  };

  const addToCartHandler = async () => {
    if (!isLoggedIn) navigate("/login");

    try {
      const res = await fetch(get_quantity, {
        body: JSON.stringify({
          amountToBuy: productAmount,
          productId: prod._id,
        }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg);
        return;
      }
    } catch (error) {}

    const addProd = {
      _id: prod._id,
      name: prod.name,
      price: Number(prod.price),
      quantity: productAmount,
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
