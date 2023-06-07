import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { authReducer } from "../reducers/authReducer";
import { toast } from "react-toastify";
import { ApiContext } from "./ApiContext";

export const AuthContext = createContext("");

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const { productDispatch } = useContext(ApiContext);
  const initialAuthState = {
    token: localStorageToken?.token,
    user: localStorageToken?.user,
  };
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const LoginHandler = async (loginData) => {
    console.log(loginData, "logindata");
    try {
      if (loginData.email && loginData.password !== "") {
        const response = await axios.post(`/api/auth/login`, {
          email: loginData.email,
          password: loginData.password,
        });
        console.log(response, "response");
        if (response.status === 200) {
          const {
            data: { encodedToken, foundUser },
          } = response;
          localStorage.setItem(
            "loginItems",
            JSON.stringify({ token: encodedToken, user: foundUser })
          );
          authDispatch({ type: "TOKEN", payload: encodedToken });
          authDispatch({ type: "USER", payload: foundUser });
          navigate(
            location?.state?.from?.pathname
              ? location?.state?.from?.pathname
              : "/"
          );
          toast.success("Loggeed In Succesful");
        }
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Invalid credentials");
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
        localStorage.setItem(
          "loginItems",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        authDispatch({ type: "TOKEN", payload: encodedToken });
        authDispatch({ type: "USER", payload: createdUser });
        // navigate("/login");
        navigate("/profile/details");
        toast.success("Signed In Succesful");
      }
    } catch (error) {
      toast.info("Something went wrong");
    }
  };

  // const logoutHandler = () => {
  //   localStorage.removeItem("loginItems");
  //   authDispatch({ type: "TOKEN", payload: null });
  //   authDispatch({ type: "USER", payload: null });
  //   navigate("/login");
  //   toast.info("LoggedOut ");
  //   productDispatch({
  //     type: "CART_OPERATION",
  //     payload: { cart: [] },
  //   });
  // };

  return (
    <AuthContext.Provider
      value={{ LoginHandler, authState, signupHandler, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
}
