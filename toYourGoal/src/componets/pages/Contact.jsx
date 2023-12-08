import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="constact-container">
        <div className="contact-us-title">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-information-full-container">
          <div className="form-contact-container">
            <form action="">
              <div className="full-name">
                <div className="first-name">
                  <label for="firstName"> First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="write your first name..."
                  />
                </div>
                <div className="last-name">
                  <label for="lastName"> Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="write your last name..."
                  />
                </div>
              </div>
              <div className="contact-phone-email">
                <div className="email">
                  <label for="email"> E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="write your E-Mail..."
                  />
                </div>
                <div className="phone">
                  <label for="phone"> Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="write your Phone..."
                  />
                </div>
              </div>
              <div className="subject">
                <label for="subject">Subject</label>
                <input type="text" id="subject" />
              </div>
              <div className="message">
                <label for="message">Message</label>
                <input type="text" id="message" />
              </div>
              <div className="btn-send">
                <input type="submit" id="send" value="Send Message" />
              </div>
            </form>
          </div>
          <div className="contact-information-container">
            <div className="email-cont-info">
              <span className="material-symbols-outlined"> mail </span>
              <Link to="">toYourGoal@gmail.com</Link>
            </div>
            <div className="phone-cont-info">
              <span className="material-symbols-outlined"> call </span>
              <Link to="">+490987625373</Link>
            </div>
            <div className="location-cont-info">
              <span className="material-symbols-outlined"> location_on </span>
              <Link to="">München</Link>
            </div>
            <div className="icons-cont-info">
              <div className="icons-media-contact">
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
              <div>
                <p className="icons-cont-info-text">Social media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
