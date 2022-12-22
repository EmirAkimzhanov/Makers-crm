import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useAction, useAppSelector } from "../../hooks";
import "./rooms-details.css";


const RoomsDetails = () => {
  const [filter, setFilter] = useState("switch day");
  const { id } = useParams();
  const { getOneRoom } = useAction();
  const { rooms } = useAppSelector((state) => state.room);
  const [slots, setSlots] = useState([1]);
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
        getOneRoom(id);
        location.search == "?=evening" ? setFilter('switch evening') : setFilter('switch day');
    }, []);

    useEffect(()=>{
      setSlots(slotsFill(rooms.capacity));
    }, [rooms, id])

    function group() {
      return filter == "switch day" ? 'day_group' : 'evening_group';
    }

    function slotsFill(capacity: number | any): any {
      let res: any = [];
      for(let i = 1; i <= capacity; i++){
        res.push(i);
      }
      return [...res];
    }

    console.log(rooms)

    return (
        <div className="room-details-container">
            <h1 className="room-name">Аудитория - {rooms?.room_number}</h1>
            <div className="header-container">
                <div
                    className="header-elem day-night_filter"
                    onClick={() =>
                        filter == "switch day"
                            ? setFilter("switch evening")
                            : setFilter("switch day")
                    }
                >
                    <div className={filter}></div>
                </div>
                <div className="header-elem group_name">{rooms[group()] && rooms[group()][0]?.name_of_group}</div>
                <div className="header-elem group_quantity">{rooms[group()] && rooms[group()][0]?.number_of_students}/{rooms.capacity}</div>
            </div>
            <div className="slots-container">
                {slots.map((item, index) => (
                    <div
                        className="slot"
                        key={index}
                        style={
                            index >= (rooms[group()] && rooms[group()][0]?.number_of_students)
                                ? {
                                      backgroundColor: "#fff",
                                      border: "1px solid lightgray",
                                  }
                                : {}
                        }
                    ></div>
                      ))}
            </div>
            <div className="room-staff">
            <button className="room_update-btn" onClick={() => navigate(`/rooms/edit/${rooms[group()][0]?.id}/${filter.split(' ')[1]}`)}>update</button>

                <h2>
                    Mentor: <span className="staff-names" onClick={() => navigate(`/users/${rooms[group()][0]?.mentor.id}`)}>{rooms[group()] && rooms[group()][0]?.mentor.name}</span>
                </h2>
                <h2>
                    Trackers:{" "}
                    {rooms[group()] && rooms[group()][0]?.tracker.map((tracker: any, ind: any) => (
                        <span key={ind} className="staff-names" onClick={()=>navigate(`/users/${tracker.id}`)}>
                            {tracker.name}
                        </span>
                    ))}
                </h2>
                {/* <h2>
                    Curator:{" "}
                    <span className="staff-names">{rooms[group()] && rooms[group()][0].}</span>
                </h2> */}
            </div>
        </div>
    );
};

export default RoomsDetails;

