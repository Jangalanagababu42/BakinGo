export const productReducer = (productState, action) => {
  switch (action.type) {
    case "CART_OPERATION":
      return { ...productState, cart: action.payload };

    case "WISHLIST_OPERATION":
      return { ...productState, wishlist: action.payload };
    default:
      return productState;
  }
};
