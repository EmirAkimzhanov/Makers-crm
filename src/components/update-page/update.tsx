import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAction } from "../../hooks";

const Update = () => {
    const { fetchDetail } = useAction();
    const { handleReduct } = useAction();
    const { id} = useParams();
  
    useEffect(() => {
      fetchDetail(id!);
    }, [id]);
  
    
  
  
    const { userDetail: user } = useAppSelector((state) => state.user);
  
    console.log(user);
   
    const [updateName, setUpdateName] = useState("");
    const [updateSurname, setUpdateSurname] = useState("");
    const [updatePosition, setUpdatePosition] = useState("");
    
    
   
    
    const reduct = () => {
      handleReduct(updateName, updateSurname, updatePosition , id!);
    };
  
    return (
        <div>
        <div style={{ marginLeft: "20%", marginTop: "10%" }}>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label className="form-label inline-block mb-2 text-gray-700">
                Edit Employee
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
                onChange={(e) => setUpdateName(e.target.value)}
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
                onChange={(e) => setUpdateSurname(e.target.value)}
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
                onChange={(e) => setUpdatePosition(e.target.value)}
              />
              <div className="flex space-x-2 justify-center">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={reduct}
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

export default Update;