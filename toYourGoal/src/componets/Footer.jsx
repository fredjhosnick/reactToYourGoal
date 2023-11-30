import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer>
      <div className="contact">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </li>
          <li>
            <span className="material-symbols-outlined"> mail </span>
            toyourgoal@gmail.com
          </li>
          <li>
            <span className="material-symbols-outlined"> call </span>
            +92873464738
          </li>
          <li>
            <span className="material-symbols-outlined"> location_on </span>
            Place in the World
          </li>
        </ul>
      </div>
      <div className="footer-info">
        <div className="footer-home">
          <ul>
            <li>Home</li>
            <li>
              <Link to="#">Benefits</Link>
            </li>
            <li>
              <Link to="#">Our Courses</Link>
            </li>
            <li>
              <Link to="#">Our FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="footer-about-us">
          <ul>
            <li>About us</li>
            <li>
              <Link to="#">Company</Link>
            </li>
            <li>
              <Link to="#">Achievements</Link>
            </li>
            <li>
              <Link to="#">Our Goals</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social-profiles">
          <ul>
            <li>Social Profiles</li>
          </ul>
          <div className="social-profiles">
            <ul>
              <li>
                <Link to="#">
                  <FacebookIcon className="img" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <YouTubeIcon className="img" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <LinkedInIcon className="img" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
