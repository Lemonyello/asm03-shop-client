import styles from "./PopupProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../store/popup";
import { useNavigate } from "react-router-dom";

const PopupProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showCloseAnim = useSelector((state) => state.popup.showCloseAnim);

  const onClickDetailHandler = () => {
    dispatch(popupActions.hidePopup());
    navigate(`/detail/${product._id.$oid}`);
  };

  const onClickClosePopup = () => {
    dispatch(popupActions.closeAnimation());
    setTimeout(() => {
      dispatch(popupActions.hidePopup());
    }, 400);
  };

  return (
    <>
      <div
        className={`${styles.backdrop}  ${styles["backdrop-appear"]} ${
          showCloseAnim ? styles["backdrop-disappear"] : ""
        } `}
      ></div>
      <div
        className={`${styles["popup-window"]}  ${styles["window-appear"]} ${
          showCloseAnim ? styles["window-disappear"] : ""
        } `}
      >
        <button onClick={onClickClosePopup}>x</button>
        <div className="d-flex">
          <img alt={product.name} src={product.img1} />
          <div>
            <h4>{product.name}</h4>
            <h5>
              {Number(product.price).toLocaleString().split(",").join(".")} VND
            </h5>
            <p>{product.long_desc}</p>
            <button onClick={onClickDetailHandler}>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white" }}
              />{" "}
              &nbsp; View Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupProduct;
