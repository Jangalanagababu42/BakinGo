import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./WishList.css";
import { ProductContext } from "../../context/ProductContext";
function WishlistItem() {
  const {
    productState: { wishlist },
    productDispatch,
    deleteProductsFromWishlist,
    addProductsToCart,
    isinCart,
  } = useContext(ApiContext);
  const { getOriginalPrice } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-row-center">
        {wishlist.reverse().map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="no-link-decoration"
          >
            <div className="card card-default wishlist-card" key={product.id}>
              <div className="card-img-container wishlist-img-container">
                <img
                  src={product.imageUrl}
                  alt="cake"
                  className="card-img"
                  loading="lazy"
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="wishlist-close-btn gray-text"
                  onClick={() => {
                    deleteProductsFromWishlist(product._id);
                  }}
                ></FontAwesomeIcon>
              </div>
              <div className="card-header">{product.title}</div>
              <div className="card-title">
                ₹ {product.price}
                {product.offerPercentage > 0 && (
                  <>
                    <span className="strikethrough card-title">
                      {getOriginalPrice(product.price, product.offerPercentage)}
                    </span>
                    <span className="card-title offer">
                      ({product.offerPercentage}% OFF){" "}
                    </span>
                  </>
                )}
              </div>
              <div className="wishlist-card-buttons">
                {!product.isOutOfStock ? (
                  !isinCart(product) ? (
                    <button
                      className="btn btn-outline-primary wishlist-card-button card-button"
                      onClick={() => {
                        addProductsToCart(product);
                      }}
                      // disabled={disable}
                    >
                      ADD TO CART
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
                  )
                ) : (
                  <button
                    className="btn btn-outline-primary wishlist-card-button"
                    disabled
                  >
                    OUT OF STOCK
                  </button>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {wishlist.length === 0 && (
        <div className="wishlist-empty-container flex-column-center">
          <h4 className="gray-text">YOUR WISHLIST IS EMPTY</h4>
          <p className="text-center gray-text">
            Add delicious items that you like to your wishlist. Review them
            anytime and easily move them to the cart.
          </p>
          <div>
            <img
              src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1647243013/ecommerce/wishlistempty.webp"
              alt="cake and muffins"
            />
          </div>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              productDispatch({ type: "CLEAR_FILTERS" });
              navigate("/products");
            }}
          >
            ADD ITEMS
          </button>
        </div>
      )}
    </div>
  );
}

export default WishlistItem;
