import styles from "./DetailProduct.module.css";
import QuantityButton from "../QuantityButton/QuantityButton";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart";
import * as storage from "../../../store/local-storage";

const DescriptionImages = ({ prod }) => {
  return (
    <div className={styles["desc-img"]}>
      <img src={prod.img1} alt="color 1" />
      <img src={prod.img2} alt="color 2" />
      <img src={prod.img3} alt="color 3" />
      <img src={prod.img4} alt="color 4" />
    </div>
  );
};

const QuantitySelect = ({ prod }) => {
  const dispatch = useDispatch();
  // const { listCart } = useSelector((state) => state.cart);
  // console.log(listCart);
  let productAmount = 1;
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

const ProductDescription = ({ prod }) => {
  return (
    <div className={styles["product-desc"]}>
      <h2>{prod.name}</h2>
      <h3>{Number(prod.price).toLocaleString().split(",").join(".")} VND</h3>
      <p>{prod.short_desc}</p>
      <h4>
        CATEGORY:<span> {prod.category}</span>
      </h4>
      <QuantitySelect prod={prod} />
    </div>
  );
};

const DetailProduct = ({ prod }) => {
  return (
    <div className={styles["detail-product"]}>
      <DescriptionImages prod={prod} />
      <img src={prod.img1} alt="color 1" />
      <ProductDescription prod={prod} />
    </div>
  );
};

export default DetailProduct;
