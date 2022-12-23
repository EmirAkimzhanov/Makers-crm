import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAction, useAppSelector } from '../../hooks';
import Select from 'react-select';
import { getRoomId } from '../../helpers/rooms'

const inputStyle = {
  border: '1px solid black',
  margin: '5px 0',
  borderRadius: '5px',
  padding: '5px 20px'
}

const RoomsEdit = () => {
  const {id, day} = useParams();
  const { getOneGroup, fetchUsers, updateOneRoom } = useAction();
  const { room, user  } = useAppSelector((state) => state);
  const [editingRoom, setEditingRoom] = useState<any>({});
  const [trackers, setTrackers] = useState<any>([]);
  const [trackersList, setTrackersList] = useState<any>([]);

  function getDayEvenInfo() {
    return day == 'evening' ? 'evening_group' : 'day_group';
  }
  
  useEffect(() => {
    getOneGroup(id);
    fetchUsers();
  }, [])

  useEffect(() => {
    setTrackers(editingRoom?.tracker?.map((item: any) => {
      let obj = {...item,value: (item.name + " " + item.direction), label: (item.name + " " + item.direction)}
      return obj;
    }))
  }, [trackersList])

  useEffect(() => {
    setEditingRoom(room.groups);
  }, [room.groups]);

  useEffect(() => {
    setTrackersList(user.users?.results?.map((item: any) => {
      let obj = {...item,value: (item.name + " " + item?.direction), label: (item.name + " " + item?.direction)}
      return obj;
    }))
  }, [user.users])

  const handleInp = (e: any): void => {
    if(e.length){
      setEditingRoom({
        ...editingRoom,
        tracker: e,
      })
    } else {
      setEditingRoom({
        ...editingRoom,
        [e.target?.name]: e.target?.value,
      })
    }
  }
  
  const handleUpdateRoom = (e: any): void => {
    e.preventDefault();
    let obj = {...editingRoom};
    delete obj.group_studying_time;
    obj.tracker = obj.tracker?.map((item: any) => item.id)
    obj.room = Number(getRoomId(+obj.room));
    obj.number_of_students = Number(obj.number_of_students);
    updateOneRoom({data: obj, id: editingRoom?.room})
  }

  return (
    <>
      <div>
        <h2 style={{marginTop: '20px'}}>Аудитория {editingRoom?.room}</h2>
        <form style={{display: 'flex', flexDirection: 'column', margin: '30px 0', alignItems: 'flex-start'}} onSubmit={(e) => handleUpdateRoom(e)}>
          <label htmlFor="name_of_group">Group name</label>
          <input style={inputStyle} type="text" name='name_of_group' value={editingRoom?.name_of_group} onChange={(e) => handleInp(e)} />
          <label htmlFor="date_of_start">Start date</label>
          <input style={inputStyle} type="date" name='date_of_start'  value={editingRoom?.date_of_start} onChange={(e) => handleInp(e)}/>
          <label htmlFor="date_of_end">End date</label>
          <input style={inputStyle} type="date" name='date_of_end' value={editingRoom?.date_of_end} onChange={(e) => handleInp(e)}/>
          {/* <label htmlFor="group_studying_time">Study time</label>
          <select style={inputStyle}  name='group_studying_time' defaultValue={day} onChange={(e) => handleInp(e)}>
            <option value="day">Day</option>
            <option value="evening">Evening</option>
          </select> */}
          <label htmlFor="mentor">Mentor</label>
          <select style={inputStyle} name="mentor" onChange={(e) => handleInp(e)}>
            <option value={editingRoom?.mentor?.name} selected>{editingRoom?.mentor?.name}</option>
            {
              user.users.results?.map((item: any) => (
                <>
                {
                  item.staff_position == 'Mentor' ? 
                  <option key={item.id} value={item.name + " " + item.last_name}>{item.name + " " + item.direction}</option>
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
                onChange={(e) => handleInp(e)}
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
            <input style={{...inputStyle, cursor: 'pointer'}} type="submit" name="" id="" value="Update" />
        </form>
      </div>
    </>
  );
};

export default RoomsEdit;