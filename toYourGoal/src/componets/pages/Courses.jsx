import "./Courses.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Courses() {
  const [ourCoursePage, setOurCoursePage] = useState([]);
  const [search, setSearch] = useState([]);

  const filterResult = (catItem) => {
    if (catItem === "All Levels") {
      setSearch(ourCoursePage);
    } else {
      let result = ourCoursePage.filter((curData) => curData.cat === catItem);
      setSearch(result);
    }
  };

  function getCoursePage() {
    Axios.get("https://thesultanmarket.com/api/v1/data.php").then((res) => {
      console.log(res.data);

      setOurCoursePage(res.data);
      setSearch(res.data);
    });
  }
  useEffect(() => {
    getCoursePage();
  }, []);

  // Filter search=================================================
  const Filter = (event) => {
    setSearch(
      ourCoursePage.filter(
        (f) =>
          f.course.toLowerCase().includes(event.target.value.toLowerCase()) ||
          f.cat.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  // ====================================================
  return (
    <>
      <div className="container-courses">
        <div className="left-menu">
          <div className="category-input">
            <input
              type="text"
              placeholder="Find your Course..."
              className="search"
              onChange={Filter}
            />
          </div>

          <div className="cats">
            <span className="cat" onClick={() => filterResult("All Levels")}>
              All Levels
            </span>
            <span className="cat" onClick={() => filterResult("A1/2")}>
              A1/A2 Levels
            </span>
            <span className="cat" onClick={() => filterResult("B1")}>
              B1 Level
            </span>
            <span className="cat" onClick={() => filterResult("B2")}>
              B2 Level
            </span>
            <span className="cat" onClick={() => filterResult("C1")}>
              C1 Level
            </span>
            <span className="cat" onClick={() => filterResult("C2")}>
              C2 Level
            </span>
          </div>
        </div>

        <div className="our-courses-container-pageCourse">
          <div className="our-courses-cards-pageCourse">
            {search.map((coursePage, index) => (
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
                    <button className="your-level">See your Level</button>
                  </Link>
                  <Link to={coursePage.urlCourse} target="_blank">
                    <button>Go to Courses</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
