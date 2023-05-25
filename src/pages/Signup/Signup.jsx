import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="signup-cont">
        <div className="signup-card">
          <h3>Signup</h3>
          <div className="signup-input">
            <label>
              <b>Email Address</b>
            </label>
            <input type="email" placeholder="enter your mail"></input>
          </div>
          <div className="signup-input">
            <label>
              <b>Password</b>
            </label>
            <input type="password" placeholder="enter your password"></input>
          </div>
          <div className="signup-forgot-details">
            <div className="remember-me">
              <input type="checkbox"></input>
              <label>I accept all Terms and Conditions</label>
            </div>
          </div>
          <button className="card-button2 active-button">Signup</button>
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
