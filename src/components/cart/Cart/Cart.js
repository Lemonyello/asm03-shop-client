import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

const dummy_Prods = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249",
    long_desc:
      "Tính năng nổi bật \n\n• Màn hình Super Retina XDR 6.7 inch với ProMotion cho cảm giác nhanh nhạy hơn (3)\n\n• Chế độ Điện Ảnh làm tăng thêm độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video\n\n• Hệ thống camera chuyên nghiệp Telephoto, Wide và Ultra Wide 12MP; LiDAR Scanner; phạm vi thu phóng quang học 6x; chụp ảnh macro; Phong Cách Nhiếp Ảnh, video ProRes (4), HDR thông minh thế hệ 4, chế độ Ban Đêm, Apple ProRAW, khả năng quay video HDR Dolby Vision 4K\n\n• Camera trước TrueDepth 12MP với chế độ Ban Đêm và khả năng quay video HDR Dolby Vision 4K\n\n• Chip A15 Bionic cho hiệu năng thần tốc\n\n• Thời gian xem video lên đến 28 giờ, thời lượng pin dài nhất từng có trên iPhone (2)\n\n• Thiết kế bền bỉ với Ceramic Shield\n\n• Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường (5)\n\n• Mạng 5G cho tốc độ tải xuống siêu nhanh, xem video và nghe nhạc trực tuyến chất lượng cao (1)\n\n• iOS 15 tích hợp nhiều tính năng mới cho phép bạn làm được nhiều việc hơn bao giờ hết với iPhone (6)..",
    name: "Apple iPhone 13 Pro Max - Alpine Green",
    price: "29390000",
  },
];

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles["table-header"]}>
        <h5 className={styles.image}>image</h5>
        <h5 className={styles.product}>product</h5>
        <h5 className={styles.price}>price</h5>
        <h5 className={styles.quantity}>quantity</h5>
        <h5 className={styles.total}>total</h5>
        <h5 className={styles.remove}>remove</h5>
      </div>
      {dummy_Prods.map((item, i) => (
        <CartItem key={i} item={item} />
      ))}
    </div>
  );
};

export default Cart;
