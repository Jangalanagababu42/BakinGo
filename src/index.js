import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import ProductProvider, { ProductContext } from "./context/ProductContext";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import ApiProvider, { ApiContext } from "./context/ApiContext";
export { ProductContext };
export { AuthContext };
export { ApiContext };

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ApiProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </ApiProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
