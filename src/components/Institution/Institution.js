import React from "react";
import "./Institution.css";

import certificate1 from "../CertificateImages/certificate1.png";
import certificate2 from "../CertificateImages/certificate2.png";
import certificate3 from "../CertificateImages/certificate3.png";
import certificate4 from "../CertificateImages/certificate4.png";
import certificate5 from "../CertificateImages/certificate5.png";

const Institution = () => {
  return (
    <>
      <div className="institution_box">
        <div className="institution_info">
          <div className="heading_box">
            <h2>Please contact us to issue certificates in bulk.</h2>
          </div>
          <div className="heading_box">
            <h2>email: support@beimagine.tech</h2>
          </div>
          Sample Certificates:
          <div className="samplecertificate">
            <img
              src={certificate1}
              alt="Sample certificate"
              height="200"
              width="300"
            />
            <img
              src={certificate2}
              alt="Sample certificate"
              height="200"
              width="300"
            />
            <img
              src={certificate3}
              alt="Sample certificate"
              height="200"
              width="300"
            />
            <img
              src={certificate4}
              alt="Sample certificate"
              height="200"
              width="300"
            />
            <img
              src={certificate5}
              alt="Sample certificate"
              height="200"
              width="300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Institution;
