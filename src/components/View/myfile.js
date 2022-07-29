import React from "react";
import "./View.css";
import downloadIcon from "../../icons/download.svg";
import VerifiedIcon from "../../icons/verified.png";
import { useState } from "react";

export const Myfile = (props) => {
  const [ispreview, setIspreview] = useState(false);
  const fileDownload = async (url, fileName) => {
    fileName = fileName + ".png";
    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
      //Convert the Byte Data to BLOB object.
      var blob = new Blob([req.response], {
        type: "application/octetstream",
      });

      //Check the Browser type and download the File.
      var isIE = false || !!document.documentMode;
      if (isIE) {
        window.navigator.msSaveBlob(blob, fileName);
      } else {
        var url = window.URL || window.webkitURL;
        let link = url.createObjectURL(blob);
        var a = document.createElement("a");
        a.setAttribute("download", fileName);
        a.setAttribute("href", link);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    };

    req.send();
  };

  const PreviewPage = () => {
    let currentpos = window.pageYOffset;
    console.log(currentpos);

    return (
      <>
        <div className="previewpage"></div>
        <div className="previewpane" style={{ marginTop: currentpos }}>
          <div
            className="closeIcon"
            onClick={() => {
              setIspreview(!ispreview);
            }}
          >
            X
          </div>
          <div>Preview</div>
          <div className="previewimage">
            <img src={props.file.file_url} alt="" height="300" width="100%" />
          </div>
          {props.file.is_verified && (
            <>
              <div className="verifiedLogo">
                <img
                  src={VerifiedIcon}
                  alt="BIT verified"
                  height="50"
                  width="50"
                />
              </div>
              <div className="verifiedtext">Verified</div>
            </>
          )}
          <div className="previewtext">
            <div>Name:</div>
            <div>{props.file.name}</div>
            <div>Description:</div>
            <div>{props.file.description}</div>
          </div>
          <div
            className="previewdownloadIcon"
            onClick={() => {
              let url = props.file.file_url;
              let filestructlength = url.split("/").length;
              let laststruct = parseInt(filestructlength) - 1;
              let filename = url.split("/")[laststruct];
              fileDownload(url, filename);
            }}
          >
            Download
            <img src={downloadIcon} alt="" height="50" width="50" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {ispreview && <PreviewPage />}

      <div
        className="myfile"
        onClick={() => {
          setIspreview(!ispreview);
        }}
      >
        <div className="imageContainer">
          <img
            src={props.file.file_url}
            alt={props.file.name}
            height="100"
            width="100%"
          />
        </div>
        <div className="downloadIcon">
          <img
            src={downloadIcon}
            alt=""
            height="20"
            width="20"
            onClick={() => {
              let url = props.file.file_url;
              let filestructlength = url.split("/").length;
              let laststruct = parseInt(filestructlength) - 1;
              let filename = url.split("/")[laststruct];
              fileDownload(url, filename);
            }}
          />
        </div>
        {props.file.is_verified && (
          <div className="verifiedLogo">
            <img src={VerifiedIcon} alt="BIT verified" height="50" width="50" />
          </div>
        )}

        <div className="filename">{props.file.name}</div>
        <div className="fileDescription">{props.file.description}</div>
      </div>
    </>
  );
};

export default Myfile;
