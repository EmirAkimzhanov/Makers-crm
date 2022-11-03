import { AppDispatch } from "../store";
import axios from "axios";
import {
  getAllPeopleSuccess,
  getDetail,
  getFailedAddPeople,
  getPeopleFailed,
} from "../slices/users";

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
      "http://34.69.243.149/staff/staffs/" + window.location.search,
      config
    );
    dispatch(getAllPeopleSuccess(data));
  } catch (error: any) {
    dispatch(getPeopleFailed(error.message));
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
      `http://34.69.243.149/staff/staffs/${id}/`,
      config
    );
    dispatch(getDetail(data));
  } catch (error: any) {
    dispatch(getPeopleFailed(error.message));
  }
};

export const addNewUser = (name: string, surname: string, position: string) => async (dispatch: AppDispatch) => {
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
    console.log(res)
  } catch (error: any) {
    dispatch(getFailedAddPeople(error.message));
    console.log(error);
  }
};
