import React from "react";

import "./Institution.css";

const Institution = () => {
  return (
    <>
      <div className="institution_box">
        <div className="institution_info">
            <div className="heading_box">
                <h2>Create your digital credentials or NFTs</h2>
            </div>
          <div className="no_of_certificate">
            <label htmlFor="number">Total Number Of Certificates Required</label>
            <input type="number" id="number" placeholder="Number Of Certificates Required" />
          </div>

          <div className="upload_sample_certificate">
            <label htmlFor="sample">Upload Sample Certificate</label>
            <input type="file" id="file" aria-label="File browser example"  placeholder='Upload Sample Certificate'/>
            
            {/* <label class="file">
              <span class="file-custom"></span>
            </label> */}
          </div>

          <div className="receiver_details">
            <label htmlFor="receiver">
              Upload Certificate Receiver Details
            </label>
            <input type="file" placeholder="Upload Certificate Details"  />
          </div>

          <div className="create_button">
            <button>Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Institution;
