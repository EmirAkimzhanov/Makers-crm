import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import "./rooms-page.css"

const RoomsPage = () => {

  const [floor, setFloor] = useState(1);
  const navigate = useNavigate();

  // const floor = useRef(1); no re-render 

  const handleFloor = (): void => {
    floor ? setFloor(0) : setFloor(1);
    // if(floor.current){
    //   floor.current = 0;
    // } else {
    //   floor.current = 1;
    // }
    // console.log(floor);
  }


  return (
    <>
      <div className='rooms-page-container'>
        <button className='floor-change-btn' onClick={handleFloor}>change floor</button>
        <div className="rooms-container">
          {
            floor ?
              <div className="floor-container"> {/* 1 floor */}
                <div className='floor-leftside'>
                  <div className='room kitchen' onClick={()=>navigate('/rooms/kitchen')}>kitchen</div>
                  <div className='room sales' onClick={()=>navigate('/rooms/sales')}>sales<div className='gay'>Шаба педик</div></div>
                  <div className='room room1' onClick={()=>navigate('/rooms/1')}>room1</div>
                  <div className='room room4' onClick={()=>navigate('/rooms/4')}>room4</div>
                </div>
                <div className='floor-rightside updateside'>
                  <div className='room room11' onClick={()=>navigate('/rooms/11')}>room11</div>
                  <div className='room room9' onClick={()=>navigate('/rooms/9')}>room9</div>
                  <div className='room room8' onClick={()=>navigate('/rooms/8')}>room8</div>
                </div>
              </div>
              :
              <div className="floor-container"> {/* 0 floor */}
                <div className="floor-leftside">
                  <div className='room meeting' onClick={()=>navigate('/rooms/meeting')}>meeting room</div>
                  <div className='room room24' onClick={()=>navigate('/rooms/24')}>24 room</div>
                  <div className='room room22' onClick={()=>navigate('/rooms/22')}>22 room</div>
                  <div className='room aqua' onClick={()=>navigate('/rooms/19')}>aquarium</div>
                </div>

                <div className='floor-rightside'>
                  <div className='room production' onClick={()=>navigate('/rooms/prod')}>production</div>
                  <div className='room studio' onClick={()=>navigate('/rooms/studio')}>studio</div>
                  <div className='room room14'>14 room</div>
                  <div className='room room18'>18 room</div>
                </div>
              </div>
          }
        </div>
      </div>
    </>
  );
};

export default RoomsPage;