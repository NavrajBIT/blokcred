// import "./dashboard.css";
import { useContext, useState } from "react";
import UserContext from "../../context/userContext/UserContext";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import DeleteIcon from "@mui/icons-material/Delete";
import { fileDownload } from "../Scripts/tools";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { userApi, nftApi } from "../Scripts/apiCalls";
import Dialog from "@mui/material/Dialog";
import Certificate from "../institution/certificate";
import React from "react";
import Chart from "react-apexcharts";

const AdminDashboard = () => {
  return (
    <div className="dashboardpage">
      <div className="dashboardcontainer">   
        <PieChart />
        {/* <PieChart2 /> */}
       
        {/* <Templates />
        <Frames /> */}
      </div>
    </div>
  );
};

export default AdminDashboard;

const Frames = () => {
  const user = useContext(UserContext);
  const userData = user.userData;
  const frameNames = Object.keys(userData?.["frames"]);
  const [selectedFrame, setSelectedFrame] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [status, setStatus] = useState("");

  const deleteFrame = async (frameName) => {
    userApi({
      account: user.userAccount,
      frame_name: frameName,
      frames: true,
    })
      .then(async (res) => {
        await user.poppulateUserData();
      })
      .catch((err) => {
        alert("Something went wrong. Please try again.");
      });
  };

  const addFrame = () => {
    userApi({
      account: user.userAccount,
      file: selectedFrame,
      frames: true,
      frame_name: document.getElementById("frame-name-select").value,
    })
      .then(async (res) => {
        await user.poppulateUserData();
        setDialogOpen(false);
      })
      .catch((err) => {
        setStatus("Something went wrong. Please try again.");
      });
  };

  const AddFrameDialog = () => {
    return (
      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <div className="individualpage">
          <div className="individualformcontainer">
            <h1>Add new frame</h1>
            <label htmlFor="frame-select">Select frame</label>
            {selectedFrame.name}
            <input
              type="file"
              id="frame-select"
              onChange={(e) => setSelectedFrame(e.target.files[0])}
            />
            <label htmlFor="frame-name-select">Frame Name</label>

            <input
              type="text"
              id="frame-name-select"
              placeholder="Enter name for the frame"
            />
            <div className="status">{status}</div>
            <button onClick={addFrame}>Save Frame</button>
          </div>
        </div>
      </Dialog>
    );
  };

  return (
    <>
      <div className="sectionheading">
        <h2>Souvenir Frames</h2>
      </div>
      <div className="certContainer">
        {frameNames.length > 0 && (
          <>
            {frameNames.map((frame, index) => (
              <div className="framecard" key={index + frame}>
                <div className="framepreview">
                  <img src={userData["frames"][frame]} alt={frame} />
                </div>
                <div className="framebuttons">
                  <DownloadForOfflineIcon
                    color="white"
                    onClick={() =>
                      fileDownload(userData["frames"][frame], frame)
                    }
                  />
                  <DeleteIcon
                    color="white"
                    onClick={() => deleteFrame(frame)}
                  />
                </div>
                <h4>{frame}</h4>
              </div>
            ))}
          </>
        )}

        <div className="framecard">
          <div
            className="framepreview"
            onClick={() => {
              console.log("clicked");
              setDialogOpen(true);
            }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: 200 }} />
          </div>
          <div className="framebuttons"></div>
          <h4>Add Frame</h4>
        </div>
      </div>
      <AddFrameDialog />
    </>
  );
};
const Templates = () => {
  const user = useContext(UserContext);
  const userData = user.userData;
  const templateNames = Object.keys(userData?.["certificates"]);

  const deleteTemplate = async (template) => {
    userApi({
      account: user.userAccount,
      delete_certificate: true,
      template: template,
      certificates: "",
    })
      .then(async (res) => {
        console.log(res);
        await user.poppulateUserData();
      })
      .catch((err) => {
        alert("Something went wrong. Please try again.");
      });
  };

  const downloadTemplate = async (template) => {
    nftApi({
      account: user.userAccount,
      recipient: "walletAddress",
      cert: "download",
      template: template,
      variable1: userData["certificates"][template]["variable1"],
      variable2: userData["certificates"][template]["variable2"],
    })
      .then(async (res) => {
        fileDownload(res, "sample");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="sectionheading">
        <h2>Certificate Templates</h2>
      </div>
      <div className="certContainer">
        {templateNames.length > 0 && (
          <>
            {templateNames.map((template, index) => (
              <div className="framecard" key={index + template}>
                <div className="framepreview">
                  <Certificate
                    certData={userData["certificates"][template]}
                    width={250}
                  />
                </div>
                <div className="framebuttons">
                  <DownloadForOfflineIcon
                    color="white"
                    onClick={() => downloadTemplate(template)}
                  />
                  <DeleteIcon
                    color="white"
                    onClick={() => deleteTemplate(template)}
                  />
                </div>
                <h4>{template}</h4>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};


const PieChart = () => {
  const user = useContext(UserContext);
//   const series2 = [800,200];

  return (
    <>
      <div className="sectionheading">
        <h2>Dashboard</h2>
      </div>
      <div className="chart-box">
        <div className="certContainer" id="pie">
        <React.Fragment>
          <div className="container-fuild">
              <Chart type="donut"
                    width={500}
                    height={400}
                    
                    series={[23, 34, 64, 12, 67]}
                    options={{
                      title:{text:"Regional Data",margin:50,style:{fontSize:"25px",fontWeight:"bold"}},
                          labels: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata', 'Bengaluru'],
                          colors: ['#FF1D8E', '#FFB64D', '#28C76F', '#9400D3', '#00CFDD']
                      }}
              >

              </Chart>
          </div>
        <div className="piedata">
          <h5 >Mumbai: 20</h5>
          <h5 >Chennai : 30</h5>
          <h5 >Delhi : 45</h5>
          <h5 >Kolkata : 45</h5>
          <h5 >Bengaluru : 45</h5>
        </div>
      </React.Fragment>
          
      </div>

      {/* <div className="certContainer" id="pie">
        <React.Fragment>
          <div className="container-fuild">
              <Chart type="pie"
                    width={500}
                    height={550}
                    
                    series={[series2[0], series2[1]]}
                    options={{
                      title:{text:"Total Storage",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                          labels: ['Used Storage', 'Empty Storage'],
                          colors: ['#3D85C1', '#85B5DD', '#28C76F', '#00E396', '#00CFDD']
                      }}
              >

              </Chart>
          </div>
      </React.Fragment>
      <div className="piedata">
        <h5 >Total Storage : 1000 MB</h5>
        <h5 >Used Storage : 800 MB </h5>
        <h5 >Empty Storage : 200 MB</h5>
      </div>
          
      </div> */}
    </div>

    
    <div className="certContainer" id="bargraph">
    <React.Fragment>
        <div className="container-fuild">
            <Chart type="bar"
                    width={500}
                    height={500}
                    series={[{
                        name: 'Total Customers',
                        data: [5, 8, 9, 7, 5, 10, 15]
                    }]}
                    options={{
                        title:{text:"Weekly Data ",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                        chart: {
                            type: 'bar',
                            height: 350
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '55%',
                                endingShape: 'rounded'
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            show: true,
                            width: 2,
                            colors: ['transparent']
                        },
                        xaxis: {
                            categories: ['Mon','Tue','Wed','Thru','Fri','Sat','Sun'],
                            
                        },
                        yaxis: {
                            title: {
                                text: 'Total Customers'
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return  val +" " + " Customers"
                                }
                            }
                        }
                    }}
            >

            </Chart>
            <Chart type="bar"
                    width={800}
                    height={500}
                    series={[{
                        name: 'Total Customers',
                        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 100, 80, 40 ]
                    }]}
                    options={{
                        title:{text:"Monthly Data ",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                        chart: {
                            type: 'bar',
                            height: 350
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '55%',
                                endingShape: 'rounded'
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            show: true,
                            width:2,
                            colors: ['transparent']
                        },
                        xaxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            
                        },
                        yaxis: {
                            title: {
                                text: 'Total Customers'
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return  val +" " + " Customers"
                                }
                            }
                        }
                    }}
            >

            </Chart>
            <Chart type="bar"
                    width={800}
                    height={500}
                    series={[{
                        name: 'Total Customers',
                        data: [400, 470, 539]
                    }]}
                    options={{
                        title:{text:"Yearly Data ",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                        chart: {
                            type: 'bar',
                            height: 350
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '55%',
                                endingShape: 'rounded'
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            show: true,
                            width:2,
                            colors: ['transparent']
                        },
                        xaxis: {
                            categories: ['2021','2022','2023'],
                            
                        },
                        yaxis: {
                            title: {
                                text: 'Total Customers'
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return  val +" " + " Customers"
                                }
                            }
                        }
                    }}
            >

            </Chart>
        </div>
    </React.Fragment>
          
      </div>
    </>
  );
};






const PieChart2 = () => {
  const user = useContext(UserContext);
  const series = [200,800];

  return (
    <>
      <div className="certContainer" id="pie">
      <React.Fragment>
        <div className="container-fuild">
            <Chart type="pie"
                   width={500}
                   height={550}
                   
                   series={[series[1], series[0], series[2]]}
                   options={{
                    title:{text:"Storage",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                        labels: ['Used Storage', 'Empty Storage'],
                        colors: ['#FF4560', '#FFB64D', '#28C76F', '#00E396', '#00CFDD']
                     }}
            >

            </Chart>
        </div>
    </React.Fragment>
    <div className="piedata">
      <h5 >Total Storage : 1000MB</h5>
      <h5 >Used Storage : 200</h5>
      <h5 >Empty : 800</h5>
    </div>
        
      </div>
    </>
  );
};
