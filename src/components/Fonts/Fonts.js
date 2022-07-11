import React, { useState } from "react";
 
const Fonts = () => {
  const url =
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD6qtYLofyhPp_HtDCwTIspGP0U4tGty90";
  const [family, setFamily] = useState([]);
  const [font, setFont] = useState();
//   const para = document.getElementById("fontChanger")

  const handleClick = () => {
    // axios.get(url).then((res) => {
    //     setFamily(res.data.items)
    //     // console.log(res.data.items);
    // })

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFamily(data.items);
        console.log(data.items);
      });
  };
  // setTimeout(handleClick, 5000);

  const fontName = (e) => {
    // console.log(e.target.value);
    setFont(e.target.value);
  };
  // setTimeout(fontName, 2000);

//   document.querySelector("#fontChanger").style.fontFamily = font;
    // para.style.fontFamily  = `${font}`

  return (
    <>
    
        {/* <p style={{color : "white"}} id='fontChanger'>Here is the font {font} </p> */}
      <button onClick={handleClick}>Click me</button>
      <select onChange={fontName} name="fonts" id="" style={{ width: "300px" }}>
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
    </>
  );
};

export default Fonts;
