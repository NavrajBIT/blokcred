import React from "react";
import { useState, useEffect } from "react";
import { getIssuerDetails } from "../apiCalls";

export const Issuer = (props) => {
  const [issuer, setIssuer] = useState("Verified Issuer");
  useEffect(() => {
    getIssuerName(props.address);
  });
  const getIssuerName = async (address) => {
    return await getIssuerDetails(address)
      .then((res) => {
        if (res.status != "Server error") {
          if (res.status === "Success") {
            setIssuer(res.credentials.name);
          } else {
            setIssuer("Verified Issuer");
          }
        } else {
          setIssuer("Verified Issuer");
        }
      })
      .catch((err) => {
        setIssuer("Verified Issuer");
      });
  };

  return issuer;
};

export default Issuer;
