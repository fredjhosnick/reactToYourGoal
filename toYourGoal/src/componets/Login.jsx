import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Validation from "../LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className=" container-body ">
      <div className="container">
        <form className="form" id="signUpForm" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="info-form">
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleInput}
              type="email"
              id="email"
              name="email"
              required
            />
            {errors.email && <span className="text-error">{errors.email}</span>}
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleInput}
              type="password"
              id="password"
              name="password"
              required
            />
            {errors.password && (
              <span className="text-error">{errors.password}</span>
            )}
          </div>
          <div className="btn-form">
            <button className="button-login" type="submit">
              Login
            </button>

            <p>You are agree with our terms and policies</p>
            <Link to="/singUp">
              <button className="button-signup" type="submit">
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
