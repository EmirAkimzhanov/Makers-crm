<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../store/actions/userAction";
import { useAppSelector, useAppDispatch } from "../../hooks";
import withError from "../../hoc-components/hoc-error";
=======
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../store/actions/user";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchRooms } from "../../store/actions/room";
import withError from "../../hoc-components/hoc-error";
import "./user-page.css";
>>>>>>> db5b01ab33c3348f86e17c4409901ac0426740c5

const UsersPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
<<<<<<< HEAD
=======
    dispatch(fetchRooms());
>>>>>>> db5b01ab33c3348f86e17c4409901ac0426740c5
    dispatch(fetchUsers());
  }, []);

  const data = useAppSelector((state) => state);
  console.log(data);

  return (
    <>
      <div className="main">
        <div className="main_right-box">
          <h1 className="main_right-box-head-text">Менторы</h1>
<<<<<<< HEAD
          {data.user.users.map((e) => {
            return (
              <>
                <div
                  className="main_right-box-mentor-content"
                  onClick={() => navigate(`/users/${e.id}`)}
                >
                  <div className="profile"></div>
                  <p className="mentors-name">
                    {e.name} {e.surname}
                  </p>
                </div>
              </>
            );
          })}
=======
          <div
            className="main_right-box-mentor-content"
            onClick={() => navigate("/users/1")}>
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div className="main_right-box-mentor-content">
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div className="main_right-box-mentor-content">
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div className="main_right-box-mentor-content">
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div className="main_right-box-mentor-content">
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div className="main_right-box-mentor-content">
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
          <div className="main_right-box-mentor-content">
            <div className="profile"></div>
            <p className="mentors-name">Azret M.</p>
          </div>
>>>>>>> db5b01ab33c3348f86e17c4409901ac0426740c5
        </div>
      </div>
    </>
  );
};

export default withError(UsersPage);
