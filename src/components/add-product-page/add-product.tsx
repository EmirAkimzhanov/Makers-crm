import axios from "axios";
import React, { Component, useState } from "react";

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
            <input
              type="text"
              className="
        form-control
        block
        w-full
        mb-5
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlInput1"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        mb-5
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlInput1"
              placeholder="surname"
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        mb-5
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlInput1"
              placeholder="staff position"
              onChange={(e) => setPosition(e.target.value)}
            />
            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={create}
              >
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
