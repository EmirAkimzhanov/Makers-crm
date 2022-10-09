import { AppDispatch } from "../store";
import axios from "axios";
import {
  getAllPeopleSuccess,
  getDetail,
  getPeopleFailed,
} from "../slices/users";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios(
      "http://localhost:8000/employee/" + window.location.search
    );
    dispatch(getAllPeopleSuccess(data));
  } catch (error: any) {
    dispatch(getPeopleFailed(error.message));
  }
};

export const fetchDetail = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios(`http://localhost:8000/employee/${id}`);
    dispatch(getDetail(data));
  } catch (error: any) {
    dispatch(getPeopleFailed(error.message));
  }
};
