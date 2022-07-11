import React, { useState, useEffect } from "react";
import "./Certificate.css";
import { saveAsPng, saveAsJpeg } from "save-html-as-image";
import templates from "../CertificateImages/imageTemplates";
import AddYourName from "./AddYourName";



const Certificate = () => {

 
  // const addTextToImage = (id)


  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  const certificatewrapper = React.createRef();
  const [source, setSource] = useState("https://i.imgur.com/MHeTEfR.png");

  const namePostition = document.querySelector("#namewriter");
  const headingPosition = document.querySelector("#main_heading");

  const insertedLogoPosition = document.querySelector("#logo");

  // const [xisat , setxisat] = useState(1)

  //font changing section

  const url =
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD6qtYLofyhPp_HtDCwTIspGP0U4tGty90";

  const [family, setFamily] = useState([]);

  const [fontFamilys, setFontFamilys] = useState("");
  const [fontHeadingFamilys, setFontHeadingFamilys] = useState("");

  // const para = document.getElementById("fontChanger");

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFamily(data.items);
        console.log(data.items);
      });
  };

  useEffect(handleClick, []);

  // setTimeout(handleClick, 5000);

  const fontName = (e) => {
    setFontFamilys(e.target.value);
    // document.querySelector("#fontChangerDemo").style.fontFamily = fontFamilys
    // document.getElementsByClassName("main_name").style.fontFamily = fontFamilys
    namePostition.style.fontFamily = fontFamilys;
    console.log(fontFamilys);
  };

  const [changeFontFamily, setChangeFontFamily] = useState({
    fontFamily: "Stalemate",
  });

  const headingfontName = (e) => {
    setFontHeadingFamilys(e.target.value);
    // document.querySelector("#fontChangerDemo").style.fontFamily = fontFamilys
    // document.getElementsByClassName("main_name").style.fontFamily = fontFamilys
    headingPosition.style.fontFamily = fontHeadingFamilys;
    // console.log(fontFamilys);
  };

  const [changeHeadingFontFamily, setChangeHeadingFontFamily] = useState({
    fontFamily: "Stalemate",
  });
  //font changing section ends here

  const handleImageClick = (e) => {
    console.log(e.target.src);
    setSource(e.target.src);
  };

  const [position, setPosition] = useState({
    top: 45,
    right: 0,
    bottom: 0,
    left: 42,
  });
  const [font, setFont] = useState(20);

  const handlePositionChange = (e) => {
    const controllerName = e.target.name;
    if (controllerName === "top") {
      setPosition((position) => ({
        ...position,
        top: e.target.value,
      }));
      namePostition.style.top = position.top + "%";
    }

    if (controllerName === "right") {
      setPosition((position) => ({
        ...position,
        right: e.target.value,
      }));
      namePostition.style.right = position.right + "%";
    }
    if (controllerName === "bottom") {
      setPosition((position) => ({
        ...position,
        bottom: e.target.value,
      }));
      namePostition.style.bottom = position.bottom + "%";
    }
    if (controllerName === "left") {
      setPosition((position) => ({
        ...position,
        left: e.target.value,
      }));
      namePostition.style.left = position.left + "%";
    }
  };

  const handleFont = (e) => {
    setFont(e.target.value);
    namePostition.style.fontSize = font + "px";
  };

  const [headingposition, setHeadingPosition] = useState({
    top: 45,
    right: 0,
    bottom: 0,
    left: 42,
  });
  const [headingfont, setHeadingFont] = useState(20);

  const handleHeadingFont = (e) => {
    setHeadingFont(e.target.value);
    headingPosition.style.fontSize = headingfont + "px";
  };

  const handleHeadingPositionChange = (e) => {
    const controllerName = e.target.name;
    if (controllerName === "top") {
      setHeadingPosition((position) => ({
        ...position,
        top: e.target.value,
      }));
      headingPosition.style.top = headingposition.top + "%";
    }

    if (controllerName === "right") {
      setHeadingPosition((position) => ({
        ...position,
        right: e.target.value,
      }));
      headingPosition.style.right = headingposition.right + "%";
    }
    if (controllerName === "bottom") {
      setHeadingPosition((position) => ({
        ...position,
        bottom: e.target.value,
      }));
      headingPosition.style.bottom = headingposition.bottom + "%";
    }
    if (controllerName === "left") {
      setHeadingPosition((position) => ({
        ...position,
        left: e.target.value,
      }));
      headingPosition.style.left = headingposition.left + "%";
    }
  };


  const content = document.querySelector("#content");
  const [contentposition,setContentPosition] = useState({
    top: 10,
    right: 0,
    bottom: 0,
    left: 42,
  });
  const [contentfont, setContentFont] = useState(20);

  const handleContentFont = (e) => {
    setHeadingFont(e.target.value);
    headingPosition.style.fontSize = headingfont + "px";
  };

  const handleContentPositionChange = (e) => {
    const controllerName = e.target.name;
    if (controllerName === "top") {
      setContentPosition((position) => ({
        ...position,
        top: e.target.value,
      }));
      content.style.top = headingposition.top + "%";
    }

    if (controllerName === "right") {
      setContentPosition((position) => ({
        ...position,
        right: e.target.value,
      }));
      content.style.right = headingposition.right + "%";
    }
    if (controllerName === "bottom") {
      setContentPosition((position) => ({
        ...position,
        bottom: e.target.value,
      }));
      content.style.bottom = headingposition.bottom + "%";
    }
    if (controllerName === "left") {
      setContentPosition((position) => ({
        ...position,
        left: e.target.value,
      }));
      content.style.left = headingposition.left + "%";
    }
  };




  const [logoPosition, setLogoPosition] = useState({
    top: 45,
    right: 0,
    bottom: 0,
    left: 42,
    height: 100,
    width: 100,
  });

  const handleLogoPosition = (e) => {
    const controllerName = e.target.name;
    if (controllerName === "top") {
      setLogoPosition((position) => ({
        ...position,
        top: e.target.value,
      }));
      insertedLogoPosition.style.top = logoPosition.top + "%";
      insertedLogoPosition.style.display = "inline";
    }

    if (controllerName === "right") {
      setLogoPosition((position) => ({
        ...position,
        right: e.target.value,
      }));
      insertedLogoPosition.style.right = logoPosition.right + "%";
    }
    if (controllerName === "bottom") {
      setLogoPosition((position) => ({
        ...position,
        bottom: e.target.value,
      }));
      insertedLogoPosition.style.bottom = logoPosition.bottom + "%";
    }
    if (controllerName === "left") {
      setLogoPosition((position) => ({
        ...position,
        left: e.target.value,
      }));
      insertedLogoPosition.style.left = logoPosition.left + "%";
    }

    if (controllerName === "height") {
      setLogoPosition((position) => ({
        ...position,
        height: e.target.value,
      }));
      insertedLogoPosition.style.height = logoPosition.height + "px";
    }

    if (controllerName === "width") {
      setLogoPosition((position) => ({
        ...position,
        width: e.target.value,
      }));
      insertedLogoPosition.style.width = logoPosition.width + "px";
    }
  };

  const imageArray = [];
  const [urlImage, setUrlImage] = useState("");

  const imageReceiver = (e) => {
    // // console.log(e.target.files[0]);
    // const read = readAsDataURL(e.target.files[0])
    // setUploadImage(read)
    const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
        setUrlImage(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
      imageArray.push(file);
      //   console.log(file);
      console.log(file.readAsDataURL);
    }
    console.log(imageArray);
    console.log(urlImage);
  };

  const logoReceiver = (e) => {
    const preview = document.querySelector("#logo");
    const file = document.querySelector("#insertLogo").files[0];

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
        // setUrlImage(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);

      console.log(file.readAsDataURL);
    }
  };

  const handleMouseMove = (e) => {
    // setxisat(e.screenY);
    // console.log(e.screenY);
  };
  // namePostition.style.top = xisat + "px";


  return (
    <>
      <div className="input_changing_section" style={{ color: "white" }}>
        {/* <AddYourName name={name} setName={setName}/> */}
        <h1 style={{ color: "white" }}>Certification</h1>
        {/* <div className="input_name_section">
          <label htmlFor="input_name" style={{ color: "white" }}>
            Enter Your Name
          </label>
          <input
            id="input_name"
            type="text"
            placeholder="Enter Name"
            style={{ outline: "none", width: "300px" }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div> */}

        {/* <div className="input_heading_section">
          <label htmlFor="input_heading" style={{ color: "white" }}>
            Enter Heading
          </label>
          <input
            id="input_heading"
            type="text"
            placeholder="Enter Heading"
            style={{ outline: "none", width: "300px" }}
            value={heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
          />
        </div> */}

        <div className="upload_image_section">
          <label htmlFor="uploadImage">Upload Image</label>
          <input
            onChange={imageReceiver}
            name="uploadImage"
            type="file"
            id="uploadImage"
          />
        </div>

        {/* <div className="change_logo_section">
          <label htmlFor="changelogo">Insert Logo</label>
          <input
            onChange={logoReceiver}
            name="insertLogo"
            type="file"
            id="insertLogo"
          />
        </div> */}
      </div>

      <div className="fontFamilySelector">
        {/* <h2 style={{ color: "white" }} id="fontChangerDemo">Here are some of the fonts {fontFamilys}</h2>
         */}
        <label style={{ color: "white" }}>Select Font</label>
        <select
          onChangeCapture={fontName}
          name="fonts"
          id=""
          style={{ width: "300px" }}
        >
          {family.map((nameOfFonts, id) => {
            return (
              <>
                <option key={id} value={nameOfFonts.family}>
                  {nameOfFonts.family}
                </option>
              </>
            );
          })}
        </select>
      </div>

      <div className="headingfontFamilySelector">
        {/* <h2 style={{ color: "white" }} id="fontChangerDemo">Here are some of the fonts {fontFamilys}</h2>
         */}
        <label style={{ color: "white" }}>Heading Font</label>
        <select
          onChangeCapture={headingfontName}
          name="fonts"
          id=""
          style={{ width: "300px" }}
        >
          {family.map((nameOfFonts, id) => {
            return (
              <>
                <option key={id} value={nameOfFonts.family}>
                  {nameOfFonts.family}
                </option>
              </>
            );
          })}
        </select>
      </div>

<div className="allcontrollers">



      

      <div className="controllers">
      <div className="heading">
        <h3>Name Position Changer</h3>
      </div>
        <div className="top_controller">
          <label htmlFor="top" style={{ color: "white" }}>
            Top
          </label>
          <input
            type="number"
            value={position.top}
            name="top"
            onChange={handlePositionChange}
            id="top"
          />
        </div>

        <div className="right_controller">
          <label htmlFor="right" style={{ color: "white" }}>
            Right
          </label>
          <input
            type="number"
            value={position.right}
            name="right"
            onChange={handlePositionChange}
            id="right"
          />
        </div>

        <div className="bottom_controller">
          <label htmlFor="bottom" style={{ color: "white" }}>
            Bottom
          </label>
          <input
            type="number"
            value={position.bottom}
            name="bottom"
            onChange={handlePositionChange}
            id="bottom"
          />
        </div>

        <div className="left_controller">
          <label htmlFor="left" style={{ color: "white" }}>
            Left
          </label>
          <input
            type="number"
            value={position.left}
            name="left"
            onChange={handlePositionChange}
            id="left"
          />
        </div>

        <div className="fontSize_controller">
          <label htmlFor="fontSize" style={{ color: "white" }}>
            FontSize
          </label>
          <input type="number" value={font} onChange={handleFont} />
        </div>
      </div>

      

      <div className="heading_controllers">
      <div className="heading">
        <h3>Heading Position Changer</h3>
      </div>
        <div className="top_controller">
          <label htmlFor="top" style={{ color: "white" }}>
            Top
          </label>
          <input
            type="number"
            value={headingposition.top}
            name="top"
            onChange={handleHeadingPositionChange}
            id="top"
          />
        </div>

        <div className="right_controller">
          <label htmlFor="right" style={{ color: "white" }}>
            Right
          </label>
          <input
            type="number"
            value={headingposition.right}
            name="right"
            onChange={handleHeadingPositionChange}
            id="right"
          />
        </div>

        <div className="bottom_controller">
          <label htmlFor="bottom" style={{ color: "white" }}>
            Bottom
          </label>
          <input
            type="number"
            value={headingposition.bottom}
            name="bottom"
            onChange={handleHeadingPositionChange}
            id="bottom"
          />
        </div>

        <div className="left_controller">
          <label htmlFor="left" style={{ color: "white" }}>
            Left
          </label>
          <input
            type="number"
            value={headingposition.left}
            name="left"
            onChange={handleHeadingPositionChange}
            id="left"
          />
        </div>

        <div className="fontSize_controller">
          <label htmlFor="fontSize" style={{ color: "white" }}>
            Heading Font Size
          </label>
          <input
            type="number"
            value={headingfont}
            onChange={handleHeadingFont}
          />
        </div>
      </div>

 

      <div className="logo_controllers">
      <div className="heading">
        <h3>Logo Position Changer</h3>
      </div>
        <div className="top_controller">
          <label htmlFor="top" style={{ color: "white" }}>
            Top
          </label>
          <input
            type="number"
            value={logoPosition.top}
            name="top"
            onChange={handleLogoPosition}
            id="top"
          />
        </div>

        <div className="right_controller">
          <label htmlFor="right" style={{ color: "white" }}>
            Right
          </label>
          <input
            type="number"
            value={logoPosition.right}
            name="right"
            onChange={handleLogoPosition}
            id="right"
          />
        </div>

        <div className="bottom_controller">
          <label htmlFor="bottom" style={{ color: "white" }}>
            Bottom
          </label>
          <input
            type="number"
            value={logoPosition.bottom}
            name="bottom"
            onChange={handleLogoPosition}
            id="bottom"
          />
        </div>

        <div className="left_controller">
          <label htmlFor="left" style={{ color: "white" }}>
            Left
          </label>
          <input
            type="number"
            value={logoPosition.left}
            name="left"
            onChange={handleLogoPosition}
            id="left"
          />
        </div>

        <div className="logo_height_controller">
          <label htmlFor="height" style={{ color: "white" }}>
            Height
          </label>
          <input
            type="number"
            value={logoPosition.height}
            name="height"
            onChange={handleLogoPosition}
            id="height"
          />
        </div>

        <div className="width_controller">
          <label htmlFor="width" style={{ color: "white" }}>
            Width
          </label>
          <input
            type="number"
            value={logoPosition.width}
            name="width"
            onChange={handleLogoPosition}
            id="width"
          />
        </div>
      </div>

      <div className="content_controllers">
      <div className="heading">
        <h3>Content Position Changer</h3>
      </div>
        <div className="top_controller">
          <label htmlFor="top" style={{ color: "white" }}>
            Top
          </label>
          <input
            type="number"
            value={contentposition.top}
            name="top"
            onChange={handleContentPositionChange}
            id="top"
          />
        </div>

        <div className="right_controller">
          <label htmlFor="right" style={{ color: "white" }}>
            Right
          </label>
          <input
            type="number"
            value={contentposition.right}
            name="right"
            onChange={handleContentPositionChange}
            id="right"
          />
        </div>

        <div className="bottom_controller">
          <label htmlFor="bottom" style={{ color: "white" }}>
            Bottom
          </label>
          <input
            type="number"
            value={contentposition.bottom}
            name="bottom"
            onChange={handleContentPositionChange}
            id="bottom"
          />
        </div>

        <div className="left_controller">
          <label htmlFor="left" style={{ color: "white" }}>
            Left
          </label>
          <input
            type="number"
            value={contentposition.left}
            name="left"
            onChange={handleContentPositionChange}
            id="left"
          />
        </div>

        <div className="fontSize_controller">
          <label htmlFor="fontSize" style={{ color: "white" }}>
            ContentFont Size
          </label>
          <input
            type="number"
            value={contentfont}
            onChange={handleContentFont}
          />
        </div>
      </div>


</div>



      <div className="download_button">
        <button
          onClick={(e) => {
            e.preventDefault();
            saveAsPng(document.querySelector("#certificatewrapper"));
          }}
        >
          Download
        </button>
      </div>



      <div
        id="certificatewrapper"
        className="main_certificate"
        // ref={certifica tewrapper}
        ref={certificatewrapper}

      >
        {/* main Name  */}

        <p
          id="namewriter"
          className="main_name"
          style={changeFontFamily}
          
          // ref={drag}
        >
          {/* {name} */}
          {localStorage.getItem("name")}
        </p>

        {/* name ending */}

        <img src={source} onMouseMove={handleMouseMove} alt="" />
        {/* <img src={urlImage} alt="" /> */}

        {/* here is the log */}
        <div className="logoUpload">
          {/* <img src="" id="logo"   /> */}
          <img src={localStorage.getItem("logoImage")} id="logo" alt="Your Logo" />
        </div>

        {/* here the logo ends */}

        {/* main Heading */}

          {/* {heading} */}
        <p id="main_heading" style={changeHeadingFontFamily} draggable>
          {localStorage.getItem("heading")}
        </p>
        {/* heading ending */}

        {/* content */}
        <p id="content" style={changeHeadingFontFamily} draggable>
          
          {localStorage.getItem("content")}
        </p>

      </div>

 

      <div className="image" id="">
        <h2 style={{ color: "white" }}>Choose From The Below Templates </h2>
        {templates.map((images) => {
          return (
            <>
              <img
                src={images.img}
                height={300}
                width={300}
                onClick={handleImageClick}
                alt="Your Certificate "
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Certificate;
