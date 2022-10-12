import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../store/actions/user";
import { useAppSelector, useAppDispatch, useAction } from "../../hooks";
import { fetchRooms } from "../../store/actions/room";
import withError from "../../hoc-components/hoc-error";
import "./user-page.css";
import axios from "axios";

const UsersPage = () => {
  
  const { fetchRooms, fetchUsers } = useAction();
  const { users } = useAppSelector((state) => state.user);
  const navigate = useNavigate();


  useEffect(() => {
    fetchRooms();
    fetchUsers();
  }, []);
  console.log(users.results);
  const { results } = users;
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
