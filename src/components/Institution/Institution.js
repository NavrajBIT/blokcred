import React from "react";

import "./Institution.css";

const Institution = () => {
  const createCertificate = async () => {
    const endPoint = "http://localhost:8000/generatecertificate";
    let formData = new FormData();
    formData.append("name", document.getElementById("nameField").value);
    formData.append(
      "description",
      "This is a certificate of attendance for APAC education event"
    );
    formData.append("account", document.getElementById("accountField").value);
    const response = await fetch(endPoint, { method: "POST", body: formData })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
  };
  return (
    <>
      <div className="institution_box">
        <div className="institution_info">
          <div className="heading_box">
            <h2>Create your digital credentials or NFTs</h2>
          </div>
          <div className="no_of_certificate">
            <label htmlFor="nameField">Attendee Name</label>
            <input type="text" id="nameField" placeholder="Enter name" />
          </div>
          <div className="no_of_certificate">
            <label htmlFor="accountField">Account address</label>
            <input type="text" id="accountField" placeholder="Enter address" />
          </div>

          {/* <div className="upload_sample_certificate">
            <label htmlFor="sample">Upload Sample Certificate</label>
            <input
              type="file"
              id="file"
              aria-label="File browser example"
              placeholder="Upload Sample Certificate" */}
          {/* /> */}

          {/* <label class="file">
              <span class="file-custom"></span>
            </label> */}
          {/* </div> */}

          {/* <div className="receiver_details">
            <label htmlFor="receiver">
              Upload Certificate Receiver Details
            </label>
            <input type="file" placeholder="Upload Certificate Details" />
          </div> */}

          <div className="create_button">
            <button
              onClick={() => {
                createCertificate();
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Institution;
