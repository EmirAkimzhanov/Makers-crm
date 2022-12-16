import { AppDispatch } from "../store";
import axios from "axios";
import { getAllNewsSuccess, getFailedNews } from "../slices/news";

const API = "http://35.184.247.17/";

export const fetchNews = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")!)
    : "";
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };
  try {
    const { data } = await axios(
      `${API}history/` + window.location.search,
      config
    );
    dispatch(getAllNewsSuccess(data));
  } catch (error: any) {
    dispatch(getFailedNews(error.message));
  }
};
