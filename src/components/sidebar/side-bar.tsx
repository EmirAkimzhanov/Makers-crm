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
        <div className="main_left-box-content">
          <p className="main_left-box-content-text">
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                fontSize: "inherit",
                color: "#7e7e7e",
              }}
              onClick={() => {
                navigate("users");
                fetchByParams("staff_postiton", "all");
              }}
            >
              Все сотрудники
            </button>
          </p>
        </div>
        <div className="main_left-box-content">
          <p className="main_left-box-content-text">
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                fontSize: "1.5vw",
                color: "#7e7e7e",
              }}
              onClick={() => {
                navigate("users");
                fetchByParams("staff_position", "Mentor");
              }}
            >
              Mенторы
            </button>
          </p>
        </div>
        <div className="main_left-box-content">
          <p className="main_left-box-content-text">
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                fontSize: "1.5vw",
                color: "#7e7e7e",
              }}
              onClick={() => {
                navigate("users");
                fetchByParams("staff_position", "Tracker");
              }}
            >
              Трекеры
            </button>
          </p>
        </div>

        <div className="main_left-box-content">
          <p className="main_left-box-content-text">
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                fontSize: "1.5vw",
                color: "#7e7e7e",
              }}
              onClick={() => {
                navigate("users");
                fetchByParams("staff_position", "Curator");
              }}
            >
              Кураторы
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
