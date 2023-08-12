import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["nav-bar"]}>
      <div className="d-flex gap-2">
        <button onClick={navigate.bind(null, "/")}>Home</button>
        <button onClick={navigate.bind(null, "/shop")}>Shop</button>
      </div>
      <h1>Boutique</h1>
      <div className="d-flex gap-2">
        <button onClick={navigate.bind(null, "/cart")}>
          <FontAwesomeIcon icon={faCartFlatbed} style={{ color: "#aaaaaa" }} />{" "}
          &nbsp;Cart
        </button>
        <button onClick={navigate.bind(null, "/login")}>
          <FontAwesomeIcon icon={faUser} style={{ color: "#aaaaaa" }} />
          &nbsp;Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
