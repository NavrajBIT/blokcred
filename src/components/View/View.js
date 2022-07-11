import React, { useState } from "react";
import "./View.css";

import img1 from "../../Styles/nftimage.webp";
import img2 from "../../Styles/nftimage2.jfif";
import img3 from "../../Styles/nftimage3.jpg";

import {BiMessageError} from 'react-icons/bi';

const View = () => {
  const [connected, setConnected] = useState(true);
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
            <div className="image_container_box">
              <div className="img1">
                <img src={img1} height={300} alt="Third slide" />
                <p>The Monkey</p>
              </div>

              <div className="img1">
                <img src={img2} height={300} alt="Third slide" />
                <p>Smokey Monkey</p>
              </div>

              <div className="img1">
                <img src={img3} height={300} alt="Third slide" />
                <p>Smart Googles</p>
              </div>

              <div className="img1">
                <img src={img1} height={300} alt="Third slide" />
                <p>The Monkey</p>
              </div>

              <div className="img1">
                <img src={img2} height={300} alt="Third slide" />
                <p>Smokey Monkey</p>
              </div>

              <div className="img1">
                <img src={img3} height={300} alt="Third slide" />
                <p>Smart Googles</p>
              </div>

              <div className="img1">
                <img src={img1} height={300} alt="Third slide" />
                <p>The Monkey</p>
              </div>

              <div className="img1">
                <img src={img2} height={300} alt="Third slide" />
                <p>Smokey Monkey</p>
              </div>

              <div className="img1">
                <img src={img3} height={300} alt="Third slide" />
                <p>Smart Googles</p>
              </div>

              <div className="img1">
                <img src={img1} height={300} alt="Third slide" />
                <p>The Monkey</p>
              </div>

              <div className="img1">
                <img src={img2} height={300} alt="Third slide" />
                <p>Smokey Monkey</p>
              </div>

              <div className="img1">
                <img src={img3} height={300} alt="Third slide" />
                <p>Smart Googles</p>
              </div>
            </div>
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
                    <BiMessageError className="icon"/>
                </div>
                <h3>Connect Your MetaMask Wallet To Access  </h3>
                
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default View;
