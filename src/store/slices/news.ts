import { createSlice } from "@reduxjs/toolkit";

interface INews  {
    id: number;
    action_time: string;
    object_id: string;
    object_repr: string;
    action_flag: null | string;
    change_massege:string;
    user:number;
    content_type:number;
  }
  

  interface IState {
    news: INews,
    loading: boolean,
    error: null | string,
  }

  const initialState: IState = {
    news: {} as INews,
    loading: false,
    error: null,
  };

  const newsSlice=createSlice({
    name:'news',
    initialState,
    reducers:{
        getAllNewsSuccess(state, action) {
            state.news = action.payload;
            state.loading = false;
          },
          getFailedNews(state, action) {
            state.error = action.payload;
            state.loading = false;
          }
    }
  })

  const {getAllNewsSuccess , getFailedNews}=newsSlice.actions

  export const newsReducer = newsSlice.reducer;

  export{
    getAllNewsSuccess,
    getFailedNews,
  }