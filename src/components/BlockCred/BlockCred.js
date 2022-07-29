import React from "react";
import "./BlockCred.css";
import "animate.css/animate.min.css";
import sampleImage from "./assets/sampleImage.jpg";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { getNumberOfCertificates } from "../apiCalls";

const BlockCred = () => {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState(0);
  const [souvenirs, setSouvenirs] = useState(0);

  useEffect(() => {
    poppulateCertificates();
  }, []);

  const poppulateCertificates = async () => {
    await getNumberOfCertificates().then((res) => {
      console.log(res);
      if (res != "Server error") {
        let onlyCertificates = res.credentials["only_certificates"];
        let onlySouvenirs = res.credentials["only_souvenirs"];
        setCertificates(onlyCertificates);
        setSouvenirs(onlySouvenirs);
      }
    });
  };

  return (
    <>
      <div className="heading animate__heartBeat">
        <h1>BitMemoir: All digital records and memories over Blockchain</h1>
      </div>

      <div className="blockcred_content_box animate__wobble">
        BitMemoir is a web3 application which empowers individuals and
        institutions to issue the digital certifications to eligible recipients.
        Individual users can convert their documents(Property Documents,
        Personal Identities and other sensitive files) into digital
        certifications or NFT's and store them in their own wallet. Hence
        BitMemoir helps users to own their personal documents forever using
        blockchain technology.
      </div>

      <div className="certificateNumber">
        <div>
          <div className="certificateheading">{certificates}</div>
          <div className="certificatetext">
            Total Number of Certificates Issued
          </div>
        </div>
        <div>
          <div className="certificateheading">{souvenirs}</div>
          <div className="certificatetext">
            Total Number of Souvenirs Issued
          </div>
        </div>
      </div>
      <div className="solution_content">
        <div className="heading">
          <h1>Our Solutions</h1>
          <h3>We Empower Individuals, Institutions &amp; Organizations </h3>
        </div>
        <div className="solution_info">
          <div
            className="card_info"
            onClick={() => {
              navigate("/institution");
            }}
          >
            <div className="image_info">
              <img
                src="https://gumlet.assettype.com/freepressjournal/2022-06/f905556f-75b1-401d-861e-80e6d6a7c407/photo_1599634874901_e919c4fe1400.jpg?format=webp&w=480&dpr=2.6"
                alt=""
              />
            </div>
            <div className="image_content">
              <h6>DIGITAL CERTIFICATES FOR UNIVERSITIES</h6>
              Verifiable digital certificate issuance to students in seconds.
            </div>
          </div>
          <div
            className="card_info"
            onClick={() => {
              navigate("/institution");
            }}
          >
            <div className="image_info">
              <img
                src="https://static.theprint.in/wp-content/uploads/2021/10/schools-1.jpg?compress=true&quality=80&w=376&dpr=2.6"
                alt=""
              />
            </div>
            <div className="image_content">
              <h6>DIGITAL CERTIFICATES FOR SCHOOLS</h6>
              From Marksheets to sports, music, dance and annual function
              certificates. Issue them all with BitMemoir.
            </div>
          </div>
          <div
            className="card_info"
            onClick={() => {
              navigate("/institution");
            }}
          >
            <div className="image_info">
              <img
                src="https://content3.jdmagicbox.com/comp/hooghly/s9/9999pxx33.xx33.171230173130.x3s9/catalogue/begampur-youth-computer-training-centre-begampur-hooghly-eqvutcsi9f.jpg?clr=002266"
                alt=""
              />
            </div>
            <div className="image_content">
              <h6>DIGITAL CERTIFICATES FOR TRAINING INSTITUTES</h6>
              Certificates for training and coaching institutes, that can be
              verified.
            </div>
          </div>
          <div
            className="card_info"
            onClick={() => {
              navigate("/create");
            }}
          >
            <div className="image_info">
              <img
                src="https://www.planndesign.com/sites/default/files/styles/1200x620/public/affiliates/2020-04/Best%20Certificate%20Folder%20for%20an%20interview.jpeg?itok=LN8Rxap6"
                alt=""
              />
            </div>
            <div className="image_content">
              <h6>DOCUMENT SECURITY FOR INDIVIDUALS</h6>
              Blockchain secured storage for individuals&apos; files and
              certificates. No need to carry your certificate folder around.
            </div>
          </div>
          <div
            className="card_info"
            onClick={() => {
              navigate("/institution");
            }}
          >
            <div className="image_info">
              <img
                src="https://bizzabo.com/wp-content/uploads/2021/09/The-Europas-Awards-Ceremony-Ideas-min.png"
                alt=""
              />
            </div>
            <div className="image_content">
              <h6>DIGITAL CERTIFICATES FOR EVENTS</h6>
              Issue awards and attendance certificates for your next event with
              BitMemoir.
            </div>
          </div>
          <div
            className="card_info"
            onClick={() => {
              navigate("/souvenir");
            }}
          >
            <div className="image_info">
              <img
                src="https://www.usmagazine.com/wp-content/uploads/2022/04/Stars-Disney-Theme-Parks-001.jpg?quality=86&strip=all"
                alt=""
              />
            </div>
            <div className="image_content">
              <h6>DIGITAL SOUVENIRS FOR DESTINATIONS</h6>
              Verified digital souvenir pics for hotels, resorts, theme parks
              etc.
            </div>
          </div>
          <div
            className="card_info"
            onClick={() => {
              navigate("/create");
            }}
          >
            <div className="image_info">
              <img
                src="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Memories"
              />
            </div>
            <div className="image_content">
              <h6>FOREVER MEMORIES</h6>
              Your memories stay with you forever with BitMemoir
            </div>
          </div>
        </div>
      </div>

      <div className="nft_information">
        <div className="heading">
          <h1>What is a digital certificate?</h1>
        </div>
        <div className="nft_description">
          <div className="nft_image_section">
            <img src={sampleImage} alt="" />
          </div>
          <div className="nft_content_section">
            A digital certificate, also known as a public key certificate, is
            used to cryptographically link ownership of a public key with the
            entity that owns it. Digital certificates are for sharing public
            keys to be used for encryption and authentication.
          </div>
        </div>
      </div>

      <div className="benefit_section">
        <div className="heading">
          <h1>WHY BitMemoir?</h1>
          <h3>BitMemoir provides many benefits</h3>
        </div>
        <div className="benefit_images">
          <div className="small_container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwffrBathcK8632URDM27GJEFIt5IuHZLamA&usqp=CAU"
              alt=""
            />
            <h5>Robust Infrastructure</h5>
          </div>

          <div className="small_container">
            <img
              src="https://109943-360218-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/11/seamless-integration-icon.jpg"
              alt=""
            />
            <h5>Seamless Integration</h5>
          </div>

          <div className="small_container">
            <img
              src="https://previews.123rf.com/images/ylivdesign/ylivdesign1607/ylivdesign160703958/59976502-data-protection-icon-in-simple-style-in-blue-square-security-symbol.jpg"
              alt=""
            />
            <h5>Data Protection</h5>
          </div>

          <div className="small_container">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h5>Verifiable Certificates</h5>
          </div>

          <div className="small_container">
            <img
              src="https://www.freeiconspng.com/thumbs/upload-documents-icon/documents-upload-icon-25.jpeg"
              alt=""
            />
            <h5>Bulk Issuance</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockCred;
