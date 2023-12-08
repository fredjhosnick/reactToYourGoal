import React from "react";
import "./About.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="title-container-body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
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
        <div className="title">
          <h2>Our Goals</h2>
          <p>
            At SkillBridge, our goal is to empower individuals from all
            backgrounds to thrive in the world of design and development. We
            believe that education should be accessible and transformative,
            enabling learners to pursue their passions and make a meaningful
            impact. Through our carefully crafted courses, we aim to
          </p>
        </div>
        <div className="description-container">
          <div className="description-card">
            <div className="description-icon">
              <AutoAwesomeIcon className="icon-style" />
            </div>
            <div className="description-text">
              <h3>Provide Practical Skills</h3>
              <p>
                We focus on delivering practical skills that are relevant to the
                current industry demands. Our courses are designed to equip
                learners with the knowledge and tools needed to excel in their
                chosen field.
              </p>
            </div>
          </div>
          <div className="description-card">
            <div className="description-icon">
              <AutoAwesomeIcon className="icon-style" />
            </div>
            <div className="description-text">
              <h3>Foster Creative Problem-Solving</h3>
              <p>
                We encourage creative thinking and problem-solving abilities,
                allowing our students to tackle real-world challenges with
                confidence and innovation.
              </p>
            </div>
          </div>
          <div className="description-card">
            <div className="description-icon">
              <AutoAwesomeIcon className="icon-style" />
            </div>
            <div className="description-text">
              <h3>Promote Collaboration and Community</h3>
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
              <h3>Stay Ahead of the Curve</h3>
              <p>
                The digital landscape is constantly evolving, and we strive to
                stay at the forefront of industry trends. We regularly update
                our course content to ensure our students receive the latest
                knowledge and skills.
              </p>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Together, let's shape the future of digital innovation</h2>
          <div className="btn-banner">
            <Link to="/singUp">
              <button className="explore-course">Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
