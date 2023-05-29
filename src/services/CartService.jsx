import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const getCartProductsService = (token) => {
  return axios.get(`/api/user/cart`, {
    headers: {
      authorization: ` ${token}`,
    },
  });
};

export const addProductsInCartService = (token, product) => {
  console.log(token, "token");
  return axios.post(
    `/api/user/cart`,
    { product },
    {
      headers: {
        authorization: ` ${token}`,
      },

      // body: JSON.stringify({ product: product }),
    }
  );
};
export const deleteProductFromCartService = (token, productId) => {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: ` ${token}`,
    },
  });
};

export const updateProductQuantityInCartService = (token, type, productId) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: type,
      },
    },
    {
      headers: {
        authorization: ` ${token}`,
      },
    }
  );
};
