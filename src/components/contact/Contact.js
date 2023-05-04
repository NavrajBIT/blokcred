import "./Contact.css";
import linkedinlogo from "../footer/assets/linkedinlogo.svg";
import instagramlogo from "../footer/assets/instagramlogo.svg";
import Twitterlogo from "../footer/assets/twitter-square-color-icon.svg";
import Telegram from "../footer/assets/telegram-icon.svg";
import React from "react";
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlineMail } from "react-icons/hi" 
import {SiMarketo} from "react-icons/si";

const Contact = () => {
  return (
    <div className="contactpage">
      <h3>Reach out to us at:</h3>
      <div>
        <div>
          <div className="flex justify-center">
            <IoLocationOutline style={{ fontWeight: "800", fontSize: "3rem" }} className="text-4xl font-bold" />
            <div style={{ marginTop: "auto", marginBottom: "auto" }} className="text-xl font-bold">
              Location :
            </div>
          </div>
          <p className="font-bold">Beyond imagination tech LLC </p>
          <p className="font-bold">M03 Laffa restaurant building, </p>
          <p className="font-bold"> Sheikh Khalifa Bin Zayed St - opp. Burjuman Mall, </p>
          <p className="font-bold"> Dubai,United Arab Emirates</p>
        </div>
      </div>
      <hr style={{ width: "50vw" }} />
      <div className="flex">
        <HiOutlineMail style={{ fontWeight: "700", fontSize: "2rem" }} className="text-4xl font-bold" />
        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="text-xl font-bold">
          :  support@beimagine.tech
        </div>
      </div> 
      <br />
      <div className="flex">{" "}
        <SiMarketo style={{ fontWeight: "700", fontSize: "2rem" }} className="text-4xl font-bold" />
        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="text-xl font-bold">
          :  marketing@beimagine.tech
        </div>
      </div>
      <h3>Check out our social:</h3>
      <div className="contactsocialcontainer">
        <img
          src={linkedinlogo}
          alt="BitMemoir Linkedin"
          height="100"
          width="50"
          onClick={() => {
            window.open("https://www.linkedin.com/company/bitmemoir-latam/");
          }}
        />
        <img
          src={instagramlogo}
          alt="BitMemoir Instagram"
          height="200"
          width="120"
          onClick={() => {
            window.open(
              "https://instagram.com/bitmemoir_latam?igshid=YmMyMTA2M2Y="
            );
          }}
        />
        <img
          src={Twitterlogo}
          alt=""
          height="90"
          width="40"
          onClick={() => {
            window.open("https://twitter.com/bitmemoir_latam?s=21&t=caq4RpG9bzxouodNg7bJBw");
          }}
        />
        <img
          src={Telegram}
          style={{
            marginLeft: "30px"
          }}
          alt=""
          height="100"
          width="50"
          onClick={() => {
            window.open("https://t.me/bitmemoirofficial");
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
