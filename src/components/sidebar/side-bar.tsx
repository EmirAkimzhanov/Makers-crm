import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks";

const SideBar = () => {
  const search = new URLSearchParams(window.location.pathname);
  const { fetchUsers } = useAction();
  const navigate = useNavigate();

  const fetchByParams = (key: string, value: string) => {
    if (value == "all") {
      search.delete(key);
    } else {
      search.set(key, value);
    }
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    fetchUsers();
  };
  return (
    <div>
      <div className="main_left-box">
        <div className="main_left-box-content" onClick={() => {
                navigate("users");
                fetchByParams("staff_position", "all");
              }}>
          <p className="main_left-box-content-text">
              Все сотрудники
          </p>
        </div>
        <div className="main_left-box-content" onClick={() => {
                navigate("users");
                fetchByParams("staff_position", "Mentor");
              }}>
          <p className="main_left-box-content-text">            
              Mенторы
          </p>
        </div>
        <div className="main_left-box-content" onClick={() => {
                navigate("users");
                fetchByParams("staff_position", "Tracker");
              }}>
          <p className="main_left-box-content-text">
            Трекеры
          </p>
        </div>

        <div className="main_left-box-content" onClick={() => {
                navigate("users");
                fetchByParams("staff_position", "Kurator");
              }}>
          <p className="main_left-box-content-text">
              Кураторы
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
