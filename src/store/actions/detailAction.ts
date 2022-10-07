import { AppDispatch } from "../store";
import axios from "axios";
import { getDetail, getPeopleFailed } from "../slices/usersSlice";

export const fetchDetail = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios(`http://localhost:8000/employee/${id}`);
    dispatch(getDetail(data));
  } catch (error: any) {
    dispatch(getPeopleFailed(error.message));
  }
};
