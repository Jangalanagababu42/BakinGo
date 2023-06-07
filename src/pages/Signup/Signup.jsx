import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import axios from "axios";
import "./Signup.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Signup() {
  const { signupHandler } = useContext(AuthContext);

  const [userSignUpDetails, setUserSignUpDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastname: "",
  });

  function handleSignup(e) {
    e.preventDefault();
    signupHandler(userSignUpDetails);
  }

  return (
    <>
      <div className="signup-cont">
        <div className="signup-card">
          <h3>Signup</h3>
          <div className="signup-input">
            <label>
              <b>
                FirstName<span style={{ color: "red" }}>*</span>
              </b>
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
              required={true}
            ></input>
          </div>
          <div className="signup-input">
            <label>
              <b>
                lastName<span style={{ color: "red" }}>*</span>
              </b>
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
              required={true}
            ></input>
          </div>
          <div className="signup-input">
            <label>
              <b>
                Email Address<span style={{ color: "red" }}>*</span>
              </b>
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
              required={true}
            ></input>
          </div>
          <div className="signup-input">
            <label>
              <b>
                Password<span style={{ color: "red" }}>*</span>
              </b>
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
              required={true}
            ></input>
          </div>
          <div className="signup-forgot-details">
            <div className="remember-me">
              <input type="checkbox" required></input>
              <label>I accept all Terms and Conditions</label>
            </div>
          </div>
          <button
            className="card-button2 active-button"
            onClick={(e) => {
              handleSignup(e);
            }}
          >
            Signup
          </button>
          <Link to="/login" className="create-new-account">
            Already have an account
            <i className="material-symbols-outlined">
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
