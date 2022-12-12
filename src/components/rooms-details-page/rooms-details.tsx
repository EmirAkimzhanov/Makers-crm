import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAction, useAppSelector } from '../../hooks';
import { IRoom } from 'src/@types/room';
import "./rooms-details.css"

const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const staff = {
  mentor: 'Alex',
  trackers: ['Polina', 'Sultan', 'Ilya'],
  curator: 'Myrzaim',
}

const RoomsDetails = () => {
  const [filter, setFilter] = useState('switch day')
  const { id } = useParams();
  const { getOneRoom } = useAction();
  const { rooms } = useAppSelector((state) => state.room);

  useEffect(()=>{
    getOneRoom(id);
  },[])

  console.log(rooms)

  return (
    <div className='room-details-container'>
      <h1 className='room-name'>Аудитория - {rooms?.room_number}</h1>
      <div className='header-container'>
        <div className="header-elem day-night_filter" onClick={()=> filter == 'switch day' ? setFilter('switch evening') : setFilter('switch day') }>
          <div className={filter}></div>
        </div>
        <div className="header-elem group_name">{1}</div>
        <div className="header-elem group_quantity">26/30</div>
      </div>
      <div className='slots-container'>
        {
          slots.map((item, index) => (
            <div className='slot' key={index} style={index > 25 ? { backgroundColor: '#fff', border: '1px solid lightgray' } : {}}></div>
          ))
        }
      </div>
      <div className='room-staff'>
        <h2>Mentor: <span className='staff-names'>{staff.mentor}</span></h2>
        <h2>Trackers: {staff.trackers.map((tracker, ind) => (
          <span key={ind} className='staff-names'>{tracker} </span>
        ))}</h2>
        <h2>Curator: <span className='staff-names'>{staff.curator}</span></h2>
      </div>
    </div>
  );
};

export default RoomsDetails;