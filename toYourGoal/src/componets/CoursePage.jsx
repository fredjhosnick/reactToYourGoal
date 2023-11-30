import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./CoursePage.css";
export default function CoursePage() {
  const [ourCoursePage, setOurCoursePage] = useState([]);

  function getCoursePage() {
    Axios.get("https://thesultanmarket.com/api/v1/data.php").then((res) => {
      console.log(res.data);
      setOurCoursePage(res.data);
      console.log(ourCourses);
    });
  }
  useEffect(() => {
    getCoursePage();
  }, []);

  return (
    <div className="our-courses-container-pageCourse">
      <div className="our-courses-cards-pageCourse">
        {ourCoursePage.map((coursePage, index) => (
          <div key={index} className="our-courses-items-pageCourse">
            <div className="image-pageCourse">
              <img src={coursePage.img} alt="" />
            </div>
            <div className="details-our-course-pageCourse">
              <div className="time-level-ourcourses-pageCourse">
                <h5>{coursePage.duration} weeks</h5>
                <h5>{coursePage.level}</h5>
              </div>
              <div className="name-teacher-our-couses-pageCourse">
                <h4>{coursePage.cat}</h4>
              </div>
            </div>

            <div className="content-our-course-pageCourse">
              <h3>{coursePage.course}</h3>
              <p>{coursePage.description}</p>
            </div>
            <div className="btn-pageCourse">
              <Link to="/test">
                <button class="your-level">See your Level</button>
              </Link>
              <Link to="/courses">
                <button>Go to Courses</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
