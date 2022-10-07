import { AppDispatch } from "../store";
import axios from "axios";
import { getAllPeopleSuccess, getPeopleFailed } from "../slices/usersSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios("http://localhost:8000/employee");
    dispatch(getAllPeopleSuccess(data));
  } catch (error: any) {
    dispatch(getPeopleFailed(error.message));
  }
};
