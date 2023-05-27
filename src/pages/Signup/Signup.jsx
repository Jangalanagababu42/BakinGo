import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import axios from "axios";
import "./Signup.css";
import { AuthContext } from "../../context/AuthContext";

function Signup() {
  const { signupHandler } = useContext(AuthContext);

  const [userSignUpDetails, setUserSignUpDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastname: "",
  });

  function handleSignup() {
    signupHandler(userSignUpDetails);
  }

  return (
    <>
      <div className="signup-cont">
        <div className="signup-card">
          <h3>Signup</h3>
          <div className="signup-input">
            <label>
              <b>FirstName</b>
            </label>
            <input
              type="text"
              placeholder="enter your Firstname"
              value={userSignUpDetails.firstName}
              onChange={(e) => {
                setUserSignUpDetails({
                  ...userSignUpDetails,
                  firstName: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="signup-input">
            <label>
              <b>lastName</b>
            </label>
            <input
              type="text"
              placeholder="enter your lastname"
              value={userSignUpDetails.lastname}
              onChange={(e) => {
                setUserSignUpDetails({
                  ...userSignUpDetails,
                  lastname: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="signup-input">
            <label>
              <b>Email Address</b>
            </label>
            <input
              type="email"
              placeholder="enter your mail"
              value={userSignUpDetails.email}
              onChange={(e) => {
                setUserSignUpDetails({
                  ...userSignUpDetails,
                  email: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="signup-input">
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="enter your password"
              value={userSignUpDetails.password}
              onChange={(e) => {
                setUserSignUpDetails({
                  ...userSignUpDetails,
                  password: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="signup-forgot-details">
            <div className="remember-me">
              <input type="checkbox"></input>
              <label>I accept all Terms and Conditions</label>
            </div>
          </div>
          <button
            className="card-button2 active-button"
            onClick={() => {
              handleSignup();
            }}
          >
            Signup
          </button>
          <a href="/login" className="create-new-account">
            Already have an account
            <i className="material-symbols-outlined">
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Signup;
