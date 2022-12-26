import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { fetchRooms } from '../../store/actions/room';
import { useAction, useAppDispatch, useAppSelector } from '../../hooks';
import "./rooms-page.css"

const RoomsPage = () => {

  const [floor, setFloor] = useState(1);
  const [day, setDay] = useState('day');
  const navigate = useNavigate();
  const { fetchRooms } = useAction(); 
  const { rooms } = useAppSelector((state) => state.room);

  useEffect(()=>{
    fetchRooms();
  },[])
 
  console.log(rooms)
  const handleFloor = () => {
    floor ? setFloor(0) : setFloor(1);
  }

  const handleDay = () => {
    day === 'day' ? setDay('evening') : setDay('day');
  }

  const dayOrEven = ()  => {
    return day === "day" ? 'day_group' : 'evening_group';
  }

  const getRoomInfo = (room_id: number) => {
    return rooms.results?.find((item) => item.room_number === room_id)
  }

  const getDayNightIcon = () => {
    if(day === 'evening') {
      return '/images/night.svg';
    } else {
      return '/images/day.svg';
    }
  }

  return (
    <>
      <div className={day === "evening" ? 'rooms-page-container evening_layer' : 'rooms-page-container'}>
        <div className='rooms-page-header'>
          <button className='floor-change-btn' onClick={handleFloor}>change floor</button>
          <button className={'day_evening-change-btn' + ` btn-${day}`} onClick={handleDay}>day / evening</button>
        </div>
        <div className="rooms-container">
          {
            floor ?
              <div className="floor-container"> {/* 1 floor */}
                <div className='floor-leftside'>
                  <div className='room kitchen'>kitchen</div>
                  <div className='room sales'>sales<div className='gay'>Шаба педик</div></div>
                  <div className='room room1' onClick={()=>navigate(`/rooms/${getRoomInfo(1)?.id}?=${day}`)}>room1
                    <div className='room-info'>
                      <p>{getRoomInfo(1)?.[dayOrEven()][0]?.name_of_group}</p>
                      <p>{getRoomInfo(1)?.[dayOrEven()][0]?.mentor.name}</p>
                      <p>{getRoomInfo(1)?.[dayOrEven()][0]?.tracker.map((item: any) => (
                        <span className='trackers_name'>{item.name}</span>
                      ))}</p>
                    </div>
                  </div>
                  <div className='room room4' onClick={()=>navigate(`/rooms/${getRoomInfo(4)?.id}?=${day}`)}>room4
                    <div className='room-info'>
                      <p>{getRoomInfo(4)?.[dayOrEven()][0]?.name_of_group}</p>
                      <p>{getRoomInfo(4)?.[dayOrEven()][0]?.mentor.name}</p>
                      <p>{getRoomInfo(4)?.[dayOrEven()][0]?.tracker.map((item: any) => (
                        <span className='trackers_name'>{item.name}</span>
                      ))}</p>
                    </div>
                  </div>
                </div>
                <p className='floor-name'>1 Этаж <img src={getDayNightIcon()} alt="day night icon" width="70"/></p>
                <div className='floor-rightside updateside'>
                  <div className='room room11'>room11</div>
                  <div className='room room9' onClick={()=>navigate(`/rooms/${getRoomInfo(9)?.id}?=${day}`)}>room9
                    <div className='room-info'>
                        <p>{getRoomInfo(9)?.[dayOrEven()][0]?.name_of_group}</p>
                        <p>{getRoomInfo(9)?.[dayOrEven()][0]?.mentor.name}</p>
                        <p>{getRoomInfo(9)?.[dayOrEven()][0]?.tracker.map((item: any) => (
                          <span className='trackers_name'>{item.name}</span>
                        ))}</p>
                    </div>
                  </div>
                  <div className='room room8'>room8</div>
                </div>
              </div>
              :
              <div className="floor-container"> {/* 0 floor */}
                <div className="floor-leftside">
                  <div className='room meeting'>meeting room</div>
                  <div className='room room24' onClick={()=>navigate(`/rooms/${getRoomInfo(24)?.id}?=${day}`)}>24 room
                    <div className='room-info'>
                        <p>{getRoomInfo(24)?.[dayOrEven()][0]?.name_of_group}</p>
                        <p>{getRoomInfo(24)?.[dayOrEven()][0]?.mentor.name}</p>
                        <p>{getRoomInfo(24)?.[dayOrEven()][0]?.tracker.map((item: any) => (
                          <span className='trackers_name'>{item.name}</span>
                        ))}</p>
                    </div>
                  </div>
                  <div className='room room22' onClick={()=>navigate(`/rooms/${getRoomInfo(22)?.id}?=${day}`)}>22 room
                    <div className='room-info'>
                        <p>{getRoomInfo(22)?.[dayOrEven()][0]?.name_of_group}</p>
                        <p>{getRoomInfo(22)?.[dayOrEven()][0]?.mentor.name}</p>
                        <p>{getRoomInfo(22)?.[dayOrEven()][0]?.tracker.map((item: any) => (
                          <span className='trackers_name'>{item.name}</span>
                        ))}</p>
                    </div>
                  </div>
                  <div className='room aqua' onClick={()=>navigate(`/rooms/${getRoomInfo(19)?.id}?=${day}`)}>aquarium
                    <div className='room-info'>
                        <p>{getRoomInfo(19)?.[dayOrEven()][0]?.name_of_group}</p>
                        <p>{getRoomInfo(19)?.[dayOrEven()][0]?.mentor.name}</p>
                        <p>{getRoomInfo(19)?.[dayOrEven()][0]?.tracker.map((item: any) => (
                          <span className='trackers_name'>{item.name}</span>
                        ))}</p>
                    </div>
                  </div>
                </div>
                <p className='floor-name'>Цокольный этаж <img src={getDayNightIcon()} alt="day night icon" width="70"/></p>
                <div className='floor-rightside'>
                  <div className='room production'>production</div>
                  <div className='room studio'>studio</div>
                  <div className='room room14' onClick={()=>navigate(`/rooms/${getRoomInfo(14)?.id}?=${day}`)}>14 room
                    <div className='room-info'>
                        <p>{getRoomInfo(14)?.[dayOrEven()][0]?.name_of_group}</p>
                        <p>{getRoomInfo(14)?.[dayOrEven()][0]?.mentor.name}</p>
                        <p>{getRoomInfo(14)?.[dayOrEven()][0]?.tracker.map((item: any) => (
                          <span className='trackers_name'>{item.name}</span>
                        ))}</p>
                    </div>
                  </div>
                  <div className='room room18' onClick={()=>navigate(`/rooms/${getRoomInfo(17)?.id}?=${day}`)}>18 room
                    <div className='room-info'>
                        <p>{getRoomInfo(17)?.[dayOrEven()][0]?.name_of_group}</p>
                        <p>{getRoomInfo(17)?.[dayOrEven()][0]?.mentor.name}</p>
                        <p>{getRoomInfo(17)?.[dayOrEven()][0]?.tracker.map((item: any) => (
                          <span className='trackers_name'>{item.name}</span>
                        ))}</p>
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    </>
  );
};

export default RoomsPage;