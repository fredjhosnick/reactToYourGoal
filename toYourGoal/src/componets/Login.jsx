import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import "../LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  return (
    <div className=" container-body ">
      <div className="container">
        <form className="form" id="signUpForm" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleInput}
            type="email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleInput}
            type="password"
            id="password"
            name="password"
            required
          />
          <Link>
            <button className="button-login" type="submit">
              Login
            </button>
          </Link>
          <p>You are agree with our terms and policies</p>
          <Link to="/singUp">
            <button className="button-signup" type="submit">
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
