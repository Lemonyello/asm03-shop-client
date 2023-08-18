import { useParams, useRouteLoaderData } from "react-router-dom";
import DetailProduct from "../../components/detail/DetailProduct/DetailProduct";
import ProductList from "../../components/home/ProductList/List/ProductList";
import styles from "./Detail.module.css";

// detail page, has detail info of product, list of products of same category
const DetailPage = () => {
  const { productId } = useParams();
  const products = useRouteLoaderData("home");
  const product = products.find((prod) => prod._id.$oid === productId);
  const relatedProducts = products.filter(
    (prod) => prod.category === product.category && prod._id.$oid !== productId
  );

  return (
    <div className={styles.detail}>
      <DetailProduct prod={product} />
      <h3>Description</h3>
      <h4>Product description</h4>
      <p>{product.long_desc.split("\n\n").join("\n")}</p>
      <h2>Related products</h2>
      <ProductList listType="shop" products={relatedProducts} />
    </div>
  );
};

export default DetailPage;
