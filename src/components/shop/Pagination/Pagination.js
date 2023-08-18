import styles from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { shopActions } from "../../../store/shop";

// in shop page, has current page number, buttons to move to next and previous page
const Pagination = ({ listSize }) => {
  const { currentPage } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const sumPage = Math.floor(listSize / 9) + 1;
  const onChangePageHandler = (page) => {
    dispatch(shopActions.changePage(page));
  };

  return (
    <div className={styles.pagination}>
      <div className="d-flex gap-1">
        {currentPage !== 1 && (
          <button onClick={onChangePageHandler.bind(null, -1)}>{"<<"}</button>
        )}
        <p>{currentPage}</p>
        {currentPage !== sumPage && (
          <button onClick={onChangePageHandler.bind(null, 1)}>{">>"}</button>
        )}
      </div>
      {listSize === 0 ? (
        <p>Showing 0 result.</p>
      ) : (
        <p>
          Showing{" "}
          {`${(currentPage - 1) * 9 + 1}-${
            currentPage === sumPage ? listSize : currentPage * 9
          }`}{" "}
          of {listSize} results
        </p>
      )}
    </div>
  );
};

export default Pagination;
