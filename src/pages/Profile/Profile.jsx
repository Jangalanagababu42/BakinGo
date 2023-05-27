import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const { authState, logoutHandler } = useContext(AuthContext);
  const { token, user } = authState;
  return (
    <div>
      {token && (
        <div>
          <h1>
            Welcome {user.firstName} {user.lastName}{" "}
          </h1>

          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
