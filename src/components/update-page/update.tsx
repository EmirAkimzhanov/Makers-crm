import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAction } from "../../hooks";

const Update = () => {
    const { fetchDetail } = useAction();
    const { handleReduct } = useAction();
    const { id } = useParams();

    useEffect(() => {
      fetchDetail(id!);
    }, [id]);
  
    const { userDetail: user } = useAppSelector((state) => state.user);
    const navigate = useNavigate()
  

    console.log(user , 'hi');
   
    const [updateName, setUpdateName] = useState(user.name || '');
    const [updateSurname, setUpdateSurname] = useState(user.last_name || '');
    const [updatePosition, setUpdatePosition] = useState(user.staff_position || '');
    const [updateDirection, setUpdateDirection] = useState(user.direction || '');
    const [updateContract, setUpdateContract] = useState(user.plans_to_leave || '');
    const [updateTraining, setUpdateTraining] = useState(user.start_of_training || '');
    const [updateExperience, setUpdateExperience] = useState(user.tracker_experience || '');
    const [updateEndTraining, setUpdateEndTraining] = useState(user.end_of_training || '');
    const [updateRank, setUpdateRank] = useState(user.staff_rank || '');
    
    const reduct = (e: any) => {
      e.preventDefault();
      handleReduct(updateName, updateSurname, updatePosition , updateDirection, updateContract,updateTraining,updateExperience,updateEndTraining,updateRank, id!);
      navigate(`/users/${id}`);
      window.location.reload();
    };
    return (
        <div>
        <div style={{ marginLeft: "20%", marginTop: "10%" }}>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
            
              <label className="form-label inline-block mb-2 text-gray-700">
                Edit Employee
              </label>
              <form style={{display:"flex" , flexDirection:"column"}} onSubmit={(e) => reduct(e)}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="upd-name">Name:</label>
                  <input id="upd-name" value={updateName} style={{marginBottom:"20px" , border:"2px solid gray" , borderRadius:"5px"}}  placeholder="name" onChange={(e)=>setUpdateName(e.target.value)}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="upd-surname">Last name:</label>
                  <input id="upd-surname" value={updateSurname} style={{marginBottom:"20px" , border:"2px solid gray" , borderRadius:"5px"}} placeholder="surname" onChange={(e)=>setUpdateSurname(e.target.value)}></input>
                </div>
                {/* <input value={updateDirection} style={{marginBottom:"20px" , border:"2px solid gray" , borderRadius:"5px"}} placeholder="direction" onChange={(e)=>setUpdateDirection(e.target.value)}></input> */}
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="upd-contract">Contract till:</label>
                  <input id="upd-contract" value={updateContract} style={{marginBottom:"20px" , border:"2px solid gray" , borderRadius:"5px"}} placeholder="contract details" onChange={(e)=>setUpdateContract(e.target.value)}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="upd-trainig">Training start:</label>
                  <input id="upd-training" value={updateTraining} style={{marginBottom:"20px" , border:"2px solid gray" , borderRadius:"5px"}} placeholder="start of training" onChange={(e)=>setUpdateTraining(e.target.value)}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="upd-exp">Experience:</label>
                  <input id="upd-exp" value={updateExperience} style={{marginBottom:"20px" , border:"2px solid gray" , borderRadius:"5px"}} placeholder="experience" onChange={(e)=>setUpdateExperience(e.target.value)}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="upd-end_training">Training end:</label>
                  <input id="upd-end_training" value={updateEndTraining} style={{marginBottom:"20px" , border:"2px solid gray" , borderRadius:"5px"}} placeholder="end of training" onChange={(e)=>setUpdateEndTraining(e.target.value)}></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="upd-rank">Rank:</label>
                  <select id="upd-rank" value={updateRank} style={{marginBottom:"20px" , border:"2px solid gray" , borderRadius:"5px"}} placeholder="rank" onChange={(e)=>setUpdateRank(e.target.value)}>
                    <option value="Trainee">Trainee</option>
                    <option value="Ronin">Ronin</option>
                    <option value="Ninja">Ninja</option>
                    <option value="Samurai">Samurai</option>
                    <option value="Daimio">Daimio</option>
                  </select>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="dog-names">Position:</label>
                  <select style={{  border:"2px solid gray" , borderRadius:"5px", marginBottom:"20px"}}  name="dog-names" id="dog-names" onChange={(e) => setUpdatePosition(e.target.value)} >
                    {/* <option value="" >Position</option> */}
                    <option value="Mentor" >Mentor</option>
                    <option  value="Curator" >Curator</option>
                    <option value="Tracker" >Tracker</option>
                  </select>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <label htmlFor="worst-dog-names">Direction:</label>
                  <select style={{border:"2px solid gray" , borderRadius:"5px"}}  name="dog-names" id="worst-dog-names" onChange={(e) => setUpdateDirection(e.target.value)} >
                    {/* <option value="" >Direction</option> */}
                    <option value="JS" >JS</option>
                    <option  value="Py">Py</option>
                  </select>
                </div>
              {/* onChange={(e) => setUpdatePosition(e.target.value)} */}
              <div className="flex space-x-2 justify-center">
                <button
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block mt-5 px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={(e) => reduct(e)}
                >
                  Click me
                </button>
                
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Update;