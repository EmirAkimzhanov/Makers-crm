import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = 'http://35.184.247.17/';

const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")!)
  : "";
const config = {
  headers: {
    "Content-Type": "application/json",
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

export const getOneGroup = createAsyncThunk('getOneGroup', async (room_id: any) => {
  const { data } = await axios(API + `group/groups/${room_id}/`, config);
  return data
})

export const updateOneRoom = createAsyncThunk('updateOneRoom', async (info: any) => {
  try {
    console.log(info)
    const res = await axios.patch(API + `group/groups/update/${info.data.id}/`, JSON.stringify(info.data), config);
    return res;
  } catch (error) {
    return error;
  }
})

export const getFreeDayRooms = createAsyncThunk('getFreeDayRooms', async () => {
  const { data } = await axios(API + 'room/rooms/free/day/');
  return data;
})

export const getFreeEveningRooms = createAsyncThunk('getFreeEveningRooms', async () => {
  const { data } = await axios(API + 'room/rooms/free/evening/');
  return data;
})