import React, { useState } from 'react';
import { useParams } from 'react-router';
import "./rooms-details.css"

const RoomsDetails = () => {

  const [filter, setFilter] = useState('switch day')
  const { id } = useParams();

  const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  return (
    <div className='room-details-container'>
      <h1 className='room-name'>Аудитория - {id}</h1>
      <div className='header-container'>
        <div className="header-elem day-night_filter" onClick={()=> filter == 'switch day' ? setFilter('switch evening') : setFilter('switch day') }>
          <div className={filter}></div>
        </div>
        <div className="header-elem group_name">JS29</div>
        <div className="header-elem group_quantity">27/28</div>
      </div>
      <div className='slots-container'>
        {
          slots.map((item, index) => (
            <div className='slot' key={index} style={index > 25 ? { backgroundColor: '#fff', border: '1px solid lightgray' } : {}}></div>
          ))
        }
      </div>
    </div>
  );
};

export default RoomsDetails;