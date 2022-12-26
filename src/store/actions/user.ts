import { AppDispatch } from "../store";
import axios from "axios";
import {
  getAllPeopleSuccess,
  getDetail,
  getFailedAddPeople,
  getFailedDelete,
  getFailedEditPeople,
  getFailedMentorsFree,
  getPeopleFailed,
  getUsersFreeMentors,
} from "../slices/users";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const API = "http://35.184.247.17/";


const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")!)
  : "";
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token.access}`,
  },
};

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")!)
    : "";
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };
  try {
    const { data } = await axios(
      `${API}staff/staffs/` + window.location.search,
      config
    );
    dispatch(getAllPeopleSuccess(data));
  } catch (error: any) {
    dispatch(getPeopleFailed(error.message));
  }
};


export const getFreeMentors=()=>async(dispatch: AppDispatch)=>{
  try {
    const { data } = await axios(
      `${API}staff/staffs/free_mentor/` + window.location.search,
      config
    );
    dispatch(getUsersFreeMentors(data));
    console.log(data);
    
  } catch (error: any) {
    dispatch(getFailedMentorsFree(error.message));
  }
}




export const handleDelete = (id: string) => async (dispatch: AppDispatch) =>{
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")!)
    : "";
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };
  try {
    let res = await axios.delete(`${API}staff/staffs/delete/${id}/`, config);
  } catch (error:any) {
    console.log(error);
    dispatch(getFailedDelete(error.message));
  }
};

export const fetchDetail = (id: string) => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")!)
    : "";
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };

  try {
    const { data } = await axios(
      `${API}staff/staffs/${id}/`,
      config
    );
    dispatch(getDetail(data));
  } catch (error: any) {
    dispatch(getPeopleFailed(error.message));
  }
};

export const addNewUser = (name: string, surname: string, position: string , direction:string , contract:string,training:string,experience:string,endTraining:string,rank:string) => async (dispatch: AppDispatch) => {
  let formData = new FormData();
  formData.append("name", name);
  formData.append("last_name", surname);
  formData.append("staff_position", position);
  formData.append("direction", direction);
  formData.append("plans_to_leave", contract);
  formData.append("start_of_training", training);
  formData.append("tracker_experience", experience);
  formData.append("end_of_training", endTraining);
  formData.append("staff_rank", rank);

  try {
    let res = await axios.post(
      `${API}staff/staffs/create/`,
      formData,
      config
    );
    console.log(res)
  } catch (error: any) {
    dispatch(getFailedAddPeople(error.message));
    console.log(error);
  }
};

export const handleReduct = (name: string, surname: string, position: string , direction:string , contract:string,training:string,experience:string,endTraining:string,rank:string , id:string) => async (dispatch: AppDispatch) => {
  let formData = new FormData();
  formData.append("name", name);
  formData.append("last_name", surname);
  formData.append("staff_position", position);
  formData.append("direction", direction);
  formData.append("plans_to_leave", contract);
  formData.append("start_of_training", training);
  formData.append("tracker_experience", experience);
  formData.append("end_of_training", endTraining);
  formData.append("staff_rank", rank);
  try {
    let res = await axios.patch(
      `${API}staff/staffs/update/${id}/`,
      formData,
      config
    );
    console.log(res)
    fetchDetail(id!);
  } catch (error: any) {
    dispatch(getFailedEditPeople(error.message));
    console.log(error);
  }
};