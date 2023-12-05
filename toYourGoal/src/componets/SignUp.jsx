import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className=" container-body ">
      <div className="container">
        <form className="form" id="signUpForm">
          <h2>Sign Up</h2>
          <label htmlFor="name">Name:</label>
          <input type="name" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <Link>
            <button className="button-login" type="submit">
              Sign Up
            </button>
          </Link>
          <p>You are agree with our terms and policies</p>
          <Link to="/login">
            <button className="button-signup" type="submit">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
