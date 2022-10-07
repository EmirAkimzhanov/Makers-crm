import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks";

const SideBar = () => {
  const search = new URLSearchParams(window.location.pathname);
  const { fetchUsers } = useAction();
  const navigate = useNavigate();

  const fetchByParams = (key: string, value: string) => {
    console.log(key, value);

    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    console.log(newPath, "newPath");

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
                fontSize: "2.5vw",
                color: "#7e7e7e",
              }}
              onClick={() => {
                fetchByParams("status", "Mentor");
              }}>
              Mенторы
            </button>
          </p>
        </div>
        <div className="main_left-box-content">
          <p className="main_left-box-content-text">кураторы</p>
        </div>
        <div className="main_left-box-content">
          <p className="main_left-box-content-text">смм</p>
        </div>
        <div className="main_left-box-content">
          <p className="main_left-box-content-text">продажи</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
