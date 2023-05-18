import React, { useState } from "react";
import cake_icon from "../imageData/cake_icon.jpg";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [wishlistQuantity, setWishQuantity] = useState(0);
  return (
    <nav>
      <div className="s1">
        <div className="image">
          <img src={cake_icon} alt="cakeicon" className="cake logo" />
          <h1 className="website_name">Bakin GO</h1>
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Buy Now</NavLink>
        <div className="right">
          <div className="searchbar">
            <input
              type="search"
              placeholder="Search for items"
              className="search"
            />

            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} fade />
            </button>
          </div>
          {/* <div className="right-corner"> */}
          <div className="cart">
            <span className="cart-quantity">{cartQuantity}</span>
            <FontAwesomeIcon icon={faCartShopping} fade className="fontawsme" />
          </div>
          <div className="wishlist">
            <span className="wishlist-quantity">{wishlistQuantity}</span>
            <FontAwesomeIcon icon={faHeart} className="fontawsme" />
          </div>
          <div className="user">
            <FontAwesomeIcon icon={faUser} className="fontawsme" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
}

export default Header;
