import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <li>
          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </NavLink>
        </li>
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
        <li>
          <NavLink to="/singUp" onClick={() => setMenuOpen(false)}>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
