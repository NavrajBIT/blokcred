import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

import { ethers } from "ethers";

const UserState = (props) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : null;
  const signer = provider != null ? provider.getSigner() : null;

  const [isConnected, setIsConnected] = useState(false);
  const [userAccount, setUserAccount] = useState("");

  useEffect(() => {
    console.log("UseEffect");
    if (signer != null) {
      signer
        .getAddress()
        .then((res) => {
          console.log(res);
          setUserAccount(res);
          setIsConnected(true);
        })
        .catch((err) => {
          setIsConnected(false);
        });
    } else {
      setIsConnected(false);
    }
  });

  const iswalletAvailable = window.ethereum != null;

  const login = async () => {
    await provider
      .send("eth_requestAccounts", [])
      .then((res) => {
        setIsConnected(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("doing this now..");

    if (signer != null) {
      await signer
        .getAddress()
        .then((res) => {
          console.log(res);
          setUserAccount(res);
          setIsConnected(true);
        })
        .catch((err) => {
          setIsConnected(false);
        });
    }
  };

  return (
    <UserContext.Provider
      value={{
        signer,
        provider,
        login,
        iswalletAvailable,
        isConnected,
        userAccount,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
