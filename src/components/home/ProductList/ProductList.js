import styles from "./ProductList.module.css";
import { useDispatch } from "react-redux";
import { popupActions } from "../../../store/popup";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product, listType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classesItem = `${styles["product-item"]} ${
    listType === "shop" ? styles["product-item3"] : ""
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
        <ProductItem product={product} key={i} listType={listType} />
      ))}
    </div>
  );
};

export default ProductList;
