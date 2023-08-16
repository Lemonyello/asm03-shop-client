import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartFlatbed,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth";
import * as storage from "../../../store/local-storage";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onLogoutHandler = () => {
    storage.removeFromStorage(storage.CURRENT_USER);
    dispatch(authActions.logout());
  };
  const user = storage.getFromStorage(storage.CURRENT_USER, {});

  const cartClasses = pathname === "/cart" ? styles.active : "";
  const loginClasses =
    pathname === "/login" || pathname === "/register" ? styles.active : "";

  const btnLogin = (
    <button onClick={navigate.bind(null, "/login")} className={loginClasses}>
      <FontAwesomeIcon
        icon={faUser}
        className={`${styles.icon} ${loginClasses}`}
      />
      &nbsp;Login
    </button>
  );

  const btnUser = (
    <button>
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
      &nbsp;{user.fullName} <FontAwesomeIcon icon={faCaretDown} />
    </button>
  );

  return (
    <div className={styles["nav-bar"]}>
      <div className="d-flex gap-2">
        <button
          onClick={navigate.bind(null, "/")}
          className={pathname === "/" ? styles.active : ""}
        >
          Home
        </button>
        <button
          onClick={navigate.bind(null, "/shop")}
          className={pathname === "/shop" ? styles.active : ""}
        >
          Shop
        </button>
      </div>
      <h1>Boutique</h1>
      <div className="d-flex gap-2">
        <button onClick={navigate.bind(null, "/cart")} className={cartClasses}>
          <FontAwesomeIcon
            icon={faCartFlatbed}
            className={`${styles.icon} ${cartClasses}`}
          />
          &nbsp;Cart
        </button>
        {isLoggedIn ? btnUser : btnLogin}
        {isLoggedIn && <button onClick={onLogoutHandler}>(Logout)</button>}
      </div>
    </div>
  );
};

export default Navbar;
