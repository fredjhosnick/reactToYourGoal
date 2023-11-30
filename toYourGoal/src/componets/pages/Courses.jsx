import React from "react";
import "./Courses.css";
import CoursePage from "../CoursePage";
export default function Courses() {
  return (
    <>
      <div className="container-courses">
        <div className="left-menu">
          <div className="category-input">
            <input
              type="text"
              placeholder="Find your Course..."
              className="search"
            />
          </div>

          <div className="cats">
            <span className="cat">All Levels</span>
            <span className="cat">A1/A2 Levels</span>
            <span className="cat">B1 Level</span>
            <span className="cat">B2 Level</span>
            <span className="cat">C1 Level</span>
            <span className="cat">C2 Level</span>
          </div>
        </div>

        <CoursePage />
      </div>
    </>
  );
}
