import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    getAllRooms(state, action) {
      state.rooms = action.payload;
      state.loading = false;
    },
    getAllRoomsFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const roomsReducer = roomsSlice.reducer;
export const { getAllRooms, getAllRoomsFailed } = roomsSlice.actions;
