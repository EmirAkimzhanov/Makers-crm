import axios from "axios";
import React, { Component, useState } from "react";
import { useAction } from "../../hooks";
import {Input, Button} from "../../@UI";

const AddProduct = () => {
  const { addNewUser } = useAction();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");

  const create = () => {
    addNewUser(name, surname, position);
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
