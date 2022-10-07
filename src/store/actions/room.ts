import { AppDispatch } from "../store";
import axios from "axios";
import { getAllRooms, getAllRoomsFailed } from "../slices/roomsSlice";

export const fetchRooms = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    dispatch(getAllRooms(data));
  } catch (error) {
    dispatch(getAllRoomsFailed(error));
  }
}