import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./Details.css";
function Details() {
  const { authState, logoutHandler } = useContext(AuthContext);
  const { token, user } = authState;
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
