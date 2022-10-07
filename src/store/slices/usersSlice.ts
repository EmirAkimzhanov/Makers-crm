import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "src/@types/userTypes";
import { IDetail } from "src/@types/detailTypes";

interface IState {
  users: IUser[];
  userDetail: IDetail;
  user: null | object;
  loading: boolean;
  error: null | string;
}

const initialState: IState = {
  users: [],
  userDetail: {} as IDetail,
  user: null,
  loading: true,
  error: null,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllPeopleSuccess(state, action) {
      state.users = action.payload;
      state.loading = false;
    },
    getDetail(state, action) {
      state.userDetail = action.payload;
      state.loading = false;
    },
    getPeopleFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    getOnePeople(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
  },
});

const { getAllPeopleSuccess, getOnePeople, getPeopleFailed, getDetail } =
  usersSlice.actions;

const userReducer = usersSlice.reducer;
export {
  userReducer,
  getAllPeopleSuccess,
  getOnePeople,
  getPeopleFailed,
  getDetail,
};
