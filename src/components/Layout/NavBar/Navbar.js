import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onClickHandler = (path) => navigate(path);

  return (
    <div className={styles["nav-bar"]}>
      <div className="d-flex gap-2">
        <button onClick={onClickHandler.bind(null, "/")}>Home</button>
        <button onClick={onClickHandler.bind(null, "/shop")}>Shop</button>
      </div>
      <h1>Boutique</h1>
      <div className="d-flex gap-2">
        <button onClick={onClickHandler.bind(null, "/cart")}>
          <FontAwesomeIcon icon={faCartFlatbed} style={{ color: "#aaaaaa" }} />{" "}
          &nbsp;Cart
        </button>
        <button onClick={onClickHandler.bind(null, "/login")}>
          <FontAwesomeIcon icon={faUser} style={{ color: "#aaaaaa" }} />
          &nbsp;Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
