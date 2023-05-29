import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

function Wishlist() {
  const {
    productState: { wishlist },
    deleteProductsFromWishlist,
  } = useContext(ApiContext);

  return (
    <div>
      {wishlist.map((product) => (
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
              deleteProductsFromWishlist(product._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
