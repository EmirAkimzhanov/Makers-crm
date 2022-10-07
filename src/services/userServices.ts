import axios from "axios";
import React, { Component } from "react";

class userServices extends Component {
  baseUrl = "http://localhost:8000/employee";

  getAllPeople = async () => {
    const { data } = await axios(this.baseUrl);
    return data;
  };
}

export default userServices;
