import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "src/@types/userTypes"

interface IState {
  users: IUser[],
  user: null | object,
  loading: boolean,
  error: null | string,
}

const initialState: IState = {
  users: [],
  user: null,
  loading: true,
  error: null,
}

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      getAllPeopleSuccess(state, action){
        state.users = action.payload
        state.loading = false
      },
      getPeopleFailed(state, action){
        state.error = action.payload
        state.loading = false
      },
      getOnePeople(state, action){
        state.user = action.payload
        state.loading = false
      },
  },
  })

 const { getAllPeopleSuccess, getOnePeople, getPeopleFailed } = usersSlice.actions 
 
const userReducer = usersSlice.reducer
export  {userReducer, getAllPeopleSuccess, getOnePeople, getPeopleFailed}