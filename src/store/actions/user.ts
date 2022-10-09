import { AppDispatch } from "../store";
import axios from "axios";
import {
  getAllPeopleSuccess,
  getDetail,
  getPeopleFailed,
} from "../slices/users";

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
