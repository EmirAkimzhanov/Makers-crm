import axios from "axios";
import React, { Component, useRef, useState } from "react";
import { useAction } from "../../hooks";
import {Input, Button} from "../../@UI";

const AddProduct = () => {
  const { addNewUser } = useAction();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [direction, setDirection] = useState("");
  const [position, setPosition] = useState("");
  const [contract , setContract] = useState('');
  const [training , setTraining] = useState('');
  const [experience , setExperience] = useState('');
  const [endTraining , setEndTraining] = useState('');
  const [rank , setRank] = useState('');
 
  const create = () => {
    // if(name == '' || surname == '' || direction == '' || position == '' || contract == '' || training == '' || experience == '' || name == '' || endTraining || rank == '' ){
      
    // }
    // else{

    // }
    addNewUser(name, surname, position , direction , contract  , training , experience , endTraining ,rank);
    
  };
console.log(position);

const inputStyle = {
  border:"1px solid gray",
  width:"100%",
  height:"40px",
  borderRadius:"3px",
  marginBottom:"20px",
  padding: '0 15px'
}

  return (
    <div>
      <div style={{ marginLeft: "20%", marginTop: "10%" }}>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700">
              Add Employee
            </label>
        <form>
          <input 
          required
          style={inputStyle}
          placeholder='name' 
          onChange={(e)=>setName(e.target.value)}
          />
          <input 
          required
          style={inputStyle}
          placeholder='surname' 
          onChange={(e)=>setSurname(e.target.value)}
          />
          <input 
          required
          style={inputStyle}
          placeholder='direction' 
          onChange={(e)=>setDirection(e.target.value)}
          />
          <label htmlFor="contract_details" className="new_user_labels">Contract details</label>
          <input 
          id="contract_details"
          type="date"
          required
          style={inputStyle}
          placeholder='contract details' 
          onChange={(e)=>setContract(e.target.value)}
          />
          <label htmlFor="start_training" className="new_user_labels">Start of training</label>
          <input 
          id="start_training"
          required
          style={inputStyle}
          type="date"
          placeholder='start of training' 
          onChange={(e)=>setTraining(e.target.value)}
          />
          <input 
          required
          style={inputStyle}
          placeholder='tracker experience' 
          onChange={(e)=>setExperience(e.target.value)}
          />
          <label htmlFor="end_of_training" className="new_user_labels">End of training</label>
          <input 
          id="end_of_training"
          required
          style={inputStyle}
          type="date"
          placeholder='end of training' 
          onChange={(e)=>setEndTraining(e.target.value)}
          />
          <input 
          required
          style={inputStyle}
          placeholder='rank' 
          onChange={(e)=>setRank(e.target.value)}
          />
          <select required  name="dog-names" id="dog-names" onChange={(e)=>setPosition(e.target.value)}>
            <option value="" >select position</option>
              <option value="Mentor" >Mentor</option>
              <option  value="Curator" >Curator</option>
              <option value="Tracker" >Tracker</option>
          </select>
            <div className="flex space-x-2 justify-center mt-5" >
              <Button onClick={create} type='submit' />
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
