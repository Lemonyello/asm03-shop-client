import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as productLoader } from "./pages/home/Home";
import ShopPage from "./pages/shop/Shop";
import DetailPage from "./pages/detail/Detail";
import CartPage from "./pages/cart/Cart";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Layout from "./components/Layout/Layout";
import { action as actionSignup } from "./components/signup signin/SignupForm";
import { action as actionSignin } from "./components/signup signin/SigninForm";
import ErrorPage from "./pages/Error";

function App() {
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
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "checkout",
          element: <CheckoutPage />,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
