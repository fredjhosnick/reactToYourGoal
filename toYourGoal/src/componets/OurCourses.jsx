import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./OurCourses.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function OurCourses() {
  const [ourCourses, setOurCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const coursesPerPage = 3;

  function getCourses() {
    Axios.get("https://thesultanmarket.com/api/v1/data.php").then((res) => {
      console.log(res.data);
      setOurCourses(res.data);
      console.log(ourCourses);
    });
  }
  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const indexOfLastCourse = page * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = ourCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="our-courses-container">
      <div className="text-our-couses">
        <h2>Our Courses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          veritatis quae dignissimos porro, debitis aliquam omnis ab animi,
          similique cum repellendus temporibus possimus error fugit nisi dolores
          perspiciatis quaerat culpa?
        </p>
      </div>

      <div className="our-courses-cards">
        {currentCourses.map((homeCourse, index) => (
          <div key={index} className="our-courses-items">
            <div className="image">
              <img src={homeCourse.img} alt="" />
            </div>
            <div className="details-our-course">
              <div className="time-level-ourcourses">
                <h5>{homeCourse.duration} weeks</h5>
                <h5>{homeCourse.level}</h5>
              </div>
              <div className="name-teacher-our-couses">
                <h4>{homeCourse.cat}</h4>
              </div>
            </div>

            <div className="content-our-course">
              <h3>{homeCourse.course}</h3>
              <p>{homeCourse.description}</p>
            </div>
            <div className="btn-ourcourse">
              <Link to="/singUp">
                <button>Go to Courses</button>
              </Link>
            </div>
          </div>
        ))}
       
      </div>
      {windowWidth > 800 && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Pagination
            count={Math.ceil(ourCourses.length / coursesPerPage)}
            page={page}
            color="primary"
            size="large"
            onChange={handleChangePage}
          />
        </Stack>
      )}
    </div>
  );
}
