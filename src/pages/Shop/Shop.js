import Categories from "../../components/shop/Categories/Categories";
import ShowProducts from "../../components/shop/ShowProducts/ShowProducts";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { shopActions } from "../../store/shop";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log("closing shop");
      dispatch(shopActions.reset());
    };
  }, [dispatch]);

  return (
    <>
      <PageHeader header="shop" />
      <div className="d-flex justify-content-between">
        <Categories />
        <ShowProducts />
      </div>
    </>
  );
};

export default ShopPage;
