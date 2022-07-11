import React, { useState } from "react";
import "./View.css";

import img1 from "../../Styles/nftimage.webp";
import img2 from "../../Styles/nftimage2.jfif";
import img3 from "../../Styles/nftimage3.jpg";

import { ethers } from "ethers";

import { BiMessageError } from "react-icons/bi";

const View = () => {
  const [connected, setConnected] = useState(true);
  const [certificateData, setCertificateData] = useState([]);

  const getCertificates = async () => {
    const endPoint = "http://localhost:8000/getcertificates";
    let formData = new FormData();
    formData.append("account", document.getElementById("accountField").value);
    const response = await fetch(endPoint, { method: "POST", body: formData })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return "Server error";
      });
    console.log(response);

    let metadataArray = response["token_array"];
    console.log(metadataArray);
    let balance = metadataArray.length;
    console.log(balance);
    let mycertificateData = [];
    for (let i = 0; i < balance; i++) {
      let metadata = await fetch(metadataArray[i])
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(metadata);
      mycertificateData.push(metadata);
    }
    setCertificateData(mycertificateData);
  };

  // document.getElementById("connect").addEventListener('onClick' , ()=>{
  //   alert("clicked")
  // })
  return (
    <div className="view_box">
      <div className="view_info">
        {connected ? (
          <>
            <div className="header">
              <h2>Your Digital Collections </h2>
            </div>
            <label htmlFor="accountField">Account: </label>
            <input type="text" id="accountField" />
            <button
              onClick={() => {
                getCertificates();
              }}
            >
              Get Certificates
            </button>

            {certificateData.length > 0 && (
              <div className="image_container_box">
                {certificateData.map((cert) => {
                  return (
                    <div className="img1" key={cert.name + cert.description}>
                      <img src={cert.image} height={300} alt="Third slide" />
                      <p>{cert.name}</p>
                      {cert.description}
                    </div>
                  );
                })}
              </div>
            )}
            {/* <div className="image_container_box">
              <div className="img1">
                <img src={img1} height={300} alt="Third slide" />
                <p>The Monkey</p>
              </div>
            </div> */}
          </>
        ) : (
          <>
            <div className="error_page">
              <div className="error_heading">
                <h1>ERROR 404 </h1>
                <h1>?</h1>
              </div>
              <div className="error_content">
                <div className="error_icon">
                  <BiMessageError className="icon" />
                </div>
                <h3>Connect Your MetaMask Wallet To Access </h3>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default View;
