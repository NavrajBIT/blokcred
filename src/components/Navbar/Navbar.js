import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import "../../Styles/nav.css";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  let navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const selectedStyle = { border: "0.5px solid white" };
  const user = useContext(UserContext);

  const Menu = () => {
    return (
      <div className="menu" id="menu">
        <div
          className="menuItem"
          style={selectedPage === 1 ? selectedStyle : { cursor: "pointer" }}
          onClick={() => {
            setShowMenu(false);
            setSelectedPage(1);
            navigate("/home");
          }}
        >
          Home
        </div>
        <div
          className="menuItem"
          style={selectedPage === 2 ? selectedStyle : { cursor: "pointer" }}
          onClick={() => {
            setShowMenu(false);
            setSelectedPage(2);
            navigate("/create");
          }}
        >
          Individuals
        </div>
        <div
          className="menuItem"
          style={selectedPage === 3 ? selectedStyle : { cursor: "pointer" }}
          onClick={() => {
            setShowMenu(false);
            setSelectedPage(3);
            navigate("/view");
          }}
        >
          View
        </div>
        <div
          className="menuItem"
          style={selectedPage === 4 ? selectedStyle : { cursor: "pointer" }}
          onClick={() => {
            setShowMenu(false);
            setSelectedPage(4);
            navigate("/institution");
          }}
        >
          Institutions
        </div>
        <div
          className="menuItem"
          style={selectedPage === 5 ? selectedStyle : { cursor: "pointer" }}
          onClick={() => {
            setShowMenu(false);
            setSelectedPage(5);
            navigate("/souvenir");
          }}
        >
          Souvenirs
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="nav">
        <img
          src="https://beimagine.tech/wp-content/uploads/2022/04/BITlogo-white.png"
          alt="Beyond Imagination Technologies"
          width="150"
          onClick={() => {
            setSelectedPage(1);
            navigate("/home");
          }}
        />

        <div className="nav-center">
          <button
            style={selectedPage === 2 ? selectedStyle : { cursor: "pointer" }}
            id="nav-center-create"
            onClick={() => {
              setSelectedPage(2);
              navigate("/create");
            }}
          >
            Individuals
          </button>

          <button
            style={selectedPage === 3 ? selectedStyle : { cursor: "pointer" }}
            id="nav-center-view"
            onClick={() => {
              setSelectedPage(3);
              navigate("/view");
            }}
          >
            View
          </button>

          <button
            style={selectedPage === 4 ? selectedStyle : { cursor: "pointer" }}
            id="nav-center-institutions"
            onClick={() => {
              setSelectedPage(4);
              navigate("/institution");
            }}
          >
            Institutions
          </button>
          <button
            style={selectedPage === 5 ? selectedStyle : { cursor: "pointer" }}
            id="nav-center-souvenir"
            onClick={() => {
              setSelectedPage(5);
              navigate("/souvenir");
            }}
          >
            Souvenirs
          </button>
        </div>

        <div className="nav-menu">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            Menu
          </button>
        </div>

        <button
          onClick={() => {
            user.login();
          }}
        >
          {user.isConnected ? "Connected" : "Connect"}
        </button>
      </div>

      <div className="nav-center-down">
        <button
          style={selectedPage === 2 ? selectedStyle : { cursor: "pointer" }}
          id="nav-center-create"
          onClick={() => {
            setSelectedPage(2);
            navigate("/create");
          }}
        >
          Individuals
        </button>

        <button
          style={selectedPage === 3 ? selectedStyle : { cursor: "pointer" }}
          id="nav-center-view"
          onClick={() => {
            setSelectedPage(3);
            navigate("/view");
          }}
        >
          View
        </button>

        <button
          style={selectedPage === 4 ? selectedStyle : { cursor: "pointer" }}
          id="nav-center-institutions"
          onClick={() => {
            setSelectedPage(4);
            navigate("/institution");
          }}
        >
          Institutions
        </button>
        <button
          style={selectedPage === 5 ? selectedStyle : { cursor: "pointer" }}
          id="nav-center-souvenir"
          onClick={() => {
            setSelectedPage(5);
            navigate("/souvenir");
          }}
        >
          Souvenirs
        </button>
      </div>

      {showMenu && <Menu />}
    </>
  );
};

export default Navbar;
