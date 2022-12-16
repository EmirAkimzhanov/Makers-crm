import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IRoom } from "src/@types/room";
import { fetchRooms, getOneGroup, getOneRoom, updateOneRoom } from '../actions/room'
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

interface IRooms {
  id: number,
  count: number,
  next: null | string,
  previous: null | string,
  results: Array<IRoom>,
  capacity?: number,
  room_number?: number,
  room_status_day?: boolean,
  room_status_evening?: boolean,
  day_group: any[],
  evening_group: any[],
}
interface IState {
  rooms: IRooms,
  loading: boolean,
  error: null | string,
  groups: any,
}

const initialState: IState = {
  rooms: {} as IRooms,
  loading: false,
  error: null,
  groups: {},
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    // getAllRooms(state, action) {
    //   state.rooms = action.payload;
    //   state.loading = false;
    // },
    getAllRoomsFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.pending, (state: any, action) => {
        // state.status = 'loading'
      })
      .addCase(fetchRooms.fulfilled, (state: any, action) => {
        state.rooms = action.payload;
        state.loading = false;
        state.status = 'succeeded';
        // state.status = 'succeeded'
        // Add any fetched posts to the array
        // state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchRooms.rejected, (state: any, action) => {
        state.status = 'failed';
        // state.error = action.error.message
      })
      .addCase(getOneRoom.pending, (state: any, action) => {
        state.status = 'loading';
      })
      .addCase(getOneRoom.fulfilled, (state: any, action) => {
        state.status = 'succeeded';
        state.rooms = action.payload;
      })
      .addCase(getOneRoom.rejected, (state: any, action) => {
        console.log(action , "ERRROR");
        
        state.status = 'failed';
      })
      .addCase(getOneGroup.pending, (state: any, action) => {
        state.status = 'loading';
      })
      .addCase(getOneGroup.fulfilled, (state: any, action) => {
        state.status = 'succeeded';
        state.groups = action.payload;
      })
      .addCase(getOneGroup.rejected, (state: any, action) => {
        console.log(action , "ERRROR");
        
        state.status = 'failed';
      })
      .addCase(updateOneRoom.pending, (state: any, action) => {
        state.status = 'pending';
      })
      .addCase(updateOneRoom.fulfilled, (state: any, action) => {
        state.status = 'succeeded';
      })
      .addCase(updateOneRoom.rejected, (state: any, action) => {
        state.status = 'rejected';
        console.log(action)
      })
  }
});

export const roomsReducer = roomsSlice.reducer;
export const { getAllRoomsFailed } = roomsSlice.actions;
