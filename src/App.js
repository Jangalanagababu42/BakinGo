import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import MockAPI from "./components/Mockman";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart.jsx";
import WishList from "./pages/WishList/WishListItem";
import ProductsList from "./pages/Product/ProductsList";
import Login from "./pages/Login/Login";

import Signup from "./pages/Signup/Signup";
import ProductDetails from "./pages/ProductDetail/ProductDetails";
import { RequiredAuth } from "./components/requiredAuth";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Profile/Details/Details.jsx";
import Address from "./pages/Profile/Address/Address.jsx";
import Checkout from "./pages/Cart/Checkout";

function App() {
  return (
    <div className="App pagewrapper ">
      <Header />
      <ToastContainer position="bottom-right" autoClose={800} draggable />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockAPI />} />
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              {" "}
              <Cart />
            </RequiredAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiredAuth>
              <WishList />
            </RequiredAuth>
          }
        />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/profile"
          element={
            <RequiredAuth>
              {" "}
              <Profile />
            </RequiredAuth>
          }
        >
          <Route path="details" element={<Details />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
