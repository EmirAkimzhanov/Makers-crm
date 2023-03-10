import { configureStore } from "@reduxjs/toolkit";
import { groupsReducer } from "./slices/groups";
import { newsReducer } from "./slices/news";
import { roomsReducer } from "./slices/rooms";
import { userReducer } from "./slices/users";

export const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomsReducer,
    news:newsReducer,
    groups: groupsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
