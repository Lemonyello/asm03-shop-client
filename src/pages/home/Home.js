import styles from "./Home.module.css";
import Banner from "../../components/home/Banner/Banner";
import Categories from "../../components/home/Categories/Categories";
import FeatureCardSubscribe from "../../components/home/FeatureCardSubscribe/FeatureCardSubscribe";
import PopupProduct from "../../components/home/PopupProduct/PopupProduct";
import ProductList from "../../components/home/ProductList/List/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { json, useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { authActions } from "../../store/auth";
import * as storage from "../../store/local-storage";
import { createPortal } from "react-dom";
import { get_products } from "../../store/url";

// home page, has banner, product categories, list of 8 products, pop up to show short desc about a product
const HomePage = () => {
  const popupState = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  const data = useRouteLoaderData("home");

  // for when after login, user gets redirected to Home page
  useEffect(() => {
    const user = storage.getFromStorage(storage.CURRENT_USER, null);

    // this causes NavBar to re-render and show user info if is logged in
    user !== null && dispatch(authActions.login());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <Banner />
      <Categories />
      <h3>Made the hard way</h3>
      <h4>top trending products</h4>
      <ProductList products={data.slice(0, 8)} />
      <FeatureCardSubscribe />

      {popupState.showPopup
        ? // render pop up in a different root to add different styling from the rest
          createPortal(
            <PopupProduct product={popupState.productShowing} />,
            document.getElementById("full-screen")
          )
        : ""}
    </div>
  );
};

export default HomePage;

// load product list when website reloads, it will run no matter what page the user is currently at
export async function loader() {
  try {
    const res = await fetch(get_products);

    const data = await res.json();
    return data;
  } catch (error) {}
}
