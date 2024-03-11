import { useLoaderData } from "react-router-dom";
import DetailProduct from "../../components/detail/DetailProduct/DetailProduct";
import ProductList from "../../components/home/ProductList/List/ProductList";
import styles from "./Detail.module.css";
import { get_product } from "../../store/url";

// detail page, has detail info of product, list of products of same category
const DetailPage = () => {
  const { product, relatedProds } = useLoaderData() ?? {
    product: {},
    relatedProds: [],
  };

  return (
    <div className={styles.detail}>
      <DetailProduct prod={product} />
      <h3>Description</h3>
      <h4>Product description</h4>
      <p>{product.long_desc.split("\n\n").join("\n")}</p>
      <h2>Related products</h2>
      <ProductList listType="shop" products={relatedProds} />
    </div>
  );
};

export default DetailPage;

export const loader = async ({ request, params }) => {
  try {
    const res = await fetch(get_product + params.productId);

    const data = await res.json();

    if (res.ok) return data;
    else return null;
  } catch (error) {}
};
