import { createContext, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext("");

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const initialAuthState = {
    token: null,
    user: localStorage.getItem("user"),
  };
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const LoginHandler = async (loginData) => {
    if (loginData.email && loginData.password !== "") {
      try {
        const response = await axios.post(`/api/auth/login`, {
          email: loginData.email,
          password: loginData.password,
        });
        console.log(response, "response");
        if (response.status === 200) {
          const {
            data: { encodedToken, foundUser },
          } = response;
          localStorage.setItem("token", encodedToken);
          localStorage.setItem("user", foundUser);
          authDispatch({ type: "TOKEN", payload: encodedToken });
          authDispatch({ type: "USER", payload: foundUser });
          navigate(
            location?.state?.from?.pathname
              ? location?.state?.from?.pathname
              : "/"
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const signupHandler = async (userSignUpDetails) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userSignUpDetails.firstName,
        lastName: userSignUpDetails.lastname,
        email: userSignUpDetails.email,
        password: userSignUpDetails.password,
      });
      console.log(response, "res");
      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 201) {
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("user", createdUser);
        authDispatch({ type: "TOKEN", payload: encodedToken });
        authDispatch({ type: "USER", payload: createdUser });
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "TOKEN", payload: null });
    authDispatch({ type: "USER", payload: null });
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{ LoginHandler, authState, logoutHandler, signupHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}
