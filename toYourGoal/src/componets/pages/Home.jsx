import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from "../Slider";
import { Images } from "../../data";
import OurCourses from "../OurCourses";
import { motion } from "framer-motion";
import BasicAccordion from "../Acordion";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="banner">
        <div className="textBanner">
          <h1>
            <span>Go</span> to your Goals
            <span className="material-symbols-outlined">sports_score</span>
          </h1>

          <h2>
            with our Online <span>Course</span> and <span>Tests.</span>
          </h2>
          <p>Learn from Experts and reach your goals</p>
        </div>
        <div className="btn-banner">
          <Link to="/courses">
            <button className="explore-course">Explore Courses</button>
          </Link>
        </div>
      </div>
      <Slider slides={Images} />

      <div className="benefits-container">
        <div className="text-benifits">
          <h2>Benefits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, vel
            delectus esse ducimus deserunt neque possimus eaque quam natus
            officiis repudiandae harum fugiat, corrupti dolorem! Nam
            voluptatibus porro officia dignissimos.
          </p>
        </div>
        <div className="benefits-cards">
          <div className="benefits-card-items">
            <h2>
              <span className="material-symbols-outlined">
                {" "}
                calendar_month{" "}
              </span>
            </h2>
            <h3>Flexible Learning Schedule</h3>
            <p>
              Fit your coursework around your exixting commitments and
              obligations.
            </p>
          </div>
          <div className="benefits-card-items">
            <h2>
              <span className="material-symbols-outlined">
                {" "}
                developer_guide{" "}
              </span>
            </h2>
            <h3>Expert Instruction</h3>
            <p>
              Learn from industry experts who have hands-one experience in
              desing and development.
            </p>
          </div>
          <div className="benefits-card-items">
            <h2>
              <span className="material-symbols-outlined"> lists </span>
            </h2>
            <h3>Diverse Course Offerings</h3>
            <p>
              Explore a wide range of design and development courses covering
              various topics.
            </p>
          </div>
          <div className="benefits-card-items">
            <h2>
              <span className="material-symbols-outlined"> work_update </span>
            </h2>
            <h3>Updated Curriculum</h3>
            <p>
              Access courses with up-to-date content reflecting the latest
              trends and industry practices.
            </p>
          </div>
          <div className="benefits-card-items">
            <h2>
              <span className="material-symbols-outlined"> handyman </span>
            </h2>
            <h3>Practical Projects and Assignments</h3>
            <p>
              Develop a portfolio showcasting your skills and abilities to
              potential employers.
            </p>
          </div>
          <div className="benefits-card-items">
            <h2>
              <span className="material-symbols-outlined">
                {" "}
                interactive_space{" "}
              </span>
            </h2>
            <h3>Interactive Learning Environment</h3>
            <p>
              Collaborate with fellow learns, exchanging ideas and feedback to
              enhance your understanding.
            </p>
          </div>
        </div>
      </div>

      <OurCourses />

      <div className="frequently-answer-container">
        <div className="title-frequently-answer">
          <h2>Frequently Asked Questios</h2>
          <p>
            Still you have any question? Contact our Team via support@skill.com
          </p>
        </div>
        <div className="answers-questions">
          <BasicAccordion />
        </div>
      </div>
    </motion.div>
  );
}
