import React from "react";
import "./ProductList.css";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
function ProductsList() {
  return (
    <div className="middle-content">
      <Filter />
      <ProductCard />
    </div>
  );
}

export default ProductsList;
