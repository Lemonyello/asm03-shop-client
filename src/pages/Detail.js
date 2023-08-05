import DetailProduct from "../components/detail/DetailProduct";
import ProductList from "../components/home/ProductList/ProductList";

const dummyProd = {
  img1: "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249",
  img2: "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_3.jpeg?alt=media&token=b3417ab8-33b9-4b52-a980-8f9afe4e0896",
  img3: "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_2.jpeg?alt=media&token=74aac3de-0c55-490e-9601-30829de7879f",
  img4: "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249",
  name: "Apple Watch",
  price: 10590000,
  description: "Desc",
  category: "watch",
};

const DetailPage = () => {
  return (
    <>
      <DetailProduct prod={dummyProd} />
      <h3>Description</h3>
      <p>Product description</p>
      <p>Đặc điểm nổi bật</p>
      <p>{dummyProd.description}</p>
      <h2>Related products</h2>
      <ProductList />
    </>
  );
};

export default DetailPage;
