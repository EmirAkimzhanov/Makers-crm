import React, { useState, useEffect  } from 'react';
import Select from 'react-select';
import { useAction, useAppSelector } from '../../hooks';
import "./add-group.css"

const AddGroup = () => {
  const { user } = useAppSelector((state) => state);
  const [trackersList, setTrackersList] = useState<any>([]);
  const { fetchUsers, createGroup } = useAction();
  const [mentorsList, setMentorsList] = useState<any>([]);
  const [newGroup, setNewGroup] = useState({
    name_of_group: '',
    date_of_start: '',
    date_of_end: '',
    group_studying_time: '',
    number_of_students: 0,
    is_graduated: false,
    mentor: {},
    room: 0,
    tracker: [],
  })

  useEffect(()=>{
    fetchUsers()
  },[])

  useEffect(() => {
    setTrackersList(user.users?.results?.map((item: any) => {
      let obj = {...item,value: (item.name + " " + item?.direction), label: (item.name + " " + item?.direction), is_tracker: true}
      return obj;
    }))
    setMentorsList(user.users?.results?.filter((item: any) => item.staff_position == "Mentor")?.map((item: any) => {
      let obj = {...item, value: (item.name + " " + item?.direction), label: (item.name + " " + item?.direction), is_mentor: true}
      return obj;
    }))}, [user.users])

  const handleInp = (e: any): void => {
    if(e?.is_mentor){
      setNewGroup({
        ...newGroup,
        mentor: e.id,
      })
    } else if(e?.length){
      setNewGroup({
        ...newGroup,
        tracker: e,
      })
      console.log(newGroup);
    } else if(e.target.name === 'room'){
      setNewGroup({
        ...newGroup,
        room: 10,
      })
    } else {
      setNewGroup({
        ...newGroup,
        [e.target.name]: e.target.value,
      })
    }
    }

    const handleSubmit = (e: any) => {
      console.log(newGroup);
      e.preventDefault();
      createGroup(({...newGroup, tracker: newGroup?.tracker.map((item: any) => item.id), number_of_students: +newGroup.number_of_students}));
    }

  return (
    <div className='group__inputs_container'>
      <form action="" className='group__inputs_form' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="group_name">Group name</label>
        <input name="name_of_group" id="group_name" type="text" onChange={(e) => handleInp(e)} />
        <label htmlFor="start_date">Start date</label>
        <input name="date_of_start" id="start_date" type="date" onChange={(e) => handleInp(e)} />
        <label htmlFor="end_date">End date</label>
        <input name="date_of_end" id="end_date" type="date" onChange={(e) => handleInp(e)} />
        <label htmlFor="group_time">Group time</label>
        <select name="group_studying_time" id="group_time" onChange={(e) => handleInp(e)}>
          <option value="" disabled></option>
          <option value="day">Day</option>
          <option value="evening">Evening</option>
        </select>
        <label htmlFor="number_students">Number of students</label>
        <input name="number_of_students" id="number_students" type="number" onChange={(e) => handleInp(e)}/>
        {
          mentorsList?.length ?
          <>
            <label htmlFor="group_mentor">Mentor</label>
            <Select 
            name="mentor"
            id="group_mentor"
            options={mentorsList}
            onChange={(e) => handleInp(e)}/>
          </> :
          <></>
       }
       {
        trackersList?.length ?
        <>
          <label htmlFor="group_tracker">Trackers</label>
          <Select
            name="tracker"
            id="group_tracker"
            options={trackersList}
            isMulti
            onChange={(e) => handleInp(e)}
          />
        </> : <></>
       }

        <label htmlFor="group_room">Room</label>
        <input name="room" id="group_room" type="number" onChange={(e) => handleInp(e)}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddGroup;