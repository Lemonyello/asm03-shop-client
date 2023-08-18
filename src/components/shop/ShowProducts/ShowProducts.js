import styles from "./ShowProducts.module.css";
import { useRouteLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "../../home/ProductList/List/ProductList";
import SearchField from "../SearchField/SearchField";
import Pagination from "../Pagination/Pagination";

// in shop page, has list of products, search field, pagination

const ShowProducts = () => {
  const { currentCategory, searchWord, sort, currentPage } = useSelector(
    (state) => state.shop
  );

  const allProducts = useRouteLoaderData("home");

  let products = [];

  // if search word is not empty, filter according to search word
  if (searchWord)
    products = allProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchWord)
    );
  // if search word is empty, filter according to category
  else
    products =
      currentCategory === "all"
        ? allProducts
        : allProducts.filter((prod) => prod.category === currentCategory);

  // reverse order of list if sort type is Descending
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
          // get 9 products for each page
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
