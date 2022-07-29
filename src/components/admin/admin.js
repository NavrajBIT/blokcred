import React from "react";
import AdminPage from "./adminPage";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import ConnectionPage from "../connectionPage/connectionPage";

export const Admin = () => {
  const user = useContext(UserContext);

  return (
    <div className="adminPage">
      {user.isConnected ? <AdminPage /> : <ConnectionPage />}
    </div>
  );
};

export default Admin;
