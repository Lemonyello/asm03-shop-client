import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import LiveChat from "./LiveChat/LiveChat";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <LiveChat />
      <Footer />
    </>
  );
};

export default Layout;
