import "./Footer.css";

import logo from "../assets/logo.png";
import linkedinlogo from "./assets/linkedinlogo.svg";
import instagramlogo from "./assets/instagramlogo.svg";
import Twitterlogo from "./assets/twitter-square-color-icon.svg";
import Telegram from "./assets/telegram-icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerborder"></div>
      <div className="footercontainer">
        <div className="footerlogocontainer">
          <img
            src={logo}
            alt="BEYOND IMAGINATION TECHNOLOGIES"
            onClick={() => {
              window.open("https://www.bitindiaofficial.tech/");
            }}
          />
        </div>

        <div className="contactcontainer">
          Contact us:
          <div>
            <a href="mailto:support@beimagine.tech">support@beimagine.tech</a>
          </div>
          <div className="socialcontainer">
            <img
              src={linkedinlogo}
              alt=""
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/company/beyond-imagination-technlogies-pvt-ltd/?viewAsMember=true"
                );
              }}
            />
            <img
              src={instagramlogo}
              alt=""
              onClick={() => {
                window.open("https://www.instagram.com/bitindiaofficial/");
              }}
            />
                    <img
          src={Twitterlogo}
          alt=""
          height="90"
          width="90"
          onClick={() => {
            window.open("https://twitter.com/Bit_Memoir");
          }}
        />
        <img
          src={Telegram}
          alt=""
          height="100"
          width="100"
          onClick={() => {
            window.open("https://t.me/bitmemoirofficial");
          }}
        />
          </div>
        </div>
      </div>
      <div className="copyrightcontainer">
        Copyright © 2022 Beyond Imagination Technologies Pvt. Ltd. All right
        reserved.
      </div>
    </div>
  );
};

export default Footer;
