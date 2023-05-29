import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

function Cart() {
  const {
    productState: { cart },
    deleteProductsFromCart,
    updateProductQuantityInCart,
  } = useContext(ApiContext);
  console.log(cart, "cart");
  return (
    <div>
      {cart.map((product) => (
        <div>
          <div className="card-img-container">
            <img
              src={product.imageUrl}
              alt="cake"
              className="card-img"
              loading="lazy"
              style={{ height: "200px", width: "200px" }}
            />
            <div className="card-header">{product.title}</div>
          </div>
          <button
            style={{ margin: "10px" }}
            onClick={() => {
              deleteProductsFromCart(product._id);
            }}
          >
            Delete
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => {
              updateProductQuantityInCart("increment", product);
            }}
          >
            +
          </button>
          <span>{product.qty}</span>
          <button
            style={{ margin: "10px" }}
            onClick={() => {
              updateProductQuantityInCart("decrement", product);
            }}
          >
            -
          </button>
          <button style={{ margin: "10px" }}>Move to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
