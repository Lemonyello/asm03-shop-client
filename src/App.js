import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as productLoader } from "./pages/home/Home";
import ShopPage from "./pages/shop/Shop";
import DetailPage, { loader as loaderDetail } from "./pages/detail/Detail";
import CartPage from "./pages/cart/Cart";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Layout from "./components/Layout/Layout";
import { action as actionSignup } from "./components/signup signin/SignupForm";
import { action as actionSignin } from "./components/signup signin/SigninForm";
import ErrorPage from "./pages/Error";
import { action as actionOrder } from "./components/checkout/OrderForm/OrderForm";
import HistoryPage from "./pages/history/History";
import OrderPage, { loader as loaderOrder } from "./pages/order/Order";
import { loader as loaderHistory } from "./components/history/HistoryList/HistoryList";
import { useDispatch } from "react-redux";
import { chatActions } from "./store/chat";
import { useEffect, useContext } from "react";
import ShopContext from "./store/shop-context";
import { removeFromStorage, CHAT_ROOM } from "./store/local-storage";

function App() {
  const dispatch = useDispatch();
  const { socket } = useContext(ShopContext);

  useEffect(() => {
    removeFromStorage(CHAT_ROOM);

    socket.on("receive_message", ({ username, msg }) => {
      dispatch(chatActions.chat({ username, msg }));
    });
  }, [dispatch, socket]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: productLoader,
      id: "home",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "detail/:productId",
          element: <DetailPage />,
          loader: loaderDetail,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "checkout",
          element: <CheckoutPage />,
          action: actionOrder,
        },
        {
          path: "login",
          element: <LoginPage />,
          action: actionSignin,
        },
        {
          path: "register",
          element: <RegisterPage />,
          action: actionSignup,
        },
        {
          path: "history",
          element: <HistoryPage />,
          loader: loaderHistory,
        },
        {
          path: "orders/:orderId",
          element: <OrderPage />,
          loader: loaderOrder,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
