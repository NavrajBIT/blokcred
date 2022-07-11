import React, { useState } from "react";
import "./Name.css"
import { useNavigate } from 'react-router'

const AddYourName = (props) => {

    const navigate = useNavigate();
    const [imageurl, setimageurl] = useState("");

    const imageUrlReceiver = (e) => {

      // const preview = document.querySelector("img");
      const file = document.querySelector("input[type=file]").files[0];
  
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          // convert image file to base64 string
          // preview.src = reader.result;
          setimageurl(reader.result);
        },
        false
      );
  
      if (file) {
        reader.readAsDataURL(file);
        
      }
      // localStorage.setItem("logoImage" , imageurl)
      
    };
  


    document.querySelectorAll(".text-input").forEach((element) => {
        element.addEventListener("blur", (event) => {
          if (event.target.value != "") {
            event.target.nextElementSibling.classList.add("filled");
          } else {
            event.target.nextElementSibling.classList.remove("filled");
          }
        });
      });

      
      const [uname , setUname]= useState("")
      const[heading ,setHeading] = useState("")
      const[content , setContent] = useState("")


      const nameChange = (e) => {
        // props.setName(e.target.value)
        setUname(e.target.value)
      }

      const headingChange = (e) => {
        setHeading(e.target.value)
      }

      
      const contentChange  = (e) => {
        setContent(e.target.value)

      }

      const handleSetName = (e) => {
        // e.preventDefault();
        // localStorage.setItem("name" , props.name)
        localStorage.setItem("name" , uname)
        localStorage.setItem("heading" , heading)
        localStorage.setItem("logoImage" , imageurl)
        localStorage.setItem("content" , content)

        // navigate("/certificate")

      }


      
  return (
    <>
      <form>
      <div className="inputs">
        <div className="heading">
          <h2>ENTER THE DETAILS HERE </h2>
        </div>
        <div className="input-container">
        <span id="nameText">Add Name</span>
          <input
            type="text"
            id="username"
            class="text-input"
            autocomplete="off"
            placeholder="Enter  Name"
            onChange={nameChange}
            value={uname}
            required
          />
          <label class="label" for="username">
            Enter Name
          </label>
        </div>
       


        <div className="input-container">
        <span id="headingText">Add Heading</span>
          <input
            type="text"
            id="heading"
            className="text-input"
            autocomplete="off"
            placeholder="Enter  Heading"
            onChange={headingChange}
            value={heading}
            required
          />
          <label class="label" for="username">
            Enter Heading
          </label>

        </div>

        <div className="input-container">
        <span id="headingText">Add Content</span>
          <textarea
            type="text"
            id="heading"
            className="text-input"
            autocomplete="off"
            placeholder="Enter Content"
            onChange={contentChange}
            value={content}
            required
          />
          <label class="label" for="username">
            Enter Content
          </label>

        </div>

      <div className="uploadIamge-container">
            
        <input type="file" className="logo-input" onChange={imageUrlReceiver} />
        <span id="logoText">Add Logo</span>

      </div>

      </div>

       


        <div className="button">
          <button onClick={handleSetName}>Set Name</button>
        </div>
      </form>
    </>
  );
};

export default AddYourName;
