import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-block">
      <div className="header-wrapper">
        <div className="header-second-wrapper">
          <div className="title-block">
            <Link className="title-link" to="/">
              <h1 className="header-title">unicode shop</h1>
            </Link>
          </div>
          <div className="icon-block">
            <Link to="/basket">
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="2x"
                style={{ color: "white" }}
                className="cart-icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
