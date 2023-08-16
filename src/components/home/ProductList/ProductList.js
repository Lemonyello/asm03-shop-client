import styles from "./ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../store/popup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { shopActions } from "../../../store/shop";

const ProductItem = ({ product, listType }) => {
  const { animShowUp, animFadeOut } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    animShowUp &&
      setTimeout(() => {
        dispatch(shopActions.turnOffAnimShowUp());
      }, 500);

    setTimeout(() => {
      dispatch(shopActions.turnOnAnimFadeOut());
    }, 800);
  }, [animShowUp, dispatch]);

  const classesItem = `${styles["product-item"]} ${
    listType === "shop" ? styles["product-item3"] : ""
  } ${animShowUp ? styles["show-up"] : styles["fade-out"]} ${
    animFadeOut ? "" : styles["not-show-anim"]
  }`;

  const onClickItemHandler = () => {
    if (listType === "shop") navigate(`/detail/${product._id.$oid}`);
    else dispatch(popupActions.showPopup(product));
  };

  return (
    <div className={classesItem} onClick={onClickItemHandler}>
      <img src={product.img1} alt={product.name} />
      <h5>{product.name}</h5>
      <p>{Number(product.price).toLocaleString().split(",").join(".")} VND</p>
    </div>
  );
};

const ProductList = ({ listType, products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {products.map((product, i) => (
        <ProductItem
          product={product}
          key={i}
          listType={listType}
          animShowUp={true}
        />
      ))}
    </div>
  );
};

export default ProductList;
