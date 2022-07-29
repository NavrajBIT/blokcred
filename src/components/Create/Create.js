import React, { useState, useContext, useEffect } from "react";
import "../../Styles/create.css";
import { create_metadata } from "./metadata";
import LoadingPage from "../loading/loadingpage";
import UserContext from "../../context/UserContext";
import ConnectionPage from "../connectionPage/connectionPage";
const Create = () => {
  const [uploadedImage, setUploadedImage] = useState("");
  const [uploadedImageURL, setUploadedImageURL] = useState("");

  const [isloading, setIsloading] = useState(false);
  const [status, setStatus] = useState("");
  const user = useContext(UserContext);
  const [loadingPageProps, setLoadingPageProps] = useState({
    1: { name: "Creating Metadata", status: "pending" },
    2: { name: "Minting token", status: "pending" },
  });

  async function submit(e) {
    e.preventDefault();

    setStatus("");
    let name = e.target[1].value;
    if (name === "") {
      setStatus("Name is required.");
      return;
    }

    let description = e.target[2].value;
    if (description === "") {
      setStatus("Description is required.");
      return;
    }
    if (uploadedImage === "") {
      setStatus("Image is required.");
      return;
    }
    console.log(name + description);
    setIsloading(true);
    setLoadingPageProps({
      1: { name: "Creating Metadata", status: "pending" },
      2: { name: "Minting token", status: "pending" },
    });
    let urlData = await create_metadata(uploadedImage, name, description)
      .then((res) => {
        setLoadingPageProps({
          1: { name: "Creating Metadata", status: "done" },
          2: { name: "Minting token", status: "pending" },
        });
        return res;
      })
      .catch((err) => {
        setIsloading(false);
        setStatus(
          "Something went wrong while creating metadata. Please try again."
        );
        return { status: "Failed" };
      });

    console.log(urlData);

    if (urlData.status === "Success") {
      const endPoint = "http://localhost:8000/individualfileupload";
      let formData = new FormData();
      formData.append("name", name);
      formData.append("account", user.userAccount);
      formData.append("description", description);
      formData.append("metadata", urlData.metadataURL);
      formData.append("image", urlData.imageURL);

      const response = await fetch(endPoint, { method: "POST", body: formData })
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          console.log(err);
          setIsloading(false);
          return "Server error";
        });
      console.log(response);
      if (response !== "Server error") {
        setLoadingPageProps({
          1: { name: "Creating Metadata", status: "done" },
          2: { name: "Minting token", status: "done" },
        });
        setIsloading(false);
        if (response.status == "Already exists") {
          setStatus("This NFT already exists.");
        } else {
          setStatus("Uploaded successfully.");
          let explorerURL =
            "https://mumbai.polygonscan.com/tx/" + response["tx_hash"];
          window.open(explorerURL);
          await user.provider
            .getTransaction(response["tx_hash"])
            .then((res) => {
              console.log(res);
            });
        }
      }
    } else {
      console.log("Error occured");
      setStatus("Something went wrong while minting token. Please try again.");
      return;
    }
  }

  return (
    <>
      {!user.isConnected ? (
        <ConnectionPage />
      ) : (
        <>
          <div className="header">
            <h2>Create Your Digital Certificate</h2>
          </div>

          <div className="createbox">
            <form onSubmit={(e) => submit(e)} className="createform">
              <label htmlFor="imageBox" className="uploadlabel">
                <h3> Upload Image* </h3>
              </label>
              <div className="imageBox">
                <div className="Neon Neon-theme-dragdropbox">
                  <input
                    style={{
                      zindex: 999,
                      opacity: 0,
                      width: "320px",
                      height: "200px",
                      position: "absolute",
                      right: "0px",
                      left: "0px",
                      marginRight: "auto",
                      marginLeft: "auto",
                    }}
                    name="files[]"
                    id="imageBox"
                    type="file"
                    onChange={(e) => {
                      setUploadedImage(e.target.files[0]);
                      let filereader = new FileReader();
                      filereader.addEventListener("load", () => {
                        setUploadedImageURL(filereader.result);
                      });
                      filereader.readAsDataURL(e.target.files[0]);
                    }}
                  />
                  <div
                    className="Neon-input-dragDrop"
                    style={{
                      backgroundImage: "url('" + uploadedImageURL + "')",
                    }}
                  >
                    <div className="Neon-input-inner">
                      <div className="Neon-input-icon">
                        <i className="fa fa-file-image-o"></i>
                      </div>
                      <div className="Neon-input-text">
                        <h3>Drag&amp;Drop files here</h3>{" "}
                        <span
                          style={{
                            display: "inline-block",
                            margin: "15px 0",
                          }}
                        >
                          or
                        </span>
                      </div>
                      <a className="Neon-input-choose-btn blue">Browse Files</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nameField">
                <label htmlFor="assetName">Asset Name*</label>
                <input
                  type="text"
                  id="assetName"
                  placeholder="Enter Asset Name"
                />
              </div>

              <div className="description_box">
                <label htmlFor="description">Description*</label>
                <textarea
                  name=""
                  id="description"
                  placeholder="Enter Description"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="status">{status}</div>
              <div className="button">
                {isloading ? (
                  <LoadingPage loadingprops={loadingPageProps} />
                ) : (
                  <button type="submit">Submit</button>
                )}
              </div>
              <div style={{ width: "320px", color: "red", marginTop: "20px" }}>
                As per the instructions issued by Government of India from time
                to time, it is advised not to upload your government issued
                identification such as Aadhaar card, PAN Card, etc. on
                Bitmemoir. Beyond Imagination Technologies Private Limited and
                its associated personnel will not be liable or responsible for
                misuse of such critical personal information at any point in
                time.
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Create;
