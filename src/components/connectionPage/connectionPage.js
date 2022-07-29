import React from "react";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

import "./connectionPage.css";

const ConnectionPage = () => {
  const user = useContext(UserContext);
  return (
    <div>
      {user.iswalletAvailable ? (
        <div className="metamask">
          <h2>Please connect you wallet.</h2>
          <h4>This won&apos;t cost you any gas.</h4>
          <button
            onClick={() => {
              user.login();
            }}
          >
            Connect
          </button>
        </div>
      ) : (
        <div className="metamask">
          <h2>Seems like you don't have a blockchain wallet installed.</h2>
          <h2>Download Metamask here:</h2>
          <a href="https://metamask.io/">Download Metamask</a>
          <h1>A blockchain wallet is your entry to the WEB3.0 world</h1>
          <h2>Learn more about metamask</h2>
          <div>
            <iframe
              src="https://www.youtube.com/embed/YVgfHZMFFFQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectionPage;
