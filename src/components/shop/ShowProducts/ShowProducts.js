import { useRouteLoaderData } from "react-router-dom";
import ProductList from "../../home/ProductList/ProductList";
import styles from "./ShowProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { shopActions } from "../../../store/shop";

const SearchField = () => {
  const dispatch = useDispatch();
  const onInputChangeHandler = (event) => {
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
      <p>
        Showing {`${(currentPage - 1) * 9 + 1}-${currentPage * 9}`} of{" "}
        {listSize} results
      </p>
    </div>
  );
};

const ShowProducts = () => {
  const { currentCategory, searchWord, sort, currentPage } = useSelector(
    (state) => state.shop
  );
  const allProducts = useRouteLoaderData("home");
  let products = [];
  if (searchWord)
    products = allProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchWord)
    );
  else
    products =
      currentCategory === "all"
        ? allProducts
        : allProducts.filter((prod) => prod.category === currentCategory);

  if (sort === "Descending") {
    const reversedProducts = [];
    for (let i = products.length - 1; i > -1; i--)
      reversedProducts.push(products[i]);
    products = reversedProducts;
  }

  return (
    <div className={styles["show-products"]}>
      <SearchField />
      {products.length ? (
        <ProductList
          listType="shop"
          products={products.slice((currentPage - 1) * 9, currentPage * 9)}
        />
      ) : (
        <p>No product found.</p>
      )}
      <Pagination listSize={products.length} />
    </div>
  );
};

export default ShowProducts;
