import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cake_hero from "../../components/imageData/cake_hero.jpeg";

import "./Home.css";
import { ProductContext } from "../../context/ProductContext";

export default function Home() {
  const [apiData, setData] = useState();
  const { dispatch, renderedProducts, categoriesData } =
    useContext(ProductContext);
  const routeChange = (item) => {
    dispatch({
      type: "CLEAR",
    });
    dispatch({
      type: "FLAVORTYPE",
      payload: item.categoryName,
    });
    navigate("/products");
  };
  const navigate = useNavigate();
  const trendingItems = renderedProducts
    .filter((item) => item.isBestSeller)
    .slice(0, 4);
  console.log(trendingItems, "trend");
  const getApiData = async () => {
    try {
      const response = await fetch("/api/products");
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(apiData, "apidata");

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="middle-content">
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="heading2 keyword">Bakin Go</h2>
            <h4 className="heading4 keyword">
              Every Happy Moment deserves a cake!
            </h4>
            <h4 className="heading4 text-center">
              Hurry!! Upto 15% OFF on most of the products!!
            </h4>
            <button
              className="btn btn-primary hero-btn"
              onClick={() => {
                dispatch({
                  type: "CLEAR",
                });
                navigate("/products");
              }}
            >
              Buy Now
            </button>
          </div>
          <div className="hero-image">
            <img
              src={cake_hero}
              alt="hero-img"
              style={{ height: "300px", width: "300px", borderRadius: "50%" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="container-main">
        <h3 className="align-center heading3">Trending</h3>
        <div className="cards">
          {trendingItems.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="no-link-decoration"
            >
              <div className="card card-default zoom">
                <div className="card-img-container">
                  <img
                    className="card-img"
                    src={product.imageUrl}
                    alt="cake"
                    loading="lazy"
                  />
                </div>
                <div className="card-header">{product.title}</div>
                <div className="card-title">₹ {product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="container-main">
        <h3 className="align-center heading3">Featured Categories</h3>
        <div className="cards">
          {categoriesData?.map((item) => (
            <div
              className="card card-text-overlay zoom"
              key={item._id}
              onClick={() => routeChange(item)}
            >
              <div className="card-img-container">
                <img
                  className="card-img"
                  src={item.imageUrl}
                  alt="cake"
                  loading="lazy"
                />
              </div>
              <div className="card-header-bold">{item.categoryName}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
