import React from "react";
import { useState, useEffect, useContext } from "react";
import "./admin.css";
import AddAdminPage from "./addAdminPage";
import UserContext from "../../context/userContext/UserContext";
import { adminApi, userApi } from "../Scripts/apiCalls";
import UserDetailsContainer from "./userdetailsContainer";
import { SubNavbar } from "./SubNavbar";
import { SideBar } from "./SideBar";
import { Contentdashboard } from "./Contentdashboard";


export const AdminPage = () => {
  const user = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [status, setStatus] = useState("Checking credentials...");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    checkAdminCredentials();
  }, [user]);

  const checkAdminCredentials = () => {
    adminApi({ account: user.userAccount })
      .then((res) => {
        setStatus("");
        setIsAdmin(true);
        poppulateUserData();
      })
      .catch((err) => {
        setIsAdmin(false);
        setStatus("Please connect with an admin account.");
      });
  };

  const poppulateUserData = () => {
    userApi({ account: user.userAccount, querry_all: "querry_all" })
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((err) => {
        setStatus("Something went wrong.");
      });
  };

  return (
    <div >
      {status}
      {isAdmin && (
        <div>
          {/* <AddAdminPage />
          {users.length > 0 && (
            <UserDetailsContainer users={users} update={poppulateUserData} />
          )} */}
      <div className="dashboardpage1">
        <SubNavbar />
        <div className="dashboardmain">
          <SideBar />
          <Contentdashboard />
        </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default AdminPage;
