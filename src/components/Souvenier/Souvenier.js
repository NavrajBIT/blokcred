import React, { useState, useContext, useEffect } from "react";
import "../../Styles/create.css";
import { create_metadata } from "./metadata";
import LoadingPage from "../loading/loadingpage";
import UserContext from "../../context/UserContext";
import ConnectionPage from "../connectionPage/connectionPage";
import Contactuspage from "./contactuspage";
import { checkDestination, createSouvenir } from "../apiCalls";
import { uploadSouvenir } from "./uploadSouvenir";

const Souvenier = () => {
  const [uploadedImage, setUploadedImage] = useState("");
  const [uploadedImageURL, setUploadedImageURL] = useState("");
  const [isDestination, setIsDestination] = useState(false);
  const [destinationName, setDestinationname] = useState("");
  const [destinationDescription, setDestinationDescription] = useState("");
  const [destinationFrame, setDestinationFrame] = useState("");
  const [destinationSouvenirNumber, setDestinationSouvenirNumber] = useState(0);
  const [testImageUrl, setTestImageURL] = useState("");

  const [isloading, setIsloading] = useState(false);
  const [status, setStatus] = useState("");
  const user = useContext(UserContext);
  const [loadingPageProps, setLoadingPageProps] = useState({
    1: { name: "Creating Metadata", status: "pending" },
    2: { name: "Minting token", status: "pending" },
  });

  useEffect(() => {
    checkDestination(user.userAccount)
      .then((res) => {
        console.log(res);
        if (res != "Server error") {
          if (res.status === "Success") {
            setIsDestination(true);
            setDestinationname(res.credentials.name);
            setDestinationDescription(res.credentials.description);
            setDestinationFrame(res.credentials.frame);
            setDestinationSouvenirNumber(res.credentials.total_certificates);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  async function submit(e) {
    e.preventDefault();
    let fieldcheck = checkEmptyFields();
    if (fieldcheck) {
      let souvenirfileraw = await addFrame();
      if (souvenirfileraw !== "Server error") {
        let souvenirfile = await createfilefromraw(souvenirfileraw);
        console.log(souvenirfile);
        // await filetourl(souvenirfile);
        await uploadsouvenir(souvenirfile);
      } else {
        setStatus("Something went wrong. Please try again");
      }
    }
  }

  const checkEmptyFields = () => {
    setStatus("Creating souvenir...");
    let souvenirName = document.getElementById("assetName").value;
    let recipientAddress = document.getElementById("walletAddress").value;
    let description = document.getElementById("description").value;
    if (
      uploadedImage === "" ||
      recipientAddress === "" ||
      souvenirName === "" ||
      description === ""
    ) {
      setStatus("*All fields are required.");
      return false;
    } else {
      return true;
    }
  };

  const uploadsouvenir = async (souvenirfile) => {
    setStatus("Issuing souvenir...");
    let souvenirName = document.getElementById("assetName").value;
    let recipientAddress = document.getElementById("walletAddress").value;
    let description = document.getElementById("description").value;

    await uploadSouvenir(
      recipientAddress,
      souvenirName,
      description,
      souvenirfile,
      user.userAccount
    )
      .then((res) => {
        if (res.status === "Success") {
          setStatus("Souvenir issued successfully.");
        } else {
          setStatus("Something went wrong. Please try again");
        }
      })
      .catch((err) => {
        setStatus("Something went wrong. Please try again");
      });
  };
  const addFrame = async () => {
    setStatus("Adding frame...");
    return await createSouvenir(uploadedImage, destinationFrame)
      .then((res) => {
        if (res !== "Server error") {
          return res;
        } else {
          return "Server error";
        }
      })
      .catch((err) => {
        setStatus("Something went wrong. Please try again");
        return "Server error";
      });
  };

  const createfilefromraw = async (rawfile) => {
    return await rawfile.blob().then((blobResponse) => {
      let filename = document.getElementById("assetName").value + ".png";
      const myFile = new File([blobResponse], filename, {
        type: blobResponse.type,
      });
      return myFile;
    });
  };

  return (
    <>
      {!user.isConnected ? (
        <ConnectionPage />
      ) : (
        <>
          {isDestination ? (
            <>
              <div className="header">
                <h4>Welcome {destinationName}</h4>
                <h6>{destinationDescription}</h6>
                <h6>{destinationSouvenirNumber} Souvenirs issued so far.</h6>
                <h2>Give out Souvenirs</h2>
              </div>
              <div className="createbox">
                {isloading ? (
                  <LoadingPage loadingprops={loadingPageProps} />
                ) : (
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
                            <a className="Neon-input-choose-btn blue">
                              Browse Files
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="nameField">
                      <label htmlFor="assetName">Souvenir Name*</label>
                      <input
                        type="text"
                        id="assetName"
                        placeholder="Enter Asset Name"
                      />
                    </div>

                    <div className="artistnameField">
                      <label htmlFor="walletAddress">
                        Recipient Wallet Address*
                      </label>
                      <input
                        type="text"
                        id="walletAddress"
                        placeholder="Enter Address"
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
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                )}
              </div>
            </>
          ) : (
            <Contactuspage />
          )}
        </>
      )}
    </>
  );
};

export default Souvenier;
