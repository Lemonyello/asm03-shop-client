import { useParams, useRouteLoaderData } from "react-router-dom";
import DetailProduct from "../../components/detail/DetailProduct";
import ProductList from "../../components/home/ProductList/ProductList";
import styles from "./Detail.module.css";

const DetailPage = () => {
  const { productId } = useParams();
  const products = useRouteLoaderData("home");
  const product = products.find((prod) => prod._id.$oid === productId);
  const relatedProducts = products.filter(
    (prod) => prod.category === product.category
  );

  return (
    <div className={styles.detail}>
      <DetailProduct prod={product} />
      <h3>Description</h3>
      <h4>Product description</h4>
      <p>{product.long_desc.split("\n\n").join("\n")}</p>
      <h2>Related products</h2>
      <ProductList products={relatedProducts} />
    </div>
  );
};

export default DetailPage;
