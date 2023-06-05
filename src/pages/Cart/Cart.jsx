import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import CartItem from "./CartItem";
import CartPriceTable from "./CartPriceTable";

function Cart() {
  const {
    productState: { cart },
  } = useContext(ApiContext);

  return (
    <main className="cart-container flex-column-center middle-content">
      {cart.length > 0 && <h4 className="heading4">MY CART</h4>}
      <div className="cart-items-and-price flex-row-center">
        <CartItem />
        {cart.length > 0 && <CartPriceTable />}
      </div>
    </main>
  );
}

export default Cart;
