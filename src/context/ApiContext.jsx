import { createContext, useContext, useEffect, useReducer } from "react";

import { productReducer } from "../reducers/productReducer";
import { AuthContext } from "./AuthContext";
import {
  addProductsInCartService,
  deleteProductFromCartService,
  getCartProductsService,
  updateProductQuantityInCartService,
} from "../services/CartService";
import {
  addProductsInWishlistService,
  deleteProductFromWishlistService,
  getWishlistProductsService,
} from "../services/WishlistService";

export const ApiContext = createContext("");

export default function ApiProvider({ children }) {
  const { authState } = useContext(AuthContext);
  const initialProductState = { cart: [], wishlist: [] };
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  useEffect(() => {
    const getCartProducts = async () => {
      try {
        const response = await getCartProductsService(authState?.token);
        productDispatch({
          type: "CART_OPERATION",
          payload: response.data.cart,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    const getWishlistProducts = async () => {
      try {
        const response = await getWishlistProductsService(authState?.token);
        productDispatch({
          type: "WISLIST_OPERATION",
          payload: response.data.wishlist,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    authState?.token && getCartProducts();
    authState?.token && getWishlistProducts();
  }, [productDispatch, authState.token]);

  const addProductsToCart = async (product) => {
    console.log(product, "product");
    try {
      const response = await addProductsInCartService(
        authState?.token,
        product
      );
      console.log(response, "response");
      productDispatch({
        type: "CART_OPERATION",
        payload: response.data.cart,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addProductsToWishlist = async (product) => {
    console.log(product, "product");
    try {
      const response = await addProductsInWishlistService(
        authState?.token,
        product
      );
      console.log(response, "response");
      productDispatch({
        type: "WISHLIST_OPERATION",
        payload: response.data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductsFromCart = async (productId) => {
    try {
      const response = await deleteProductFromCartService(
        authState?.token,
        productId
      );
      console.log(response, "response");
      productDispatch({
        type: "CART_OPERATION",
        payload: response.data.cart,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProductsFromWishlist = async (productId) => {
    try {
      const response = await deleteProductFromWishlistService(
        authState?.token,
        productId
      );
      console.log(response, "response");
      productDispatch({
        type: "WISHLIST_OPERATION",
        payload: response.data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductQuantityInCart = async (type, product) => {
    console.log(type);
    try {
      let response;
      if (type === "increment") {
        response = await updateProductQuantityInCartService(
          authState?.token,
          type,
          product._id
        );
      } else {
        if (product.qty === 1) {
          response = await deleteProductFromCartService(
            authState?.token,
            product._id
          );
        } else {
          response = await updateProductQuantityInCartService(
            authState?.token,
            type,
            product._id
          );
        }
      }
      productDispatch({
        type: "CART_OPERATION",
        payload: response.data.cart,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        addProductsToCart,
        productState,
        deleteProductsFromCart,
        updateProductQuantityInCart,
        addProductsToWishlist,
        deleteProductsFromWishlist,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
