import axios from 'axios';
import React, { Component } from 'react';

class userServices extends Component {
  baseUrl = "https://jsonplaceholder.typicode.com/users";

  getAllPeople = async () => {
    const {data} = await axios(this.baseUrl);
    return data;
  }

}

export default userServices;