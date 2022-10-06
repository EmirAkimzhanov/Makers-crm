import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="main_right-box">
          <h1 className="main_right-box-head-text">Менторы</h1>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>

          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>

          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}
          >
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
