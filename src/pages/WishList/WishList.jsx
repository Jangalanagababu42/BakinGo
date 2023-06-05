import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import WishlistItem from "./WishListItem";

function WishList() {
  const { productState } = useContext(ApiContext);

  return (
    <main className="wishlist-cards-container flex-column-center  middle-content">
      {productState.wishlist.length > 0 && (
        <div className="heading4 text-center">MY WISHLIST</div>
      )}
      <WishlistItem />
    </main>
  );
}

export default WishList;
