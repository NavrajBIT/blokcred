import React, { useState } from "react";
import "./Navbar.css";
import menu from "./assets/menu.svg";
import logo from "../assets/logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import { Button } from "@mui/material";

const Navbar = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const [aboutustext, setaboutustext] = useState("About Us")

  const Menubar = () => {
    return (
      <div className="menubar">
        <div
          className="menupad"
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        ></div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/home");
            setIsMenu(false);
          }}
        >
          Home
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/individual");
            setIsMenu(false);
          }}
        >
          Individuals
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/view");
            setIsMenu(false);
          }}
        >
          View
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/institution");
            setIsMenu(false);
          }}
        >
          Institutions
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/souvenir");
            setIsMenu(false);
          }}
        >
          Souvenirs
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/verify");
            setIsMenu(false);
          }}
        >
          Verify
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/bitwalletpage");
            setIsMenu(false);
          }}
        >
          BitWallet
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/contact");
            setIsMenu(false);
          }}
        >
          Contact Us
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/team");
            setIsMenu(false);
          }}
        >
          Team
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/roadmap");
            setIsMenu(false);
          }}
        >
          RoadMap
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/partners");
            setIsMenu(false);
          }}
        >
          Partners
        </div>
        <div
          className="menuitem"
          onClick={() => {
            navigate("/partners");
            setIsMenu(false);
          }}
        >
          Contact Us
        </div>
      </div>
    );
  };
  return (
    <div className="navbar">
      <div className="logocontainer">
        <img
          src={logo}
          alt="BEYOND IMAGINATION TECHNOLOGIES"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="navbuttoncontainer">
        {/* <div className="navbutton" onClick={() => navigate("/individual")}>
          Individuals
        </div>
        <div className="navbutton" onClick={() => navigate("/view")}>
          View
        </div>
        <div className="navbutton" onClick={() => navigate("/institution")}>
          Institutions
        </div> */}
        <div className="navbutton" >
          <div class="dropdown">
            <Button class="dropbtn">Create</Button>
            <div class="dropdown-content">
              <a onClick={() => {
                navigate("/individual")
                // setaboutustext("Team")
              }}>Individuals</a>
              <a onClick={() => {
                navigate("/institution")
              }}>          Sectors
              </a>
            </div>
          </div>
        </div>
        <div className="navbutton" onClick={() => navigate("/view")}>
          View
        </div>
        <div className="navbutton" onClick={() => navigate("/souvenir")}>
          Souvenirs
        </div>
        <div className="navbutton" onClick={() => navigate("/verify")}>
          Verify
        </div>
        <div className="navbutton" onClick={() => navigate("/bitwalletpage")}>
          BitWallet
        </div>
        {/* <div className="navbutton" onClick={() => navigate("/partners")}>
        Partners
        </div> */}
      </div>
      <div className="menucontainer">
        <img
          src={menu}
          alt="Menu"
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        />
      </div>
      {isMenu && <Menubar />}
      {/* <div className="logocontainer">
        <img
          src={logo}
          alt="BEYOND IMAGINATION TECHNOLOGIES"
          onClick={() => navigate("/home")}
        />
      </div> */}
      <div className="navrightbuttoncontainer">
        <div class="dropdown">
          <Button class="">{aboutustext}</Button>
          <div class="dropdown-content">
            <a onClick={() => {
              navigate("/team")
              // setaboutustext("Team")
            }}>Team</a>
            <a onClick={() => {
              navigate("/roadmap")
            }}>RoadMap</a>
            <a onClick={() => {
              navigate("/whitepapper")
              // setaboutustext("WhitePaper")
            }}>WhitePaper </a>
            <a onClick={() => {
              navigate("/tokenomics")
              // setaboutustext("Tokenomics")
            }}>Tokenomics</a>
            <a onClick={() => {
              navigate("/partners")
              // setaboutustext("Partners")
            }}>Partners</a>
            <a onClick={() => {
              navigate("/contact")
              // setaboutustext("Partners")
            }}>Contact Us</a>
          </div>
        </div>
        {user.iswalletAvailable ? (
          user.isConnected ? (
            <div className="whitebutton">
              <button onClick={() => navigate("/dashboard")}>
                <DashboardIcon sx={{ fontSize: 20, marginRight: "5px" }} />
                Dashboard
              </button>
            </div>
          ) : (
            <div className="whitebutton">
              <button
                onClick={() => {
                  user.login();
                }}
              >
                Connect
              </button>
            </div>
          )
        ) : (
          <div className="whitebutton">
            <button
              onClick={() => {
                window.open("https://metamask.io");
              }}
            >
              Get Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
