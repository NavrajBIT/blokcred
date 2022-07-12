import React from "react";
import "./BlockCred.css";
import "animate.css/animate.min.css";
 
import img5 from "../../Styles/digitalCertificate.png";

import infrastructure from "../../Styles/infrastructure.png"
import integration from "../../Styles/integration.png"
import data from "../../Styles/data.png"
import privacy from "../../Styles/privacy.png"
import verifiable from "../../Styles/verifiable.jpg"
import bulk from "../../Styles/bulk.png"

import image1  from "../DemoImages/image1.jpg"
import image2  from "../DemoImages/image2.jpg"
import image3  from "../DemoImages/image3.jpg"
import image4  from "../DemoImages/image4.jpg"
import image5  from "../DemoImages/image5.jpg"
import image6  from "../DemoImages/image6.png"


const BlockCred = () => {
  return (
    <>

      <div className="blockcred_box">
        <div className="blockcred_info">
          <div className="heading animate__heartBeat">
            <h1 className="headingtext">
              BlokCred: Digital Certifications and Badges Hub
            </h1>
          </div>

          <div className="blockcred_content_box animate__wobble">
            <p className="animate__pulse">
              BlokCred is a web3 application empowers individuals and
              institutions to issue the digital certifications to eligible
              recipients. Individual users can convert their documents(Property
              Documents, Personal Identities and other sensitive files) into
              digital certifications or NFT's and store them in their own
              wallet. Hence BlockCred helps users to own their personal
              documents forever using blockchain technology.
            </p>

            <div className="back"></div>
          </div>

          <div className="solution_content">
            <div className="heading">
              <h1>Solutions</h1>
              <h1>Institutions & Organization We Empower</h1>
            </div>
            <div className="solution_info">
              <div className="card_info" >
                <div className="image_info">
                  <img src={image1} alt="" />
                </div>
                <div className="image_content">
                <h6>DIGITAL CERTIFICATES FOR UNIVERSITIES</h6>
                <p>With TruScholar you can leverage the power of technology to digitize your institute's future. .</p>
                </div>
              </div>

              <div className="card_info" >
                <div className="image_info">
                  <img src={image3} alt="" />
                </div>
                <div className="image_content">
                <h6>DIGITAL CERTIFICATES FOR E-LEARNING AND ONLINE COURSES</h6>
                <p>Enhance your learner's journey with modern digital credentials infrastructure..</p>
                </div>
              </div>

              <div className="card_info" >
                <div className="image_info">
                  <img src={image2} alt="" />
                </div>
                <div className="image_content">
                  <h6>DIGITAL CERTIFICATES FOR CORPORATE TRAINING</h6>
                  <p>Amplify your training outcomes with permanent digital certificates & badges. </p>
                </div>
              </div>

              <div className="card_info" >
                <div className="image_info">
                  <img src={image4} alt="" />
                </div>
                <div className="image_content">
                <h6>DIGITAL CERTIFICATES FOR UNIVERSITIES</h6>
                <p>With TruScholar you can leverage the power of technology to digitize your institute's future. .</p>
                </div>
              </div>

              <div className="card_info" >
                <div className="image_info">
                  <img src={image5} alt="" />
                </div>
                <div className="image_content">
                <h6>DIGITAL CERTIFICATES FOR E-LEARNING AND ONLINE COURSES</h6>
                <p>Enhance your learner's journey with modern digital credentials infrastructure..</p>
                </div>
              </div>

              <div className="card_info" >
                <div className="image_info">
                  <img src={image6} alt="" />
                </div>
                <div className="image_content">
                  <h6>DIGITAL CERTIFICATES FOR CORPORATE TRAINING</h6>
                  <p>Amplify your training outcomes with permanent digital certificates & badges. </p>
                </div>
              </div>
 
              {/* 

                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" /> */}
            </div>
          </div>

          <div className="nft_information">
            <div className="nft_image_section">
              <img src={img5} alt="" />
            </div>
            <div className="nft_content_section">
              <div className="heading" style={{ textAlign: "left" }}>
                <h2>What is a digital certificate?</h2>
              </div>
              <p>
                A digital certificate, also known as a public key certificate,
                is used to cryptographically link ownership of a public key with
                the entity that owns it. Digital certificates are for sharing
                public keys to be used for encryption and authentication.
              </p>
            </div>
          </div>


          <div className="benefit_section">
            <div className="heading">
              <h2>WHY BLOKCRED?</h2>
              <h2>BENEFITS OF USING BLOKCRED</h2>
            </div>
            <div className="benefit_images">
                <div className="small_container">
                  <img src={infrastructure} alt="" />
                  <p>Robust
                  <br /> Infrastructure</p>
                </div>


                <div className="small_container">
                  <img src={integration} alt="" />
                  <p>Seamless <br /> Integration</p>
                </div>

                <div className="small_container">
                  <img src={data} alt="" />
                  <p>Data <br /> Protection</p>
                </div>

                <div className="small_container">
                  <img src={privacy} alt="" />
                  <p>Privacy <br /> Compilance </p>
                </div>

                <div className="small_container">
                  <img src={verifiable} alt="" />
                  <p>Verifiable <br />  Certificates</p>
                </div>

                <div className="small_container">
                  <img src={bulk} alt="" />
                  <p>Bulk <br />  Issuance</p>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockCred;
