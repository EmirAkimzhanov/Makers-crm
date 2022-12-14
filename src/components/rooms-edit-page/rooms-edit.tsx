import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAction, useAppSelector } from '../../hooks';

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

  function getDayEvenInfo() {
    return day == 'evening' ? 'day_group' : 'evening_group';
  }

  useEffect(() => {
    getOneRoom(id);
    fetchUsers();
  }, [])

  useEffect(() => {
    setEditingRoom(room.rooms[getDayEvenInfo()] && room.rooms[getDayEvenInfo()][0])
  }, [room.rooms])

  console.log(editingRoom)
  console.log(user.users.results)


  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', margin: '30px 0', alignItems: 'flex-start'}}>
        <label htmlFor="name_of_group">Group name</label>
        <input style={inputStyle} type="text" name='name_of_group' value={editingRoom?.name_of_group} onChange={(e) => setEditingRoom({...editingRoom, name_of_group: e.target.value})} />
        <label htmlFor="date_of_start">Start date</label>
        <input style={inputStyle} type="date" name='date_of_start'  value={editingRoom?.date_of_start}/>
        <label htmlFor="date_of_end">End date</label>
        <input style={inputStyle} type="date" name='date_of_end' value={editingRoom?.date_of_end}/>
        <label htmlFor="day_even">Study time</label>
        <select style={inputStyle}  name='day_even' defaultValue={day}>
          <option value="day">Day</option>
          <option value="evening">Evening</option>
        </select>
        <label htmlFor="mentor">Mentor</label>
        <select style={inputStyle} name="mentor" defaultValue={editingRoom?.mentor?.split(' ')[0]}>
          {
            user.users.results?.map((item: any) => (
              <>
              {
                item.staff_position == 'Mentor' ? 
                <option value={item.name}>{item.name}</option>
                : <></>
              }
              </>
            ))
          }
        </select>
      </div>
    </>
  );
};

export default RoomsEdit;