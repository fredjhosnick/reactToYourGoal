import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../LoginValidation.js";
import axios from "axios";
import { motion } from "framer-motion";

function Login({ handleClcik }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    setCheck(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/profile");
          } else {
            alert("No record existed!!");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className=" container-body "
    >
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="info-form">
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleInput}
              type="email"
              id="email"
              placeholder="Enter Email..."
              name="email"
              required
            />
            {errors.email && <span className="text-error">{errors.email}</span>}
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleInput}
              type="password"
              placeholder="Enter Password..."
              id="password"
              name="password"
              required
            />
            {errors.password && (
              <span className="text-error">{errors.password}</span>
            )}
          </div>
          <div className="btn-form">
            <button
              onClick={handleClcik}
              className="button-login"
              type="submit"
            >
              Login
            </button>
            <p>You are agree with our terms and policies</p>
            <Link to="/singUp">Sign Up</Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Login;
