import { AppDispatch } from "../store";
import axios from "axios";
import { getAllRoomsFailed } from "../slices/rooms";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = 'http://35.184.247.17/';

const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")!)
  : "";
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token.access}`,
  },
};

// export const fetchRooms = () => async (dispatch: AppDispatch) => {
//   try {
//     const { data } = await axios(API+'room/rooms/', config);
//     console.log(data)
//     dispatch(getAllRooms(data));
//   } catch (error) {
//     dispatch(getAllRoomsFailed(error));
//   }
// };

export const fetchRooms  = createAsyncThunk('fetchRooms', async () => {
    const { data } = await axios(API + "room/rooms/", config);
    return data
})

export const getOneRoom = createAsyncThunk('getOneRoom', async (room_id: any) => {
  const { data } = await axios(API + `room/rooms/${room_id}/`, config);
  return data
})

export const updateOneRoom = createAsyncThunk('updateOneRoom', async (updatedRoom: any, room_id: any) => {
  const res = await axios.post(API + `room/rooms/update/${room_id}`, updatedRoom, config);
  console.log(res);
  return res;
})