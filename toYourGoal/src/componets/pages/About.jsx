import React from "react";
import "./About.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function About() {
  return (
    <div className="title-container-body">
      <div className="title-container">
        <div className="title">
          <h2>About Skillbridge</h2>
          <p>
            Welcome to our platform, where we are passionate about empowering
            individuals to master the world of design and development. We offer
            a wide range of online courses designed to equip learners with the
            skills and knowledge needed to succeed in the ever-evolving digital
            landscape.
          </p>
        </div>
        <div className="description-container">
          <div className="description-card">
            <div className="description-icon">
              <AutoAwesomeIcon className="icon-style" />
            </div>
            <div className="description-text">
              <h3>Trusted by Thousands</h3>
              <p>
                We have successfully served thousands of students, helping them
                unlock their potential and achieve their career goals.
              </p>
            </div>
          </div>
          <div className="description-card">
            <div className="description-icon">
              <AutoAwesomeIcon className="icon-style" />
            </div>
            <div className="description-text">
              <h3>Trusted by Thousands</h3>
              <p>
                We have successfully served thousands of students, helping them
                unlock their potential and achieve their career goals.
              </p>
            </div>
          </div>
          <div className="description-card">
            <div className="description-icon">
              <AutoAwesomeIcon className="icon-style" />
            </div>
            <div className="description-text">
              <h3>Trusted by Thousands</h3>
              <p>
                We have successfully served thousands of students, helping them
                unlock their potential and achieve their career goals.
              </p>
            </div>
          </div>
          <div className="description-card">
            <div className="description-icon">
              <AutoAwesomeIcon className="icon-style" />
            </div>
            <div className="description-text">
              <h3>Trusted by Thousands</h3>
              <p>
                We have successfully served thousands of students, helping them
                unlock their potential and achieve their career goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
