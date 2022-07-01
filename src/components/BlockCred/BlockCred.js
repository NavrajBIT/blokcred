import React from "react";
import "./BlockCred.css";
import img1 from "../../Styles/nftimage.webp"
import img2 from "../../Styles/nftimage2.jfif"
import img3 from "../../Styles/nftimage3.jpg"

const BlockCred = () => {
  return (
    <>
      <div className="blockcred_box">
        <div className="blockcred_info">
          <div className="heading">
            <h1 className="headingtext">
              BlokCred: Digital Certifications and Badges Hub
            </h1>
          </div>

          <div className="blockcred_content_box">
            <p>
              BlokCred is a web3 application empowers individuals and  institutions to issue the digital certifications to eligible recipients. Individual users can convert their documents(Property
              Documents, Personal Identities and other sensitive files) into
              digital certifications or NFT's and store them in their own
              wallet. Hence BlockCred helps users to own their personal
              documents forever using blockchain technology.
            </p>
          </div>

          <div className="solution_content">
            <div className="heading">
              <h1>Solutions</h1>
              <h1>Institutions & Organization We Empower</h1>
            </div>
            <div className="solution_info">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />

{/* 

                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockCred;
