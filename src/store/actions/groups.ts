import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API = 'http://35.184.247.17/group/groups/';

const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")!)
  : "";
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.access}`,
  },
};

export const fetchGroups = createAsyncThunk('fetchGroups', async ()=>{
  let { data } = await axios(API, config);
  return data;
})

export const createGroup = createAsyncThunk('createGroup', async (newGroup: any) => {
  console.log(newGroup);
  let res = await axios.post(API + 'create/', JSON.stringify(newGroup), config);
  return res.data
})

export const deleteGroup = createAsyncThunk('deleteGroup', async (id: any) => {
  let res = await axios.delete(API + `delete/${id}/`);
  return res
})