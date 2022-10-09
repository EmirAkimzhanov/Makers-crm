import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../store/actions/user";
import { useAppSelector, useAppDispatch, useAction } from "../../hooks";
import { fetchRooms } from "../../store/actions/room";
import withError from "../../hoc-components/hoc-error";
import "./user-page.css";

const UsersPage = () => {
  const { fetchRooms, fetchUsers } = useAction();
  const { users } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRooms();
    fetchUsers();
  }, []);
  console.log(users);

  return (
    <>
      {/* <div className="main">
        <div className="main_right-box">
          <h1 className="main_right-box-head-text">Менторы</h1>
          {users.map((e, i) => {
            return (
              <>
                <div
                  key={e.id + i}
                  className="main_right-box-mentor-content"
                  onClick={() => navigate(`/users/${e.id}`)}>
                  <div className="profile"></div>
                  <p className="mentors-name">
                    {e.name} {e.username}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default UsersPage;
