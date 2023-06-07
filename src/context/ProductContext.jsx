import { createContext, useEffect, useReducer, useState } from "react";
import App from "../App";
import { reducer } from "../reducers/reducer";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [categoriesData, setCategoriesData] = useState([]);
  const [renderedProducts, showRenderedProducts] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await fetch("api/products");
      const { products } = await response.json();
      showRenderedProducts(products);
      const categoriesResponse = await fetch("api/categories");
      const { categories } = await categoriesResponse.json();
      setCategoriesData(categories);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const initialTodos = {
    dataToDisplay: renderedProducts,
    inclOutOfStock: false,
    priceSortBy: "",
    ratingSortBy: "",
    searchInput: "",
    priceRangeCheckbox: [],
    itemTypeCheckbox: [],
    FlavourTypeCheckbox: [],
  };

  const handleSearchInput = () => {
    dispatch({ type: "SEARCHINPUT", payload: input });
    navigate("/products");
  };
  const handleSortByPrice = (e) => {
    dispatch({ type: "SORTBYPRICE", payload: e.target.value });
  };
  const handleSortByRating = (e) => {
    dispatch({ type: "SORTBYRATING", payload: e.target.value });
  };
  const handlePriceRange = (e) => {
    dispatch({ type: "PRICERANGE", payload: e.target.value });
  };
  const handleItemType = (e) => {
    dispatch({ type: "ITEMTYPE", payload: e.target.value });
  };
  const handleFlavorType = (e) => {
    dispatch({ type: "FLAVORTYPE", payload: e.target.value });
  };
  const handleByStock = (e) => {
    dispatch({ type: "INSTOCK", payload: e.target.value });
  };
  const handleByCLEAR = (e) => {
    dispatch({ type: "CLEAR", payload: initialTodos });
  };

  const [state, dispatch] = useReducer(reducer, initialTodos);

  const searchedProducts =
    state.searchInput.length > 0
      ? renderedProducts.filter((product) =>
          product.title.toLowerCase().includes(state.searchInput.toLowerCase())
        )
      : renderedProducts;

  const sortedProductsByPrice =
    state.priceSortBy === ""
      ? searchedProducts
      : state.priceSortBy === "LTH"
      ? [...searchedProducts].sort((a, b) => a.price - b.price)
      : state.priceSortBy === "HTL"
      ? [...searchedProducts].sort((a, b) => b.price - a.price)
      : searchedProducts;

  const filterProductsbyRating =
    state.ratingSortBy === "4andabove"
      ? [...sortedProductsByPrice].filter(({ rating }) => Number(rating) > 4.0)
      : state.ratingSortBy === "3andabove"
      ? [...sortedProductsByPrice].filter(({ rating }) => Number(rating) > 3.0)
      : state.ratingSortBy === "2andabove"
      ? [...sortedProductsByPrice].filter(({ rating }) => Number(rating) > 2.0)
      : sortedProductsByPrice;

  const filterProductsByPricerange =
    state.priceRangeCheckbox.length === 0
      ? filterProductsbyRating
      : filterProductsbyRating.filter((item) => {
          if (
            state.priceRangeCheckbox.includes("under500") &&
            Number(item.price) < 500
          ) {
            return true;
          }
          if (
            state.priceRangeCheckbox.includes("price500to1000") &&
            Number(item.price) > 500 &&
            Number(item.price) < 1000
          ) {
            return true;
          }
          if (
            state.priceRangeCheckbox.includes("price1000to1500") &&
            Number(item.price) > 1000 &&
            Number(item.price) < 1500
          ) {
            return true;
          }
          return false;
        });

  const filterProductsByItemType =
    state.itemTypeCheckbox.length === 0
      ? filterProductsByPricerange
      : filterProductsByPricerange.filter((item) => {
          if (
            state.itemTypeCheckbox.includes("cakes") &&
            item.itemType === "cake"
          ) {
            return true;
          }
          if (
            state.itemTypeCheckbox.includes("chocolates") &&
            item.itemType === "chocolates"
          ) {
            return true;
          }
          return false;
        });

  const filterProductsByFlavorType =
    state.FlavourTypeCheckbox.length === 0
      ? filterProductsByItemType
      : filterProductsByItemType.filter((item) => {
          if (
            state.FlavourTypeCheckbox.includes("Black Forest") &&
            item.categoryName === "Black Forest"
          ) {
            return true;
          }
          if (
            state.FlavourTypeCheckbox.includes("Butterscotch") &&
            item.categoryName === "Butterscotch"
          ) {
            return true;
          }
          if (
            state.FlavourTypeCheckbox.includes("Red Velvet") &&
            item.categoryName === "Red Velvet"
          ) {
            return true;
          }
          if (
            state.FlavourTypeCheckbox.includes("pineapple") &&
            item.categoryName === "Pineapple"
          ) {
            return true;
          }
          if (
            state.FlavourTypeCheckbox.includes("Strawberry") &&
            item.categoryName === "Strawberry"
          ) {
            return true;
          }

          return false;
        });

  const filterProductsByStocks = !state.inclOutOfStock
    ? filterProductsByFlavorType.filter(({ isOutOfStock }) => !isOutOfStock)
    : filterProductsByFlavorType;

  const getOriginalPrice = (price, offerPercentage) =>
    Math.round(Number(price) + (Number(offerPercentage) / 100) * Number(price));
  const getTotalPrice = (cart) => {
    let price = cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0);

    return price;
  };
  return (
    <ProductContext.Provider
      value={{
        renderedProducts,
        state,
        categoriesData,
        dispatch,
        setInput,
        handleSearchInput,
        handleSortByPrice,
        handleSortByRating,
        handlePriceRange,
        handleItemType,
        handleFlavorType,
        handleByStock,
        handleByCLEAR,
        filterProductsByStocks,
        getOriginalPrice,
        getTotalPrice,
      }}
    >
      <App />
    </ProductContext.Provider>
  );
}
