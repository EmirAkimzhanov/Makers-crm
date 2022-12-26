import React from 'react';
import { useAction, useAppSelector } from '../../hooks';
import { useEffect } from 'react'
import "./groups-page.css"
import { useNavigate } from 'react-router';

const GroupsPage = () => {

  const { fetchGroups, fetchRooms, deleteGroup } = useAction();
  const { groups } = useAppSelector((state) => state.groups)
  const { rooms } = useAppSelector((state) => state.room)
  const navigate = useNavigate();

  useEffect(()=>{
    fetchRooms();
    fetchGroups()
  },[])

  const getRoomId = (room_num: number) => {
    return rooms.results?.filter((item: any) => item.room_number == room_num)[0].id
  }

  const handleDelete = (id: any) => {
    let flag = window.confirm('Вы точно хотите удалить группу?');
    if(flag) {
      deleteGroup(id);
    }
  }

  return (
    <div style={{display: "flex", flexDirection: "column", width: "80%", marginTop: '30px'}}>
      <div className='groups__header'>
        <button onClick={() => navigate("/groups/add")}>Add group</button>
      </div>
      <div className='groups__container'>
        {
          groups?.results?.map((group: any, index: number) => (
            <div key={index} className="groups__group">
              <h2 onClick={() => navigate(`/rooms/${getRoomId(group.room)}?=${group.group_studying_time}`)}>{group.name_of_group}</h2>
              <p>{group.mentor.name}</p>
              {
                group.tracker?.map((item: any) => {
                  <p>{item.name}</p>
                })
              }

              <button className='ed-btns' onClick={() => navigate(`/rooms/edit/${group.id}/${group.group_studying_time}`)}>edit</button>
              <button className='ed-btns disabled-btn'>archive</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default GroupsPage;