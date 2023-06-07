export const productReducer = (productState, action) => {
  switch (action.type) {
    case "CART_OPERATION":
      return { ...productState, cart: action.payload };

    case "WISHLIST_OPERATION":
      return { ...productState, wishlist: action.payload };

    case "ADD_ADDRESS":
      return {
        ...productState,
        addressList: [...productState.addressList, action.payload.address],
      };

    case "EDIT_ADDRESS":
      return {
        ...productState,
        addressList: productState.addressList.map((address) => {
          console.log(address.id, "address.id");
          console.log(action.payload, "action.payload.address.id");
          return address.id === action.payload.address.id
            ? action.payload.address
            : address;
        }),
      };
    case "DELETE_ADDRESS":
      console.log(action.payload);
      return {
        ...productState,
        addressList: productState.addressList.filter(
          (address) => address.id !== action.payload.id
        ),
      };
    case "ADD_ORDER_DETAILS":
      return {
        ...productState,
        orderList: productState.orderList.concat(action.payload.order),
      };
    default:
      return productState;
  }
};
