import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../../Styles/nav.css";

const Navbar = () => {
  let navigate = useNavigate();
  const [clickedOn, setClickedOn] = useState({
    create: false,
    buy: false,
    sell: false,
  });
  const navigateTo = (e) => {
    let value = e.target.value;
    if (value === "create") {
      navigate("/create");
      document.getElementById("block").style.border = "none";
      // document.getElementById('block').style.color = "white"
      // document.getElementById('create').style.border = "2px solid #00e7e7"
      // document.getElementById('create').style.color = "#00e7e7"
      // document.getElementById('view').style.border = "none"
      // document.getElementById('view').style.color = "white"
      // document.getElementById('institution').style.border = "none"
      // document.getElementById('institution').style.color = "white"
    } else if (value === "buy") {
      navigate("/buy");
    } else if (value === "sell") {
      navigate("/sell");
    } else if (value === "institution") {
      navigate("/institution");
      document.getElementById("block").style.border = "none";
      // document.getElementById('block').style.color = "white"
      // document.getElementById('institution').style.border = "2px solid #00e7e7"
      // document.getElementById('institution').style.color = "#00e7e7"
      // document.getElementById('view').style.border = "none"
      // document.getElementById('view').style.color = "white"
      // document.getElementById('create').style.color = "white"
      // document.getElementById('create').style.border = "none"
    } else if (value === "view") {
      navigate("/view");
      document.getElementById("block").style.border = "none";
      // document.getElementById('block').style.color = "white"
      // document.getElementById('view').style.border = "2px solid #00e7e7"
      // document.getElementById('view').style.color = "#00e7e7"
      // document.getElementById('create').style.border = "none"
      // document.getElementById('create').style.color = "white"
      // document.getElementById('institution').style.border = "none"
      // document.getElementById('institution').style.color = "white"
    } else if (value === "blockcred") {
      navigate("/blockcred");
      document.getElementById("block").style.border = "2px solid white";
      // document.getElementById('block').style.color = "#00e7e7"
      // document.getElementById('create').style.color = "white"
      // document.getElementById('create').style.border = "none"
      // document.getElementById('view').style.color = "white"
      // document.getElementById('view').style.border = "none"
      // document.getElementById('institution').style.border = "none"
      // document.getElementById('institution').style.color = "white"
    } else {
      alert("There is no page like this one ");
      // document.getElementById('create').style.border = "2px solid white"
      // document.getElementById('view').style.border = "2px solid white"
      // document.getElementById('institution').style.border = "2px solid white"
    }
  };

  const mouse = (e) => {
    // console.log(e.target.value);
    const val = e.target.value;
    if (val === "blockcred") {
      document.getElementById("block").style.border = "2px solid white";
    } else if (val === "create") {
      // document.getElementById("create").style.border="2px solid white"
    } else if (val === "view") {
      // document.getElementById("view").style.border="2px solid white"
    } else if (val === "institution") {
      // document.getElementById("institution").style.border="2px solid white"
    }
  };
  return (
    <>
      <div
        className="nav"
        //   style={{backdropFilter: "initial" ,  boxShadow: "0 5px 1em rgba(0, 0, 0, 0.2277777830759684)"}}
      >
        <div className="logo">
          {/* <img src="" alt="" /> */}
          <div className="header">
            {/* <h3 style={{fontSize : "35px"}}>Blo ckCred</h3> */}
            <img
              src="https://beimagine.tech/wp-content/uploads/2022/04/BITlogo-white.png"
              alt=""
              width="150"
            />
          </div>
        </div>
        <div className="buttons">
          <div className="blockcred">
            <button
              value="blockcred"
              onMouseOver={mouse}
              id="block"
              style={{ border: "2px solid white" }}
              onClick={navigateTo}
            >
              {" "}
              BlokCred{" "}
            </button>
          </div>
          <div className="create">
            <button
              value="create"
              onMouseOver={mouse}
              id="create"
              onClick={navigateTo}
            >
              {" "}
              Individuals{" "}
            </button>
          </div>

          <div className="view">
            <button
              value="view"
              onMouseOver={mouse}
              id="view"
              onClick={navigateTo}
            >
              {" "}
              View{" "}
            </button>
          </div>
          <div className="institution">
            <button
              value="institution"
              onMouseOver={mouse}
              id="institution"
              onClick={navigateTo}
            >
              {" "}
              Institutions{" "}
            </button>
          </div>

          {/* <div className="buy">   
                    <button value="buy" onClick={navigateTo} >Buy</button>
                </div>
                <div className="sell">
                    <button value="sell" onClick={navigateTo} > Sell</button>
                </div> */}
          {/* <div className="sell">
                    <button value="sell" onClick={navigateTo} > Sell</button>
                </div> */}
        </div>
        <div className="connect">
          {/* <button>$0.02</button> */}
          <button value="connect" onClick={navigateTo}>
            {" "}
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
