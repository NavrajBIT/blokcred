import React from "react";
import "./footer.css";
import linkedin from "./assets/linkedinlogo.svg";
import instagram from "./assets/instagramlogo.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img
          src="https://beimagine.tech/wp-content/uploads/2022/04/BITlogo-white.png"
          alt="Beyond Imagination Technologies"
          height="100"
        />
      </div>
      <div>
        Copyright © 2022 Beyond Imagination Technologies Pvt. Ltd. All right
        reserved.
      </div>
      <div className="contactform">
        <div>Contact Us</div>
        <div>support@beimagine.tech</div>
        <div className="social">
          <img
            src={linkedin}
            alt="linkedIn"
            height="40"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/beyond-imagination-technlogies-pvt-ltd/?viewAsMember=true"
              );
            }}
          />
          <img
            src={instagram}
            alt="instagram"
            height="50"
            onClick={() => {
              window.open("https://www.instagram.com/bitindiaofficial/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
