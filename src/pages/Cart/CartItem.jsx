import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
function CartItem() {
  const {
    productState: { cart },
    deleteProductsFromCart,
    updateProductQuantityInCart,
    addProductsToWishlist,
    isWishlisted,
  } = useContext(ApiContext);

  const navigate = useNavigate();
  const { getOriginalPrice } = useContext(ProductContext);

  console.log(cart, "cart");
  return (
    <div>
      {cart.reverse().map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="no-link-decoration"
        >
          <div className="cart-items flex-column-center" key={product.id}>
            <div className="cart-horizontal-wide">
              <div className="cart-img-and-content">
                <div className="cart-img-container">
                  <img
                    src={product.imageUrl}
                    alt="cake"
                    className="cart-img-horizontal"
                    loading="lazy"
                  />
                </div>
                <div className="cart-content">
                  <div className="card-header">{product.title}</div>
                  <div className="card-title">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                    {product.qty * product.price}
                    {product.offerPercentage > 0 && (
                      <>
                        <span className="strikethrough card-title">
                          <FontAwesomeIcon icon={faIndianRupeeSign} />
                          {product.qty *
                            getOriginalPrice(
                              product.price,
                              product.offerPercentage
                            )}
                        </span>
                        <span className="card-title offer">
                          {product.offerPercentage}% OFF
                        </span>
                      </>
                    )}
                  </div>
                  <div className="cart-quantity-buttons">
                    <button
                      className="button-decrease"
                      onClick={() => {
                        updateProductQuantityInCart("decrement", product);
                      }}
                    >
                      -
                    </button>
                    <span className="quantity-display">{product.qty}</span>

                    <button
                      className="button-increase"
                      onClick={() => {
                        updateProductQuantityInCart("increment", product);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="cart-buttons">
                <button
                  className="btn btn-link btn-link-default cart-button"
                  onClick={() => {
                    deleteProductsFromCart(product._id);
                  }}
                >
                  REMOVE
                </button>

                {!isWishlisted(product) ? (
                  <button
                    className="btn btn-link btn-link-primary cart-button"
                    onClick={() => {
                      addProductsToWishlist(product);
                    }}
                  >
                    ADD TO WISHLIST
                  </button>
                ) : (
                  <button className="btn btn-link btn-link-primary cart-button">
                    WISHLISTED
                  </button>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
      {cart.length === 0 && (
        <div className="cart-empty-container gray-text flex-column-center">
          <h2>Your cart is empty</h2>
          <p className="text-center">
            There is nothing in the cart. Lets add some mouth watering items
            from the wishlist.
          </p>
          <div>
            <FontAwesomeIcon
              icon={"cart-shopping"}
              size="7x"
              className="empty-cart-icon"
            ></FontAwesomeIcon>
          </div>
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/wishlist")}
          >
            ADD FROM WISHLIST
          </button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
