import { Link } from "react-router-dom";
import Cart from "../../components/cart/Cart/Cart";
import CartTotal from "../../components/cart/CartTotal/CartTotal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import PageHeader from "../../components/Layout/PageHeader/PageHeader";

const CartPage = () => {
  return (
    <>
      <PageHeader smallHeader="cart" bigHeader="cart" />
      <h2>Shopping cart</h2>
      <div className="d-flex justify-content-between">
        <Cart />
        <CartTotal total={1970000} />
      </div>
      <div className="d-flex justify-content-between">
        <button>
          <FontAwesomeIcon icon={faLeftLong} />
          Continue shopping
        </button>
        <Link to="/checkout">
          Proceed to checkout <FontAwesomeIcon icon={faRightLong} />
        </Link>
      </div>
    </>
  );
};

export default CartPage;
