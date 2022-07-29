import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import "./View.css";
import ConnectionPage from "../connectionPage/connectionPage";
import { getCertificates } from "../apiCalls";

import Issuer from "./Issuer";
import Myfile from "./myfile";

const View = () => {
  const user = useContext(UserContext);
  const [certificateData, setCertificateData] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    poppulateCertificates();
  }, [user]);

  const poppulateCertificates = async () => {
    if (user.userAccount != "") {
      setStatus("Loading my certificates...");
      await getCertificates(user.userAccount)
        .then((res) => {
          console.log(res);
          if (res.status === "Success") {
            setCertificateData(res.categories);
            setStatus("");
          } else {
            setStatus(
              "Something went wrong loading your files. Please refresh or try again in some time."
            );
          }
        })
        .catch((err) => {
          setStatus(
            "Something went wrong loading your files. Please refresh or try again in some time."
          );
        });
    }
  };

  return (
    <div className="view_box">
      {!user.isConnected ? (
        <ConnectionPage />
      ) : (
        <div className="view_info">
          <div className="header">
            <h2>My Digital Collections </h2>
          </div>
          <div style={{ color: "red" }}>{status}</div>
          {Object.keys(certificateData).length > 0 && (
            <div>
              {Object.keys(certificateData).map((category) => {
                return (
                  <div>
                    <div className="categoryname">
                      {category === user.userAccount ? (
                        "Personal Files"
                      ) : (
                        <Issuer address={category} />
                      )}
                    </div>
                    <div className="category" key={category}>
                      <div className="mycertificates">
                        {certificateData[category].map((file) => {
                          return (
                            <Myfile
                              file={file}
                              category={category}
                              key={category + file.name}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default View;
