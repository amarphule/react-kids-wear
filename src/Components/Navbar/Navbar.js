import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useWishList } from "../../Contexts/WishListContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { wishlist } = useWishList();
  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <Link to="/">Kids Wear</Link>
        </div>
        <form className="search">
          <span className="search-icon">
            <i className="fas fa-search fa-sm"></i>
          </span>
          <input type="text" placeholder="What are you looking for?" />
        </form>
        <div>
          <ul className="header-links">
            {isLoggedIn ? (
              <li
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                  localStorage.removeItem("token");
                }}
                className="header-link"
              >
                <Link to="/" className="btn btn-cta">
                  Logout
                </Link>
              </li>
            ) : (
              <li className="header-link">
                <Link to="/login" className="btn btn-cta">
                  Login
                </Link>
              </li>
            )}
            <li className="header-link">
              <Link to="/wishlist">
                <div className="badge-wrapper">
                  <i className="far fa-heart"></i>
                  <span className="badge badge-icon-val">
                    {wishlist.length}
                  </span>
                </div>
              </Link>
            </li>
            <li className="header-link">
              <Link to="/cart">
                <div className="badge-wrapper">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge badge-icon-val">3</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
