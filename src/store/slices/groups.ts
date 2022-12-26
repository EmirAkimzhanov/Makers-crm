import { createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';
import { createGroup, deleteGroup, fetchGroups } from '../actions/groups'

interface IGroups {
  id: number,
  count: number,
  next: null | string,
  previous: null | string,
  results: Array<any>,
}

const initialState: any = {
  groups: {} as IGroups,
  loading: false,
  error: null,
};

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGroups.pending, (state: any, action) => {
        state.status = 'loading'
      })
      .addCase(fetchGroups.fulfilled, (state: any, action) => {
        state.status = 'succeeded'
        state.groups = action.payload
      })
      .addCase(fetchGroups.rejected, (state: any, action) => {
        state.status = 'failed'
      })
      .addCase(createGroup.pending, (state: any, action) => {
        state.status = 'loading'
      })
      .addCase(createGroup.fulfilled, (state: any, action) => {
        state.status = 'succeeded'
        console.log(state.status)
      })
      .addCase(createGroup.rejected, (state: any, action) => {
        state.status = 'failed'
        console.log(action)
      })
      .addCase(deleteGroup.pending, (state: any, action) => {
        state.status = 'loading'
      })
      .addCase(deleteGroup.fulfilled, (state: any, action) => {
        state.status = 'succeeded'
        console.log(state.status)
      })
      .addCase(deleteGroup.rejected, (state: any, action) => {
        state.status = 'failed'
        console.log(action)
      })
  }
});

export const groupsReducer = groupSlice.reducer;
