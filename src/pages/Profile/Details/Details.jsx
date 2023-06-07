import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./Details.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ApiContext } from "../../../context/ApiContext";
function Details() {
  const { authState, authDispatch } = useContext(AuthContext);
  const { token, user } = authState;
  const { productDispatch } = useContext(ApiContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    authDispatch({ type: "TOKEN", payload: null });
    authDispatch({ type: "USER", payload: null });
    localStorage.removeItem("loginItems");
    navigate("/login");
    toast.info("LoggedOut ");
    productDispatch({
      type: "CART_OPERATION",
      payload: { cart: [] },
    });
    productDispatch({
      type: "CART_OPERATION",
      payload: { cart: [] },
    });
    productDispatch({
      type: "WISHLIST_OPERATION",
      payload: { wishlist: [] },
    });
  };
  return (
    <div className="profile-details-container">
      <div className="profile-details-item">
        <p className="profile-details-item-label">Name:</p>
        <p>{user.firstName}</p>
      </div>
      <div className="profile-details-item">
        <p className="profile-details-item-label">Email:</p>
        <p>{user.email}</p>
      </div>
      <div className="profile-details-footer">
        <button className="btn btn-primary" onClick={() => logoutHandler()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Details;
