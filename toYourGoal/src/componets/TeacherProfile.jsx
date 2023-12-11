import React from "react";
import "../componets/TeacherProfile.css";
import { Link } from "react-router-dom";

export const TeacherProfile = () => {
  return (
    <>
      <div className="teache-profile">
        <section className="teacher-profile">
          <div className="details">
            <div className="tutor">
              <img src="../../public/imgs/pic-1.jpg" alt />
              <h3>John deo</h3>
              <span>Developer-Teacher</span>
            </div>
            <div className="flex">
              <p>
                total playlists : <span>4</span>
              </p>
              <p>
                total videos : <span>18</span>
              </p>
              <p>
                total likes : <span>1208</span>
              </p>
              <p>
                total comments : <span>52</span>
              </p>
            </div>
          </div>
        </section>
        <section className="courses">
          <h1 className="heading">our courses</h1>
          <div className="box-container">
            <div className="box">
              <div className="thumb">
                <img src="../../public/imgs/thumb-1.png" alt />
                <span>10 videos</span>
              </div>
              <h3 className="title">complete HTML tutorial</h3>
              <Link href="playlist.html" className="inline-btn">
                view playlist
              </Link>
            </div>
            <div className="box">
              <div className="thumb">
                <img src="../../public/imgs/thumb-2.png" alt />
                <span>10 videos</span>
              </div>
              <h3 className="title">complete CSS tutorial</h3>
              <Link href="playlist.html" className="inline-btn">
                view playlist
              </Link>
            </div>
            <div className="box">
              <div className="thumb">
                <img src="../../public/imgs/thumb-3.png" alt />
                <span>10 videos</span>
              </div>
              <h3 className="title">complete javascript tutorial</h3>
              <Link href="playlist.html" className="inline-btn">
                view playlist
              </Link>
            </div>
            <div className="box">
              <div className="thumb">
                <img src="../../public/imgs/thumb-4.png" alt />
                <span>10 videos</span>
              </div>
              <h3 className="title">complete Boostrap tutorial</h3>
              <Link href="playlist.html" className="inline-btn">
                view playlist
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
