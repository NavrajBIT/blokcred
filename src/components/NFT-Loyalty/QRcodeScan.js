// import React, { useState } from 'react';
// import QrReader  from 'react-qr-reader';

// const Test = (props) => {
//   const [data, setData] = useState('No result');
//   const { dialogOpen, setDialogOpen } = props;
//   const [cam,setCam] = useState(true);

//   return (
//     <>
//       {cam && <QrReader
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text);
//             setCam(false);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: '50%' }}
//       />}
//       <p>{data}</p>
//     </>
//   );
// };
// export default Test;


import "./style.css";
import { useState } from "react";
import QrReader from "react-qr-reader";
import { Button } from "@mui/material";

const Test = (props) => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(true);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
    const { dialogOpen, setDialogOpen,setWalletAddress } = props;

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setWalletAddress(scanData.slice(9));
      setStartScan(false);
      setLoadingScan(false);
      setDialogOpen(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div >
      {/* <h2>
        Last Scan:
        {selected}
      </h2> */}
{/* 
      <Button
      variant="contained"
        onClick={() => {
          setStartScan(!startScan);
          setLoadingScan(!loadingScan)
        }}
      >
        {startScan ? "Stop Scan" : "Scan QR Code"}
      </Button> */}
      {startScan && (
        <>
          {/* <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select> */}
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "100%" }}
          />
        </>
      )}
      {loadingScan && <p style={{textAlign:"center"}}>Scaning....</p>}
      {/* {data !== "" && <p>{data}</p>} */}
    </div>
  );
};

export default Test;