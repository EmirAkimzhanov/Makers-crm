import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersPage from "../src/components/user-page";
import UserDetailinfo from "./components/user-page/user-detail-info";
// import usersPage from '../../src/';

const BuildRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/1" element={<UserDetailinfo />} />
    </Routes>
  );
};

export default BuildRoutes;
