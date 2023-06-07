import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ApiContext } from "../../context/ApiContext";
import CartPriceTable from "./CartPriceTable";
import AddressForm from "../Profile/Address/AddressForm/AddressForm";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";
function Checkout() {
  const {
    productState: { addressList, cart },
    productDispatch,
    deleteProductsFromCart,
  } = useContext(ApiContext);
  const { getTotalPrice } = useContext(ProductContext);
  const [addAddress, setAddAddress] = useState(false);
  const [address, setAddress] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const clearTotalCart = (e) => {
    // let errr=null;
    cart.forEach((item) => {
      //   clearTotalCart(item, authState?.token);
      deleteProductsFromCart(e, item._id, setDisable);
    });
  };

  const placeOrderHandler = (e) => {
    e.preventDefault();
    if (address) {
      setOrderPlaced(true);
      clearTotalCart(e);
      toast.success("Order Placed");
      setFinalPrice(getTotalPrice(cart));
    } else {
      toast.info("Please Select Address");
    }
  };

  useEffect(() => {
    let id = null;
    if (orderPlaced) {
      productDispatch({
        type: "ADD_ORDER_DETAILS",
        payload: {
          order: {
            id: `rzr_puy_${uuid()}`,
            cart: cart,
            address: address,
            amount: finalPrice,
            date: new Date(),
          },
        },
      });
      id = setTimeout(() => {
        navigate("/profile/orders");
      }, 3000);
    }
  }, [orderPlaced]);

  return (
    <>
      {!orderPlaced ? (
        <div className="cart-container flex-row-wrap middle-content">
          <div className="gray-text flex-column-start">
            {addressList.length === 0 && (
              <div className="padding-10 margin-10">
                <button
                  className="add-address-btn padding-10 margin-10"
                  to="/checkout"
                  onClick={() => setAddAddress(true)}
                >
                  + ADD ADDRESS
                </button>
              </div>
            )}
            {/* {showaddressModal && <addAdressModal/> } */}
            {addAddress && (
              <AddressForm
                openAddressForm={addAddress}
                setOpenAddressForm={setAddAddress}
              />
            )}
            {addressList.length > 0 && (
              <h4 className="margin-10">SELECT ADDRESS</h4>
            )}
            {addressList.length > 0 &&
              addressList.map((address) => (
                <div className="border-card" key={address.id}>
                  <input
                    type="radio"
                    id={address.id}
                    value={address.id}
                    className="cursor-pointer"
                    name="delivery-address"
                    onChange={() => setAddress(address)}
                  />
                  <label htmlFor={address._id}>
                    <div className="padding-left-5 cursor-pointer">
                      <p>{address.name}</p>
                      <p>{address.city}</p>
                      <p>{address.state}</p>
                      <p>mobile:{address.mobile}</p>
                    </div>
                  </label>
                </div>
              ))}
            {addressList.length > 0 && (
              <button
                className="add-address-btn "
                to="/checkout"
                onClick={() => setAddAddress(true)}
              >
                + ADD ADDRESS
              </button>
            )}
          </div>
          <div className="flex-column-start">
            <div className="cart-price gray-text">
              <h5 className="heading5">ITEMS PURCHASED</h5>
              <div className="price-row">
                <div className="display-left-large">ITEM</div>
                <div className="display-right">PRICE</div>
              </div>
              {cart.reverse().map((cartItem) => (
                <div key={cartItem._id}>
                  <div className="price-row" key={cartItem._id}>
                    <div className="display-left-large">
                      {cartItem.title}
                      <div>{`${cartItem.qty}X ${cartItem.price}`}</div>
                    </div>
                    <div className="display-right">
                      {cartItem.qty * Number(cartItem.price)}
                    </div>
                  </div>
                  {cartItem !== cart[0] && <hr className="section-line" />}
                </div>
              ))}
            </div>
            <CartPriceTable />

            {/* <div className="cart-price">
          <h5 className="heading5 gray-text">DELIVER TO</h5>
          <div className="gray-text">
            <p>{deliveryAddress?.name}</p>
            <p>{deliveryAddress?.street}</p>
            <p>
              {deliveryAddress?.city}-{deliveryAddress?.pincode}
            </p>
            <p>{deliveryAddress?.state}</p>
            <p>{deliveryAddress?.mobile}</p>
          </div>
        </div> */}
            <button
              className={`btn btn-primary order-button `}
              to="/checkout"
              onClick={placeOrderHandler}
              //   disabled={disable}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-container flex-row-wrap middle-content">
          <h4>Order Placed</h4>
        </div>
      )}
    </>
  );
}

export default Checkout;
