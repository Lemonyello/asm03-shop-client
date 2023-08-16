import styles from "./Home.module.css";
import Banner from "../../components/home/Banner/Banner";
import Categories from "../../components/home/Categories/Categories";
import FeatureCardSubscribe from "../../components/home/FeatureCardSubscribe/FeatureCardSubscribe";
import PopupProduct from "../../components/home/PopupProduct/PopupProduct";
import ProductList from "../../components/home/ProductList/ProductList";
import { useSelector } from "react-redux";
import { json, useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import * as storage from "../../store/local-storage";
import { createPortal } from "react-dom";

const HomePage = () => {
  const popupState = useSelector((state) => state.popup);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const data = useRouteLoaderData("home");

  useEffect(() => {
    const emptyObj = {};

    const user = storage.getFromStorage(storage.CURRENT_USER, emptyObj);

    user !== emptyObj && !isLoggedIn && dispatch(authActions.login());
  }, [dispatch, isLoggedIn]);

  return (
    <div className={styles.home}>
      <Banner />
      <Categories />
      <h3>Made the hard way</h3>
      <h4>top trending products</h4>
      <ProductList products={data.slice(0, 8)} />
      <FeatureCardSubscribe />

      {popupState.showPopup
        ? createPortal(
            <PopupProduct product={popupState.productShowing} />,
            document.getElementById("full-screen")
          )
        : ""}
    </div>
  );
};

export default HomePage;

export async function loader() {
  const res = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  if (!res.ok)
    throw json({ message: "Could not fetch products." }, { status: 500 });
  else {
    const data = await res.json();
    return [...data, ...data];
  }
}
