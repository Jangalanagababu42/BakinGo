import React from "react";
import "./ErrorPage.css";
import logo from "../../components/imageData/404-page-animation-example.gif";
function ErrorPage() {
  return (
    <div class="page">
      <div class="page__info">
        <h1 class="page__title">
          <img src={logo} alt="logo" loading="lazy" />

          <span class="page__mistake-text">PAGE / WEBSITE NOT FOUND !!</span>
        </h1>
      </div>
    </div>
  );
}

export default ErrorPage;
