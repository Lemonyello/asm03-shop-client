import Categories from "../../components/shop/Categories/Categories";
import ShowProducts from "../../components/shop/ShowProducts/ShowProducts";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";
import styles from "./Shop.module.css";

const ShopPage = () => {
  return (
    <>
      <PageHeader smallHeader="shop" bigHeader="shop" />
      <div className="d-flex">
        <Categories />
        <ShowProducts />
      </div>
    </>
  );
};

export default ShopPage;
