import styles from "./SearchField.module.css";
import { useDispatch } from "react-redux";
import { shopActions } from "../../../store/shop";

// in shop page, has text field to search, a dropdown list to choose sort type of products
const SearchField = () => {
  const dispatch = useDispatch();
  const onInputChangeHandler = (event) => {
    // filter product list for every time input change
    dispatch(shopActions.changeSearchWord(event.target.value.toLowerCase()));
  };
  const onSelectChangeHandler = (event) => {
    dispatch(shopActions.changeSort(event.target.value));
  };

  return (
    <div className={styles["search-field"]}>
      <input
        type="text"
        placeholder="Enter Search Here!"
        onChange={onInputChangeHandler}
      />
      <select onChange={onSelectChangeHandler}>
        <option>Default sorting</option>
        <option>Ascending</option>
        <option>Descending</option>
      </select>
    </div>
  );
};

export default SearchField;
