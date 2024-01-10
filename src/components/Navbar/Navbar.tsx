import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../auth/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { RootState } from "../../store/store";
import Cart from "../Cart/Cart";

type Props = {};

const Navbar = (props: Props) => {
  const loginState = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  console.log(loginState);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-product"}>
                Ürün Ekle
              </Link>
            </li>
          </ul>
          <Cart />
          {!loginState && (
            <Link to={"/login"}>
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
          {loginState && (
            <button onClick={logoutHandler} className="btn btn-warning">
              <>Logout</>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
