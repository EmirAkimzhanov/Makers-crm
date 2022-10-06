import { configureStore } from "@reduxjs/toolkit";
import { roomsReducer } from "./slices/roomsSlice";
import  { userReducer }  from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
