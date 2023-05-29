import {
  faCalendarCheck,
  faCheck,
  faCircleCheck,
  faIndianRupeeSign,
  faStar,
  faTag,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./ProductDetails.css";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../context/ApiContext";

function ProductDetails() {
  const { renderedProducts } = useContext(ProductContext);
  const { addProductsToCart, addProductsToWishlist } = useContext(ApiContext);
  console.log(renderedProducts);
  const { productId } = useParams();
  console.log(productId, "pid");
  const item = renderedProducts
    ? renderedProducts.find(
        (product) => Number(product.id) === Number(productId)
      )
    : "";
  console.log(item, "item");
  return (
    <div className="middle-content">
      <div className="flex-row-center">
        <div className="product-display">
          <div className="product-img-container">
            {/* <span className="card-badge card-badge-product">Trending</span> */}
            <img src={item.imageUrl} className="product-img" alt="aimage" />
          </div>
          <div className="product-details">
            <div className="product-heaader padding-bottom-5 border-bottom">
              <div className="product-title">{item.title}</div>
              <div className="rating-box margin-2">
                {item.rating}{" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /> |
                {item.totalRatings} reviews
              </div>
            </div>
            <div className="product-price">
              <div className="price-header">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                <span>{item.price}</span>
                <span className="strikethrough card-title">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  780
                </span>
                <span className="card-title offer">
                  {item.offerPercentage}% OFF
                </span>
              </div>
              <div className="color-success">Inclusive of all taxes</div>
            </div>
            <div className="product-buttons">
              <button
                className="btn btn-primary product-btn"
                onClick={() => {
                  addProductsToCart(item);
                }}
              >
                ADD TO CART
              </button>
              <button
                className="btn product-btn btn-outline-default"
                onClick={() => {
                  addProductsToWishlist(item);
                }}
              >
                WISHLIST
              </button>
            </div>
            <div className="additional-details padding-bottom-5 border-bottom">
              <div className="margin-2">
                <FontAwesomeIcon icon={faTruckFast} />
                <span className="margin-sides-2">Order one day prior</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarCheck} />
                <span className="margin-sides-2">In stock</span>
              </div>
              <div className="margin-2">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span className="margin-sides-2">Price Includes GST</span>
              </div>
            </div>
            <div className="product-offers">
              <span className="margin-2">
                BEST OFFERS
                <FontAwesomeIcon icon={faTag} />
              </span>
              <span className="d-block">
                The product is already at the best price
              </span>
            </div>
            <div className="additional-details">
              ITEM DETAILS
              <div className="margin-2">
                <FontAwesomeIcon icon={faCheck} style={{ color: "#217510" }} />
                <span>Can be customised</span>
              </div>
              <div className="margin-2">
                <FontAwesomeIcon icon={faCheck} style={{ color: "#217510" }} />
                <span>Weighs 1/2kg</span>
              </div>
              <div className="margin-2">
                <FontAwesomeIcon icon={faCheck} style={{ color: "#217510" }} />
                <span>Eggless Cake</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
