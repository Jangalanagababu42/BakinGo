import React, { useContext } from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faStar } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../context/ProductContext";
function Filter() {
  const {
    handleSortByPrice,
    handleSortByRating,
    handlePriceRange,
    handleItemType,
    handleFlavorType,
    handleByStock,
    handleByCLEAR,
    state,
  } = useContext(ProductContext);
  return (
    <section className="filters">
      <form>
        <div className="filter-header">
          <span>FILTERS</span>
          <button
            className="btn-no-decoration"
            onClick={() => {
              handleByCLEAR();
            }}
            type="reset"
          >
            CLEAR
          </button>
        </div>
        <hr />
        <div className="sort-price">
          <span className="filter-heading">PRICE</span>
          <div>
            <input
              type="radio"
              name="price"
              id="LTH"
              value="LTH"
              className="small-text"
              onChange={(e) => {
                handleSortByPrice(e);
              }}
            />
            <label htmlFor="LTH">Price Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              id="HTL"
              value="HTL"
              className="small-text"
              onChange={(e) => {
                handleSortByPrice(e);
              }}
            />
            <label htmlFor="HTL">Price High to Low</label>
          </div>
        </div>
        <hr />
        <div className="filter-rating">
          <span className="filter-heading">RATING</span>
          <div>
            <input
              type="radio"
              name="rating"
              id="4andabove"
              value="4andabove"
              className="small-text"
              onChange={(e) => {
                handleSortByRating(e);
              }}
            />
            <label htmlFor="4andabove">
              4 <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /> and
              above
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              id="3andabove"
              className="small-text"
              value="3andabove"
              onChange={(e) => {
                handleSortByRating(e);
              }}
            />
            <label htmlFor="3andabove">
              3 <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /> and
              above
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              id="2andabove"
              className="small-text"
              value="2andabove"
              onChange={(e) => {
                handleSortByRating(e);
              }}
            />
            <label htmlFor="2andabove">
              2{""} <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />{" "}
              and above
            </label>
          </div>
        </div>
        <hr />
        <div className="filter-price">
          <span className="filter-heading">PRICE RANGE</span>
          <div>
            <input
              type="checkbox"
              name="priceCategory"
              id="under500"
              value="under500"
              // checked={state.priceRangeCheckbox === "under500"}
              className="small-text"
              onClick={(e) => {
                handlePriceRange(e);
              }}
            />
            <label htmlFor="under500">
              {" "}
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              Under 500{" "}
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="priceCategory"
              id="price500to1000"
              value="price500to1000"
              // checked={state.priceRangeCheckbox === "price500to1000"}
              className="small-text"
              onClick={(e) => {
                handlePriceRange(e);
              }}
            />
            <label htmlFor="price500to1000">
              {" "}
              <FontAwesomeIcon icon={faIndianRupeeSign} /> 500-1000
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="priceCategory"
              id="price1000to1500"
              value="price1000to1500"
              // checked={state.priceRangeCheckbox === "price1000to1500"}
              className="small-text"
              onClick={(e) => {
                handlePriceRange(e);
              }}
            />
            <label htmlFor="price1000to1500">
              {" "}
              <FontAwesomeIcon icon={faIndianRupeeSign} /> 1000-1500
            </label>
          </div>
        </div>
        <hr />
        <div className="filter-items">
          <span className="filter-heading">ITEMS</span>
          <div>
            <input
              type="checkbox"
              name="item"
              id="cakes"
              value="cakes"
              className="small-text"
              onClick={(e) => {
                handleItemType(e);
              }}
            />
            <label htmlFor="cakes"> Cakes </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="item"
              id="chocolates"
              value="chocolates"
              className="small-text"
              onClick={(e) => {
                handleItemType(e);
              }}
            />
            <label htmlFor="Chocolates"> Chocolates </label>
          </div>
        </div>
        <hr />
        <div className="filter-flavors">
          <span className="filter-heading">FLAVORS</span>
          <div>
            <input
              type="checkbox"
              name="flavor"
              id="Black Forest"
              value="Black Forest"
              className="small-text"
              onClick={(e) => {
                handleFlavorType(e);
              }}
            />
            <label htmlFor="Black Forest"> Black Forest </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="flavour"
              id="Butterscotch"
              className="small-text"
              value="Butterscotch"
              onClick={(e) => {
                handleFlavorType(e);
              }}
            />
            <label htmlFor="Butterscotch"> Butterscotch </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="flavour"
              id="Red Velvet"
              className="small-text"
              value="Red Velvet"
              onClick={(e) => {
                handleFlavorType(e);
              }}
            />
            <label htmlFor="Red Velvet"> Red Velvet </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="flavour"
              id="pineapple"
              className="small-text"
              value="pineapple"
              onClick={(e) => {
                handleFlavorType(e);
              }}
            />
            <label htmlFor="pineapple"> Pineapple </label>
          </div>
          <div>
            <input
              type="checkbox"
              name="flavour"
              id="Strawberry"
              className="small-text"
              value="Strawberry"
              onClick={(e) => {
                handleFlavorType(e);
              }}
            />
            <label htmlFor="Strawberry"> Strawberry </label>
          </div>
        </div>
        <hr />
        <div className="filter-stocks">
          <span className="filter-heading">OTHER</span>
          <div>
            <input
              type="checkbox"
              name="other"
              id="outofstock"
              className="small-text"
              value="outofstock"
              onClick={(e) => {
                handleByStock(e);
              }}
            />
            <label htmlFor="outofstock">Out of Stock</label>
          </div>
        </div>
        <hr />
      </form>
    </section>
  );
}

export default Filter;
