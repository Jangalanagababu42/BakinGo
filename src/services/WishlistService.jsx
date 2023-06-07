import axios from "axios";
import { toast } from "react-toastify";
export const getWishlistProductsService = (token) => {
  return axios.get(`/api/user/wishlist`, {
    headers: {
      authorization: ` ${token}`,
    },
  });
};

export const addProductsInWishlistService = (token, product) => {
  console.log(token, "token");
  toast.info("Added To Wishlist ");
  return axios.post(
    `/api/user/wishlist`,
    { product },
    {
      headers: {
        authorization: ` ${token}`,
      },

      // body: JSON.stringify({ product: product }),
    }
  );
};
export const deleteProductFromWishlistService = (token, productId) => {
  toast.info("Removed From Wishlist ");
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: ` ${token}`,
    },
  });
};
