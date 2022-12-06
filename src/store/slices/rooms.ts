import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IRoom } from "src/@types/room";
import { fetchRooms } from '../actions/room'
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
  count: number,
  next: null | string,
  previous: null | string,
  results: Array<IRoom>
}
interface IState {
  rooms: IRooms,
  loading: boolean,
  error: null | string,
}

const initialState: IState = {
  rooms: {} as IRooms,
  loading: false,
  error: null,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    // getAllRooms(state, action) {
    //   state.rooms = action.payload;
    //   state.loading = false;
    // },
    // getAllRoomsFailed(state, action) {
    //   state.error = action.payload;
    //   state.loading = false;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.pending, (state: any, action) => {
        // state.status = 'loading'
      })
      .addCase(fetchRooms.fulfilled, (state: any, action) => {
        console.log(action)
        // state.status = 'succeeded'
        // Add any fetched posts to the array
        // state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchRooms.rejected, (state: any, action) => {
        // state.status = 'failed'
        // state.error = action.error.message
      })
  }
});

export const roomsReducer = roomsSlice.reducer;
// export const { getAllRooms, getAllRoomsFailed } = roomsSlice.actions;
