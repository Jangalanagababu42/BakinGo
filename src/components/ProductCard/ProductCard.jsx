import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faIndianRupeeSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../context/ProductContext";
import { ApiContext } from "../../context/ApiContext";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

function ProductCard() {
  const { filterProductsByStocks, getOriginalPrice } =
    useContext(ProductContext);
  const { authState } = useContext(AuthContext);
  const {
    addProductsToCart,
    addProductsToWishlist,
    isinCart,
    isWishlisted,
    toggleWishlist,
  } = useContext(ApiContext);
  const [wishlistLoader, setWishlistLoader] = useState(false);
  const [cartLoader, setCartLoader] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="product-cards">
      {filterProductsByStocks.map((product) => (
        <div className="card-default-product">
          <Link
            to={`/product/${product.id}`}
            className="no-link-decoration"
            onClick={(e) => {
              if (wishlistLoader || cartLoader) e.preventDefault();
            }}
          >
            <div className="card-img-icon-container">
              <div className="card-img-container">
                <img
                  src={product.imageUrl}
                  alt="cake"
                  className="card-img"
                  loading="lazy"
                />
              </div>
              {product.isBestSeller && (
                <span className="card-badge">Trending</span>
              )}
              <FontAwesomeIcon
                icon={faHeart}
                className={`svg-inline--fa fa-heart card-icon ${
                  isWishlisted(product)
                    ? "filled-wishlist-icon"
                    : "wishlist-icon"
                } `}
                size="2xl"
                onClick={(e) => toggleWishlist(e, product, setWishlistLoader)}
              />
            </div>
            <div className="card-header">{product.title}</div>
            <div className="card-title">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {product.price}
              <span className="strikethrough card-title">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                {getOriginalPrice(product.price, product.offerPercentage)}
              </span>
              <span className="card-title offer">
                {product.offerPercentage}%OFF
              </span>
            </div>
            <div className="card-content">
              <span>{product.rating}</span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />{" "}
              </span>
              <span>{product.totalRatings}|reviews</span>
            </div>
          </Link>
          <div className="card-buttons product-card-buttons">
            {product.isOutOfStock ? (
              <button
                className="btn btn-outline-primary card-button"
                style={{ border: "2px solid" }}
                disabled={true}
              >
                OUT OF STOCK
              </button>
            ) : !isinCart(product) ? (
              <button
                className="btn btn-outline-primary card-button"
                style={{ border: "2px solid" }}
                onClick={(e) => {
                  addProductsToCart(e, product, setCartLoader);
                }}
              >
                Add To Cart
              </button>
            ) : (
              <button
                className="btn cart-button-product card-button"
                style={{ border: "2px solid" }}
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Go To Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
