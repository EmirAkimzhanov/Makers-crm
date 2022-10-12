import axios from "axios";
import React, { Component, useState } from "react";
import {Input, Button} from "../../@UI";

const AddProduct = () => {
  const API = "http://34.69.243.149/";
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")!)
    : "";
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");
  const handleadd = async (name: string, surname: string, position: string) => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("last_name", surname);
    formData.append("staff_position", position);
    try {
      let res = await axios.post(
        `${API}staff/staffs/create/`,
        formData,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const create = () => {
    console.log('DFFD');
    
    handleadd(name, surname, position);
  };

  return (
    <div>
      <div style={{ marginLeft: "20%", marginTop: "10%" }}>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700">
              Add Employee
            </label>
  
          <Input value={name} setValue={setName} />
          <Input value={surname} setValue={setSurname} />
          <Input value={position} setValue={setPosition} />
          
            <div className="flex space-x-2 justify-center">
              <Button onClick={create}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
