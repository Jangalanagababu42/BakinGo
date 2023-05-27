import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import axios from "axios";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { LoginHandler } = useContext(AuthContext);

  function handleLogData() {
    LoginHandler(loginData);
  }

  return (
    <>
      <div className="login-cont">
        <div className="login-card">
          <h3>Login</h3>
          <div className="login-input">
            <label>
              <b>Email Address</b>
            </label>
            <input
              type="email"
              placeholder="enter your mail"
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, email: e.target.value }))
              }
            ></input>
          </div>
          <div className="login-input">
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="enter your password"
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, password: e.target.value }))
              }
            ></input>
          </div>
          <div className="login-forgot-details">
            <div className="remember-me">
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <div className="forgot-password">Forgot your Password?</div>
          </div>
          <button
            className="card-button2 active-button"
            onClick={() => {
              handleLogData();
            }}
          >
            Login
          </button>
          <a href="/signup" className="create-new-account">
            Create New Account
            <i className="material-symbols-outlined">
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
