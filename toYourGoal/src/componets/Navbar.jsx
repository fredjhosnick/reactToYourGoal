import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    history.push("/login");
  };

  return (
    <nav>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="logo" />
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span className="material-symbols-outlined"> menu </span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        {localStorage.getItem("isLoggedIn") === "true" ? (
          <>
            <li>
              <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
                Teacher
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li></li>
            <li></li>
          </>
        )}

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>

        {localStorage.getItem("isLoggedIn") === "true" ? (
          <li>
            <NavLink
              to="/login"
              onClick={handleLogout}
              style={{ backgroundColor: "red", color: "white" }}
            >
              LogOut
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to="/singUp"
                onClick={() => setMenuOpen(false)}
                style={{ backgroundColor: "green", color: "white" }}
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                style={{ backgroundColor: "#0097b2", color: "white" }}
              >
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
