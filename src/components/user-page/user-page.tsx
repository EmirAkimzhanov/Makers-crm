import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../store/actions/userAction";
import { useAppSelector, useAppDispatch } from "../../hooks";
import withError from "../../hoc-components/hoc-error";

const UsersPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const data = useAppSelector((state) => state);
  console.log(data);

  return (
    <>
      <div className="main">
        <div className="main_right-box">
          <h1 className="main_right-box-head-text">Менторы</h1>
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
        </div>
      </div>
    </>
  );
};

export default UsersPage;
