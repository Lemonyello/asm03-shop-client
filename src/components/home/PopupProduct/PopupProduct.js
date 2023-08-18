import styles from "./PopupProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../../store/popup";
import { useNavigate } from "react-router-dom";

// in home page, pop up to show short desc of a product and a button to navigate to that product's detail page
const PopupProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showCloseAnim } = useSelector((state) => state.popup);

  // before redirect to Detail page, hide popup to prevent popup still shows when returning back to home page
  const onClickDetailHandler = () => {
    dispatch(popupActions.hidePopup());
    navigate(`/detail/${product._id.$oid}`);
  };

  // instead of hiding the popup right away, add fade out anim, and wait for anim to finish run then hide popup
  const onClickClosePopup = () => {
    dispatch(popupActions.closeAnimation());
    setTimeout(() => {
      dispatch(popupActions.hidePopup());
    }, 400);
  };

  const animBackdropDisappear = showCloseAnim
    ? styles["backdrop-disappear"]
    : "";
  const backdropClasses = `${styles.backdrop}  ${styles["backdrop-appear"]} ${animBackdropDisappear} `;

  const animWindowDisappear = showCloseAnim ? styles["window-disappear"] : "";
  const popupWindowClasses = `${styles["popup-window"]}  ${styles["window-appear"]} ${animWindowDisappear} `;

  return (
    <>
      <div className={backdropClasses}></div>
      <div className={popupWindowClasses}>
        <div className="d-flex">
          <img alt={product.name} src={product.img1} />
          <div>
            <div className="d-flex justify-content-between">
              <h4>{product.name}</h4>
              <button
                className={styles["btn-close"]}
                onClick={onClickClosePopup}
              >
                x
              </button>
            </div>
            <h5>
              {Number(product.price).toLocaleString().split(",").join(".")} VND
            </h5>
            <p>{product.short_desc.split("\n\n").join("\n")}</p>

            <button
              className={styles["btn-detail"]}
              onClick={onClickDetailHandler}
            >
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
