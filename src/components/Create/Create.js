import React, { useState } from "react";
import "../../Styles/create.css";
import Axios from 'axios'
import MediaQuery from 'react-responsive'


const Create = () => {
    const url = ""
    const [data,setData] = useState({
        assetName : "",
        artistName : "",
        description : "",
        specification : "",
     
    })

    function submit(e){
        e.preventDefault();
        // Axios.post(url,{
        //     assetName : data.assetName,
        //     artistName : data.artistName,
        //     description : data.description,
        //     specification: data.specification
        // }).then((res)=>{
        //     console.log(res.data);
            
        // })
        if(data.artistName === ""){
          document.getElementById('artist').style.display = "inline"
        }
        else{
          document.getElementById('artist').style.display = "none"
        }
        if(data.assetName === ""){
          document.getElementById('asset').style.display = "inline"
        }
        else{
          document.getElementById('artist').style.display = "none"
        }
        if(data.specification === ""){
          document.getElementById('specs').style.display = "inline"
        }
        else{
          document.getElementById('artist').style.display = "none"
        }
        if(data.description === ""){
          document.getElementById('desc').style.display = "inline"
        }
        else{
          document.getElementById('artist').style.display = "none"
        }
        
        // const value = {

        // }
    }
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);

    }


  return (
    <MediaQuery minWidth={1824}> 
    <div className="create_box">
      <div className="create_info">
        <div className="header">
          <h2>Create Your Digital Certificate</h2>
        </div>
        <div className="reqfields">
          <p>* Required Fields</p>
        </div>
        <div className="form">
          <form action="" onSubmit={(e)=>submit(e)}>
            {/* <div className="headText">
                        <h3>Image ,Video  , Audio , or 3D Model</h3>
                    </div> */}
            <label htmlFor="imageBox" className="uploadlabel">

              <h3> Upload Image* </h3>
            </label>
            <div className="imageBox">
              {/* <div height="257px" width="350px"  shape="square"  className="sc-1xf18x6-0 sc-1twd32i-0 sc-1wwz3hp-0 sc-b4hiel-0 sc-cjf6mn-0 sc-u4tlig-3 lbhdXq kKpYwv kuGBEl iVtKaT euUQqP kQqVzr">
                            <input id="media" name="media" accept="image/*,video/*,audio/*,.glb,.gltf" type="file" tabindex="-1"  />

                            <i size="84" value="image" className="sc-1gugx8q-0 sc-u4tlig-2 fTfEgB material-icons">image</i>

                            <div offset="4px" aria-hidden="true" className="sc-1yn7g51-0 hhsgWl"></div>
                        </div> */}

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
                  id="filer_input2"
                  multiple="multiple"
                  type="file"
                  onChange={(e) => console.log(e.target.value)}
                />
                <div className="Neon-input-dragDrop">
                  <div className="Neon-input-inner">
                    <div className="Neon-input-icon">
                      <i className="fa fa-file-image-o"></i>
                    </div>
                    <div className="Neon-input-text">
                      <h3>Drag&amp;Drop files here</h3>{" "}
                      <span
                        style={{ display: "inline-block", margin: "15px 0" }}
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
                onChange={(e)=>handle(e)}
                value={data.assetName}
                type="text"
                id="assetName"
                placeholder="Enter Asset Name"
                
              />
              <p id="asset">Enter The Asset Name Field *</p>

            </div>

            {/* <div className="artistnameField">
              <label htmlFor="artistName">Owner Name*</label>
              <input
                onChange={(e)=>handle(e)}
                value={data.artistName}
                type="text"
                id="artistName"
                placeholder="Enter Owner Name"
                
              />
              <p id="artist">Enter The Artist Name Field *</p>

            </div> */}

            <div className="artistnameField">
              <label htmlFor="artistName">Enter Your Polygon MetaMask Wallet  Address*</label>
              <input
                onChange={(e)=>handle(e)}
                value={data.artistName}
                type="text"
                id="artistName"
                placeholder="Enter Address"
                
              />
              {/* <p id="artist">Enter The Artist Name Field *</p> */}

            </div>

            <div className="description_box">
              <label htmlFor="description">Description*</label>
              <textarea
                onChange={(e)=>handle(e)}
                value={data.description}
                name=""
                id="description"
                placeholder="Enter Description"
                cols="30"
                rows="10"
                
              ></textarea>
                <p id="desc">Enter The Description Field *</p>

            </div>

            {/* <div className="specification_box">
              <label htmlFor="specification">Specifications*</label>
              <textarea
              onChange={(e)=>handle(e)}
                value={data.specification}
                name=""
                id="specification"
                placeholder="Enter Specifications"
                cols="30"
                rows="10"
                
              ></textarea>
                <p id="specs">Enter The Specificaion Field *</p>

            </div> */}

            <div className="button">
                <button type="submit" onClick={async () => {
                  alert("Connecting to the metamask")
                  // if(window.ethereum){
                  //   const provider = new ethers.providers.Web3Provider(window.ethereum)  
                  //   const signer =  provider.getSigner()
                  //   const sign = await signer.signMessage("Welcome to the meta world ")
                  //   sign.then((data) => {
                  //     console.log(data)
                  //   })
                  // }
                }} >Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    </MediaQuery>

  );
};

export default Create;
