import { createSlice } from "@reduxjs/toolkit";
import { IUser, IUserDetail, IUserSecond } from "src/@types/user";

interface IState {
  users: IUserSecond;
  userDetail: IUserDetail;
  user: null | object;
  loading: boolean;
  error: null | string;
}

const initialState: IState = {
  users: {} as IUserSecond,
  userDetail: {} as IUserDetail,
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
    getFailedAddPeople(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    getFailedEditPeople(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    getFailedDelete(state, action) {
      state.error = action.payload;
      state.loading = false;
    }
  },
});

const { getAllPeopleSuccess, getOnePeople, getPeopleFailed, getDetail, getFailedAddPeople, getFailedEditPeople , getFailedDelete } =
  usersSlice.actions;

const userReducer = usersSlice.reducer;
export {
  userReducer,
  getAllPeopleSuccess,
  getOnePeople,
  getPeopleFailed,
  getDetail,
  getFailedAddPeople,
  getFailedEditPeople,
  getFailedDelete,
};
