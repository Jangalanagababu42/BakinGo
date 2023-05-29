import axios from "axios";

export const getWishlistProductsService = (token) => {
  return axios.get(`/api/user/wishlist`, {
    headers: {
      authorization: ` ${token}`,
    },
  });
};

export const addProductsInWishlistService = (token, product) => {
  console.log(token, "token");
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
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: ` ${token}`,
    },
  });
};
