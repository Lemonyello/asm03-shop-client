import { Outlet } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import LiveChat from "./LiveChat/LiveChat";
import { createPortal } from "react-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <LiveChat />
      {/* add footer to a different root to add different styling from the rest */}
      {createPortal(<Footer />, document.getElementById("full-screen"))}
    </>
  );
};

export default Layout;
