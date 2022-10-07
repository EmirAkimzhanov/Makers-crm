import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fetchByParams = (query: string, value: string) => {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };
  fetchByParams("status", "Mentor");
  return (
    <div>
      <div className="main_left-box">
        <div className="main_left-box-content">
          <p className="main_left-box-content-text">
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                fontSize: "1.5vw",
                color: "#7e7e7e",
              }}
              value="Mentor"
              onClick={(e) =>
                fetchByParams("status", (e.target as HTMLInputElement).value)
              }
            >
              менторы
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
