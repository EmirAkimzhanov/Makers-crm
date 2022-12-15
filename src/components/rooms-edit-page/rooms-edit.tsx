import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAction, useAppSelector } from '../../hooks';
import Select from 'react-select';

const inputStyle = {
  border: '1px solid black',
  margin: '5px 0',
  borderRadius: '5px',
  padding: '5px 20px'
}

const RoomsEdit = () => {

  const {id, day} = useParams();
  const { getOneRoom, fetchUsers } = useAction();
  const { room, user  } = useAppSelector((state) => state);
  const [editingRoom, setEditingRoom] = useState<any>({});
  const [trackers, setTrackers] = useState<any>([]);
  const [trackersList, setTrackersList] = useState<any>([]);

  function getDayEvenInfo() {
    return day == 'evening' ? 'evening_group' : 'day_group';
  }
  
  useEffect(() => {
    getOneRoom(id);
    fetchUsers();
  }, [])

  useEffect(() => {
    setTrackers(editingRoom?.tracker?.map((item: any) => {
      let obj = {...item,value: (item.name + " " + item.direction), label: (item.name + " " + item.direction)}
      return obj;
    }))
  }, [trackersList])

  useEffect(() => {
    setEditingRoom(room.rooms[getDayEvenInfo()] && room.rooms[getDayEvenInfo()][0]);
  }, [room.rooms])

  useEffect(() => {
    setTrackersList(user.users?.results?.map((item: any) => {
      let obj = {...item,value: (item.name + " " + item?.direction), label: (item.name + " " + item?.direction)}
      return obj;
    }))
  }, [user.users])

  const handleInp = (e: any): void => {
    setEditingRoom({
      ...editingRoom,
      [e.target.name]: e.target.value,
    })
  }

  console.log(trackers)
  console.log(trackersList)

  return (
    <>
      <div>
        <form style={{display: 'flex', flexDirection: 'column', margin: '30px 0', alignItems: 'flex-start'}}>
          <label htmlFor="name_of_group">Group name</label>
          <input style={inputStyle} type="text" name='name_of_group' value={editingRoom?.name_of_group} onChange={(e) => handleInp(e)} />
          <label htmlFor="date_of_start">Start date</label>
          <input style={inputStyle} type="date" name='date_of_start'  value={editingRoom?.date_of_start} onChange={(e) => handleInp(e)}/>
          <label htmlFor="date_of_end">End date</label>
          <input style={inputStyle} type="date" name='date_of_end' value={editingRoom?.date_of_end}/>
          <label htmlFor="group_studying_time">Study time</label>
          <select style={inputStyle}  name='group_studying_time' defaultValue={day} onChange={(e) => handleInp(e)}>
            <option value="day">Day</option>
            <option value="evening">Evening</option>
          </select>
          <label htmlFor="mentor">Mentor</label>
          <select style={inputStyle} name="mentor" onChange={(e) => handleInp(e)}>
            <option value={editingRoom?.mentor?.split(' ')[0]} selected>{editingRoom?.mentor?.split(' ')[0]}</option>
            {
              user.users.results?.map((item: any) => (
                <>
                {
                  item.staff_position == 'Mentor' ? 
                  <option value={item.name}>{item.name + " " + item.direction}</option>
                  : <></>
                }
                </>
              ))
            }
          </select>
          {
            trackers?.length ?
            <>
              <label htmlFor='tracker'>Trackers</label>
              <Select
                isMulti
                name="tracker"
                options={trackersList}
                defaultValue={trackers?.map((item: any) => item)}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </>
            :
            <></> 
          }
          <label htmlFor='number_of_students'>Number of students</label>
          <input 
            style={inputStyle}
            type="number"
            name="number_of_students"
            value={editingRoom?.number_of_students}
            onChange={(e) => handleInp(e)}/>
            <input style={{...inputStyle}} type="submit" name="" id="" value="Update" />
        </form>
      </div>
    </>
  );
};

export default RoomsEdit;