import styles from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../.././store/popup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { shopActions } from "../../../.././store/shop";

// in home page, shop page, detail page, item of list of the products of the shop
const ProductItem = ({ product, listType }) => {
  const { animShowUp, preventAnimRun } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if animShowUp is true, the item shows up with anim, if not then shows up with no anim
  useEffect(() => {
    animShowUp &&
      setTimeout(() => {
        // when anim show up finish run, remove that anim, add anim fade out, set duration of anim fade out to 0s
        dispatch(shopActions.turnOffAnimShowUp());
      }, 500);

    setTimeout(() => {
      // set duration of anim fade out to normal after 0.8s re-render
      dispatch(shopActions.turnOnPreventAnimRun());
      // this is to prevent anim fade out to run when component re-render, only run when mouse leave component
    }, 800);
  }, [animShowUp, dispatch]);

  const onClickItemHandler = () => {
    if (listType === "shop") navigate(`/detail/${product._id.$oid}`);
    else dispatch(popupActions.showPopup(product));
  };

  const prodType = listType === "shop" ? styles["product-item3"] : "";
  const animType = animShowUp ? styles["show-up"] : styles["fade-out"];
  const temporarilyStopAnim = preventAnimRun ? "" : styles["not-show-anim"];

  const classesItem = `${styles["product-item"]} ${prodType} ${animType} ${temporarilyStopAnim}`;

  return (
    <div className={classesItem} onClick={onClickItemHandler}>
      <img src={product.img1} alt={product.name} />
      <h5>{product.name}</h5>
      <p>{Number(product.price).toLocaleString().split(",").join(".")} VND</p>
    </div>
  );
};

export default ProductItem;
