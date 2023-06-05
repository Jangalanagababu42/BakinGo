import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

function CartPriceTable() {
  const {
    productState: { cart },
  } = useContext(ApiContext);
  const { getOriginalPrice } = useContext(ProductContext);
  const location = useLocation();
  const broadLeftMargin = location.pathname === "/checkout";
  const getTotalPrice = () => {
    let price = cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0);

    return price;
  };
  const getMRP = () =>
    cart.reduce(
      (prev, curr) =>
        prev + curr.qty * getOriginalPrice(curr.price, curr.offerPercentage),
      0
    );

  const getDiscount = () => getMRP() - getTotalPrice();
  return (
    <>
      <div className="cart-price gray-text">
        <div className="cart-price gray-text">
          <h5 className="heading5">PRICE DETAILS:({cart.length} Items)</h5>
          <div className="price-row">
            <div
              className={
                broadLeftMargin ? "display-left-large" : "display-left"
              }
            >
              Total MRP
            </div>
            <div className="display-right">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {getMRP()}
            </div>
          </div>

          <div className="price-row">
            <div
              className={
                broadLeftMargin ? "display-left-large" : "display-left"
              }
            >
              Discount
            </div>

            <div className="display-right">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {getDiscount()}
            </div>
          </div>
          <div className="price-row">
            <div
              className={
                broadLeftMargin ? "display-left-large" : "display-left"
              }
            >
              Delivery Charges
            </div>
            <div className="display-right">
              <span className="strikethrough">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                99
              </span>
              <span className="keyword">FREE</span>
            </div>
          </div>
          <div className="price-row font-bold">
            <div
              className={
                broadLeftMargin ? "display-left-large" : "display-left"
              }
            >
              Total Amount
            </div>
            <div className="display-right">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {getTotalPrice()}
            </div>
          </div>
        </div>
        <Link
          className="btn btn-primary order-button no-link-decoration inline-flex"
          to="/checkout"
        >
          CHECKOUT
        </Link>
      </div>
    </>
  );
}

export default CartPriceTable;
