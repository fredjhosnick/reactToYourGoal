import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../SignUpValidation";
import axios from "axios";
import { motion } from "framer-motion";

export default function SignIn() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/login");
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
          <h2>Sign Up</h2>
          <div className="info-form">
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleInput}
              type="name"
              id="name"
              name="name"
              required
              placeholder="Write your Name"
            />
            {errors.name && <span className="text-error">{errors.name}</span>}
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleInput}
              type="email"
              id="email"
              name="email"
              required
              placeholder="Write Your Email"
            />
            {errors.email && <span className="text-error">{errors.email}</span>}
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleInput}
              type="password"
              id="password"
              name="password"
              required
              placeholder="Write Your Password"
            />
            {errors.password && (
              <span className="text-error">{errors.password}</span>
            )}
          </div>
          <div className="btn-form">
            <button className="button-login" type="submit">
              SignUp
            </button>
            <p>You are agree with our terms and policies</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
