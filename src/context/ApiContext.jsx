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
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const ApiContext = createContext("");

export default function ApiProvider({ children }) {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const initialProductState = {
    cart: [],
    wishlist: [],
    addressList: [
      {
        address: "house no:10/42, dammapeta",
        alternatemobile: 4321321321,
        city: "Bhadradri Kothagudem",
        id: "23cdd-23e234ed-234edfr",
        mobile: 1231231234,
        name: "John Wick",
        pincode: "412231",
        state: "Telangana",
      },
    ],
    orderList: [],
  };
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

  const addProductsToCart = async (e, product, setDisable) => {
    e.preventDefault();
    setDisable(true);
    console.log(product, "product");
    try {
      if (!authState?.token) {
        navigate("/login");
        toast.info("Please Login");
      } else {
        const response = await addProductsInCartService(
          authState?.token,
          product
        );
        toast.info("Added to Cart");
        console.log(response, "response");
        productDispatch({
          type: "CART_OPERATION",
          payload: response.data.cart,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const toggleWishlist = async (e, product, setDisable) => {
    e.preventDefault();
    setDisable(true);
    try {
      if (!authState?.token) navigate("/login");
      else {
        // const response = isWishlisted(product)
        //   ? await deleteProductsFromWishlist(product._id)
        //   : await addProductsToWishlist(product);
        const response = isWishlisted(product)
          ? await deleteProductFromWishlistService(
              authState?.token,
              product._id
            )
          : await addProductsInWishlistService(authState?.token, product);

        productDispatch({
          type: "WISHLIST_OPERATION",
          payload: response.data.wishlist,
        });
      }
    } catch (e) {
    } finally {
      setDisable(false);
    }
  };
  const addProductsToWishlist = async (e, product, setDisable) => {
    e.preventDefault();
    setDisable(true);
    console.log(product, "product");
    try {
      if (!authState?.token) {
        navigate("/login");
        toast.info("Please Login ");
      } else {
        const response = await addProductsInWishlistService(
          authState?.token,
          product
        );
        console.log(response, "response");
        toast.success("Added To Wishlist");
        productDispatch({
          type: "WISHLIST_OPERATION",
          payload: response.data.wishlist,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductsFromCart = async (e, productId, setDisable) => {
    e.preventDefault();
    setDisable(true);
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
      toast.success("Removed From Cart");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProductsFromWishlist = async (e, productId, setDisable) => {
    e.preventDefault();
    setDisable(true);
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
      toast.success("Removed From Wishlist");
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductQuantityInCart = async (e, type, product, setDisable) => {
    e.preventDefault();
    setDisable(true);
    console.log(type);
    try {
      let response;
      if (type === "increment") {
        response = await updateProductQuantityInCartService(
          authState?.token,
          type,
          product._id
        );
        toast.info("Product quantity Increased");
      } else {
        if (product.qty === 1) {
          response = await deleteProductFromCartService(
            authState?.token,
            product._id
          );
          toast.info("Removed From Cart");
        } else {
          response = await updateProductQuantityInCartService(
            authState?.token,
            type,
            product._id
          );
          toast.success("Product quantity Decreased");
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

  const isinCart = (product) => {
    console.log(product, "productincart");
    let filteredProduct =
      productState.cart.length > 0 &&
      productState.cart.filter(
        (cartProduct) => cartProduct._id === product._id
      );
    if (filteredProduct.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  const isWishlisted = (product) => {
    let filteredProduct =
      productState.wishlist.length > 0 &&
      productState.wishlist.filter(
        (wishlistProduct) => wishlistProduct._id === product._id
      );
    if (filteredProduct.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <ApiContext.Provider
      value={{
        addProductsToCart,
        productState,
        productDispatch,
        deleteProductsFromCart,
        updateProductQuantityInCart,
        addProductsToWishlist,
        deleteProductsFromWishlist,
        isinCart,
        isWishlisted,
        toggleWishlist,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
