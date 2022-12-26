import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "src/@UI";
import { useAppSelector, useAction } from "../../hooks";
import "./user-page.css";

const UsersPage = () => {
  
  const { fetchRooms, fetchUsers } = useAction();
  const { results } = useAppSelector((state) => state.user.users);
  const navigate = useNavigate();
  const [direction , setDirection] = useState('JS');
  const [display , setDisplay] = useState('none')
console.log(results);

  useEffect(() => {
    fetchRooms();
    fetchUsers();
  }, []);
  const search = new URLSearchParams(window.location.pathname);

  const fetchByParams = (key: string, value: string) => {
    if (value === "all") {
      search.delete(key);
    } else {
      search.set(key, value);
    }
    let newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    fetchUsers();
  };


  return (
    <>
      <div className="main">
        <div className="main_right-box">
          <h1 className="main_right-box-head-text">Менторы</h1>
          <div className="main_right-box-panel">
            <div  style={{display:`${display}`}}>
            </div>
            <div className="filter-block">
              <select className="filter" onChange={(e)=>fetchByParams('direction' ,`${e.target.value}` )}>
                <option className="filter-item" value="JS">JS</option>
                <option className="filter-item" value="Py">Py</option>
              </select>
              <div className="main-right-box-add">
                <p className="add-text" onClick={() => navigate("/add")}>
                  +
                </p>
              </div>
              
            </div>
          </div>
          {results?.map((e: any, i: any) => {
            return (
              
                <div
                  key={e.id}
                  className="main_right-box-mentor-content"
                  onClick={() => navigate(`/users/${e.id}`)}
                >
                  <div className="profile"></div>
                  <p className="mentors-name">
                    {e.name} <span>{e.last_name}</span>
                  </p>
                  <p className="mentors-direction">{
                    e.direction == "JS" ?
                    <img src="/images/JS_logo.png" alt="JS" width="30" />
                    :
                    e.direction == "Py" ?
                    <img src="/images/Python_logo.png" alt="Python" width="30"/>
                    :
                    null
                  }</p>
                </div>
            
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
