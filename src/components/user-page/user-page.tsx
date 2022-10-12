import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAction } from "../../hooks";
import "./user-page.css";
import axios from "axios";

const UsersPage = () => {
  
  const { fetchRooms, fetchUsers } = useAction();
  const { results } = useAppSelector((state) => state.user.users);
  const navigate = useNavigate();


  useEffect(() => {
    fetchRooms();
    fetchUsers();
  }, []);

  return (
    <>
      <div className="main">
        <div className="main_right-box">
          <h1 className="main_right-box-head-text">Менторы</h1>
          <div className="main_right-box-panel">
            <div className="main_right-box-switcher">JS PY filter here</div>
            <div className="main-right-box-add">
              <p className="add-text" onClick={() => navigate("/add")}>
                +
              </p>
            </div>
          </div>
          {results?.map((e: any, i: any) => {
            return (
              <>
                <div
                  key={e.id + i}
                  className="main_right-box-mentor-content"
                  onClick={() => navigate(`/users/${e.id}`)}
                >
                  <div className="profile"></div>
                  <p className="mentors-name">
                    {e.name} <span>{e.last_name}</span>
                  </p>
                  <p className="mentors-direction">{e.direction}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
