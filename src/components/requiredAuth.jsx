import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export function RequiredAuth({ children }) {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  return authState.token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
