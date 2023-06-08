import React, { useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";
import { useNavigate } from "react-router";
import "./Orders.css";
function Orders() {
  const {
    productState: { orderList },
  } = useContext(ApiContext);
  const navigate = useNavigate();

  //   console.log(productState.orderList, "orderdata");
  return (
    <>
      {orderList.length === 0 ? (
        <div className="order-placeholder-container">
          <h3 className="text-align-center">No order to Display</h3>
        </div>
      ) : (
        <div className="order-outer-container">
          <div className="order-container">
            {orderList.reverse().map((order) => {
              return (
                <div key={order.id} className="order-item-container">
                  <div className="order-item-left">
                    <p className="font-wt-semibold">
                      payment Id:{" "}
                      <span className="text-secondary-color">{order.id}</span>
                    </p>
                    <p className="font-wt-semibold">
                      Total amount:{" "}
                      <span className="text-secondary-color">
                        {order.amount}
                      </span>
                    </p>
                    <p className="font-wt-semibold">
                      Order Date:{" "}
                      <span className="text-secondary-color">
                        {order.date.toDateString()}
                      </span>
                    </p>
                    <p className="font-wt-semibold">
                      Order will be delivered in{" "}
                      {order.cart.reduce((acc, curr) => {
                        if (Number(curr.delivery_time) > acc)
                          return curr.delivery_time;
                        return acc;
                      }, 0)}{" "}
                      days
                    </p>
                    <p className="font-wt-semibold">Order Address:</p>
                    <p className="font-wt-semibold text-secondary-color">
                      {order.address.address} {order.address.city}{" "}
                      {order.address.state}{" "}
                    </p>

                    <p className="font-wt-semibold">
                      Mobile:{" "}
                      <span className="text-secondary-color">
                        {order.address.mobile}
                      </span>{" "}
                      pin:{" "}
                      <span className="text-secondary-color">
                        {order.address.pincode}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="order-item-right">
                    {order.cart.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="card-container card-container-hz brd-rd-semi-sq cart-card-conatiner"
                        >
                          <div className="card-container-hz cart-card-conatiner">
                            <img
                              className="card-img brd-rd-semi-sq"
                              src={item.imageUrl}
                              alt="card"
                              onClick={() => navigate(`/product/${item.id}`)}
                              loading="lazy"
                            />
                          </div>
                          <div className="card-content">
                            <div className="cart_mngmt-card-item">
                              <h4
                                className="cursor-pointer"
                                onClick={() => navigate(`/product/${item.id}`)}
                              >
                                {item.title}
                              </h4>
                            </div>
                            <div className="cart_mngmt-card-item">
                              <p className="font-wt-semibold">{item.price}</p>
                              <p className="text-secondary-color font-wt-bold">
                                original price
                              </p>
                            </div>
                            <div className="cart_mngmt-card-item">
                              <div className=" text-secondary-color font-wt-bold">
                                {item.offerPercentage}%OFF
                              </div>
                            </div>
                            <div className="cart_mngmt-card-item">
                              <p>Quantity:{item.qty}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Orders;
