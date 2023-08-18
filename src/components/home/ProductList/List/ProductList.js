import ProductItem from "../Item/ProductItem";

// in home page, shop page, detail page, list of products in the shop
const ProductList = ({ listType, products }) => {
  return (
    <div className="d-flex flex-wrap gap-4 mb-5">
      {products.map((product, i) => (
        <ProductItem product={product} key={i} listType={listType} />
      ))}
    </div>
  );
};

export default ProductList;
