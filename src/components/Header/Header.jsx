import React, { useContext, useState } from "react";
import cake_icon from "../imageData/cake_icon.jpg";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { ApiContext } from "../../context/ApiContext";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { setInput, handleSearchInput } = useContext(ProductContext);
  const {
    productState: { cart, wishlist },
  } = useContext(ApiContext);
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <nav>
      <div className="s1">
        <div className="image">
          <Link to="/">
            <img src={cake_icon} alt="cakeicon" className="cake logo" />
          </Link>
          <Link to="/" className="title">
            <h1 className="website_name">Bakin GO</h1>{" "}
          </Link>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item nav-active" : "nav-item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-item nav-active" : "nav-item"
          }
        >
          Buy Now
        </NavLink>
        <div className="right">
          <div className="searchbar">
            <input
              type="search"
              placeholder="Search for items"
              className="search"
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSearchInput}>
              <FontAwesomeIcon icon={faMagnifyingGlass} fade />
            </button>
          </div>
          {/* <div className="right-corner"> */}
          <div className="wishlist">
            {wishlist.length > 0 && (
              <span className="wishlist-quantity">{wishlist.length}</span>
            )}
            <FontAwesomeIcon
              icon={faHeart}
              className="fontawsme"
              size="2xl"
              onClick={() => navigate("/wishlist")}
            />
          </div>
          <div className="cart">
            {cart.length > 0 && (
              <span className="cart-quantity">{cart.length}</span>
            )}
            <FontAwesomeIcon
              icon={faCartShopping}
              fade
              className="fontawsme"
              size="2xl"
              onClick={() => navigate("/cart")}
            />
          </div>
          <div className="user">
            <FontAwesomeIcon
              icon={faUser}
              className="fontawsme"
              size="2xl"
              onClick={() => navigate("/profile/details")}
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
}

export default Header;
