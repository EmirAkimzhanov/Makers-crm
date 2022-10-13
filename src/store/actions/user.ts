import { AppDispatch } from "../store";
import axios from "axios";
import {
  getAllPeopleSuccess,
  getDetail,
  getPeopleFailed,
} from "../slices/users";

const API = "http://34.69.243.149/";
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


export const handleDelete = async (id: string) => {
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")!)
    : "";
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };
  console.log(token);
  try {
    let res = await axios.delete(`${API}staff/staffs/delete/${id}/`, config);
  } catch (error) {
    console.log(error);
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


const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")!)
  : "";
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token.access}`,
  },
};

export const handleReduct = async (name: string, surname: string, position: string , id:string) => {
  let formData = new FormData();
  formData.append("name", name);
  formData.append("last_name", surname);
  formData.append("staff_position", position);
  try {
    let res = await axios.patch(
      `${API}staff/staffs/update/${id}/`,
      formData,
      config
    );
  } catch (error) {
    console.log(error);
  }
};
