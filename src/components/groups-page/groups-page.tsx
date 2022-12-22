import React from 'react';
import { useAction, useAppSelector } from '../../hooks';
import { useEffect } from 'react'
import "./groups-page.css"
import { useNavigate } from 'react-router';

const GroupsPage = () => {

  const { fetchGroups } = useAction();
  const { groups } = useAppSelector((state) => state.groups)
  const navigate = useNavigate();

  useEffect(()=>{
    fetchGroups()
  },[])

  return (
    <div style={{display: "flex", flexDirection: "column", width: "80%", marginTop: '30px'}}>
      <div className='groups__header'>
        <button onClick={() => navigate("/groups/add")}>Add group</button>
      </div>
      <div className='groups__container'>
        {
          groups?.results?.map((group: any, index: number) => (
            <div key={index} className="groups__group">
              <h2>{group.name_of_group}</h2>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default GroupsPage;