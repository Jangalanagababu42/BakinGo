import React from "react";
import "./Profile.css";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  const toggelActive = ({ isActive }) => {
    return isActive
      ? "profile-nav-item nav-link-active"
      : "profile-nav-item nav-link";
  };

  return (
    <div className="profile-outer-container">
      <div className="profile-container">
        <div className="profile-nav">
          <NavLink to={"/profile/details"} className={toggelActive}>
            Profile Information
          </NavLink>
          <NavLink to={"/profile/address"} className={toggelActive}>
            Address
          </NavLink>
          <NavLink to={"/profile/orders"} className={toggelActive}>
            Order History
          </NavLink>
        </div>
        <div className="profile-details">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;

// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// function Profile() {
//   const { authState, logoutHandler } = useContext(AuthContext);
//   const { token, user } = authState;
//   return (
//     <div>
//       {token && (
//         <div>
//           <h1>
//             Welcome {user.firstName} {user.lastName}{" "}
//           </h1>

//           <button onClick={logoutHandler}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;
