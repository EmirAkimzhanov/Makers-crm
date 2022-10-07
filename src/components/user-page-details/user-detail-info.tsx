import React, { useState, useEffect } from "react";
import "./user-detail-info.css";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetail } from "../../store/actions/detailAction";
import { useAppSelector, useAppDispatch } from "../../hooks";

const UserDetailinfo = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(fetchDetail(id!));
  }, []);

  const data = useAppSelector((state) => state);
  let bd = data.user.userDetail;
  console.log(data);

  // bd.map((e) => {R
  //   console.log(e.name);
  // });

  return (
    <div className="user-detail-block">
      <div className="detail-info-paper">
        <div className="detail-info-paper-left-side">
          <p className="left-side-text">{bd.name}</p>
          <p className="left-side-text">{bd.surname}</p>
          <p className="left-side-text-details">{bd.status}</p>
          <p className="left-side-text-details">{bd.language}</p>
        </div>
        <div className="detail-info-paper-right-side">
          <div className="right-side-profile"></div>
          <p className="right-side-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repudiandae perspiciatis autem omnis error! Ab?
          </p>
          <div className="right-side-cards">
            <div className="card">
              <div className="card-inside">
                <p className="card-header">Mentor</p>
              </div>
              <p>JS25</p>
            </div>
            <div className="card">
              <div className="card-inside">
                <p className="card-header">Tracker</p>
              </div>
              <p>JS27</p>
            </div>
            <div className="card">
              <div className="card-inside">
                <p className="card-header">Rofler</p>
              </div>
              <p>office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailinfo;
