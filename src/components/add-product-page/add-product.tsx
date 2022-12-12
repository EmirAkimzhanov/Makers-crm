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
    addNewUser(name, surname, position , direction , contract  , training , experience , endTraining ,rank);
  };
console.log(position);

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
          style={{border:"1px solid gray" , width:"100%" , height:"40px" , borderRadius:"3px" , marginBottom:"20px"}}
          placeholder='name' 
          onChange={(e)=>setName(e.target.value)}
          />
          <input 
          style={{border:"1px solid gray" , width:"100%" , height:"40px" , borderRadius:"3px" , marginBottom:"20px"}}
          placeholder='surname' 
          onChange={(e)=>setSurname(e.target.value)}
          />
          <input 
          style={{border:"1px solid gray" , width:"100%" , height:"40px" , borderRadius:"3px" , marginBottom:"20px"}}
          placeholder='direction' 
          onChange={(e)=>setDirection(e.target.value)}
          />
          <input 
          style={{border:"1px solid gray" , width:"100%" , height:"40px" , borderRadius:"3px" , marginBottom:"20px"}}
          placeholder='contract details' 
          onChange={(e)=>setContract(e.target.value)}
          />
          <input 
          style={{border:"1px solid gray" , width:"100%" , height:"40px" , borderRadius:"3px" , marginBottom:"20px"}}
          placeholder='start of training' 
          onChange={(e)=>setTraining(e.target.value)}
          />
          <input 
          style={{border:"1px solid gray" , width:"100%" , height:"40px" , borderRadius:"3px" , marginBottom:"20px"}}
          placeholder='tracker experience' 
          onChange={(e)=>setExperience(e.target.value)}
          />
          <input 
          style={{border:"1px solid gray" , width:"100%" , height:"40px" , borderRadius:"3px" , marginBottom:"20px"}}
          placeholder='end of training' 
          onChange={(e)=>setEndTraining(e.target.value)}
          />
          <input 
          style={{border:"1px solid gray" , width:"100%" , height:"40px" , borderRadius:"3px" , marginBottom:"20px"}}
          placeholder='rank' 
          onChange={(e)=>setRank(e.target.value)}
          />
          <select  name="dog-names" id="dog-names" onChange={(e)=>setPosition(e.target.value)}>
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
