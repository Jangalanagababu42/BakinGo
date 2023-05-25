export const reducer = (accState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "SEARCHINPUT":
      return { ...accState, searchInput: action.payload };
    case "SORTBYPRICE":
      return { ...accState, priceSortBy: action.payload };
    case "SORTBYRATING":
      return { ...accState, ratingSortBy: action.payload };
    case "PRICERANGE":
      const updatedpriceRangeCheckbox = accState.priceRangeCheckbox.includes(
        action.payload
      )
        ? accState.priceRangeCheckbox.filter((ele) => ele !== action.payload)
        : [...accState.priceRangeCheckbox, action.payload];
      return { ...accState, priceRangeCheckbox: updatedpriceRangeCheckbox };

    case "ITEMTYPE":
      const updateditemTypeCheckbox = accState.itemTypeCheckbox.includes(
        action.payload
      )
        ? accState.itemTypeCheckbox.filter((ele) => ele !== action.payload)
        : [...accState.itemTypeCheckbox, action.payload];
      return {
        ...accState,
        itemTypeCheckbox: updateditemTypeCheckbox,
      };
    case "FLAVORTYPE":
      const updatedFlavorTypeCheckbox = accState.FlavourTypeCheckbox.includes(
        action.payload
      )
        ? accState.FlavourTypeCheckbox.filter((ele) => ele !== action.payload)
        : [...accState.FlavourTypeCheckbox, action.payload];
      return {
        ...accState,
        FlavourTypeCheckbox: updatedFlavorTypeCheckbox,
      };

    case "INSTOCK":
      const whatToFilter =
        action.payload === "outofstock" ? "inclOutOfStock" : "";
      return { ...accState, [whatToFilter]: !accState[whatToFilter] };

    // console.log(accState.inclOutOfStock, "ou");
    // return { ...accState, inclOutOfStock: action.payload };

    case "CLEAR":
      return {
        ...accState,
        inclOutOfStock: false,
        priceSortBy: "",
        ratingSortBy: "",
        searchInput: "",
        priceRangeCheckbox: [],
        itemTypeCheckbox: [],
        FlavourTypeCheckbox: [],
      };
    default:
      return accState;
  }
};
