import axios from "axios";

export const adminLogin = async (email: string, password: string) => {
  let formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  try {
    let res = await axios.post(`http://34.69.243.149/api/token/`, formData);
    console.log(res.data);
    localStorage.setItem("token", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};
