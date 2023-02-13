import React from 'react';
import { useContext, useState,useEffect } from "react";
import UserContext from "../../context/userContext/UserContext";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import DeleteIcon from "@mui/icons-material/Delete";
import { fileDownload } from "../Scripts/tools";
import { IconButton } from "@mui/material";
import Chart from "react-apexcharts";
import AddAdminPage from "./addAdminPage";
import { adminApi, userApi,kpiApi,adminkpiTx } from "../Scripts/apiCalls";
import UserDetailsContainer from "./userdetailsContainer";
import { Country, State, City }  from 'country-state-city';

export const Contentdashboard = () => {
    
    const user = useContext(UserContext);
    const [status, setStatus] = useState("Checking credentials...");
    const [isAdmin, setIsAdmin] = useState(false);
    const [users, setUsers] = useState([]);
    const [allusersData, setallusersData] = useState(0);
    const [numofUsers, setnumofUsers] = useState({
      total: 0,
      verified: 0,
      unverified: 0,
      pending: 0,
    });
  
    useEffect(() => {
      checkAdminCredentials();
      kpi();
    }, [user]);

  //   const calculateUsers = (users) => {
  //     console.log(users);
  //     setnumofUsers({
  //     total: users.length,
  //     verified: users.filter((user) => user.status === "Approved").length,
  //     unverified: users.filter((user) => user.status === "unverified").length,
  //     pending: users.filter((user) => user.status === "in_progress").length,
  //    })
  //    console.log(numofUsers);

  //   // users.map((user) => {
        
  //   //     if(user.status === "Approved"){
  //   //         setnumofUsers({
  //   //             ...numofUsers,
  //   //             verified: numofUsers.verified + 1,
  //   //         })
  //   //     }
  //   //     else if(user.status === "unverified"){
  //   //         setnumofUsers({
  //   //             ...numofUsers,
  //   //             unverified: numofUsers.unverified + 1,
  //   //         })
  //   //     }
  //   //     else if(user.status === "in_progress"){
  //   //         setnumofUsers({
  //   //             ...numofUsers,
  //   //             pending: numofUsers.pending + 1,
  //   //         })
  //   //     }             
  //   // });

  //   setnumofUsers({
  //       ...numofUsers,
  //       total: users.length,
  //   })
  //   console.log(numofUsers);
  // };
  console.log(numofUsers);



  
    const checkAdminCredentials = () => {
      adminApi({ account: user.userAccount })
        .then((res) => {
          setStatus("");
          setIsAdmin(true);
          poppulateUserData();
        })
        .catch((err) => {
          setIsAdmin(false);
          setStatus("Please connect with an admin account.");
        });
    };
  
    const poppulateUserData = () => {
      userApi({ account: user.userAccount, querry_all: "querry_all" })
        .then((res) => {
          console.log(res);
          setUsers(res);
          if (users.length > 0) {
            setnumofUsers({
              total: users.length,
              verified: users.filter((user) => user.status === "Approved")
                .length,
              unverified: users.filter((user) => user.status === "unverified")
                .length,
              pending: users.filter((user) => user.status === "in_progress") 
                .length,
            });
          }
        })
        .catch((err) => {
          setStatus("Something went wrong.");
        });
    };
    

    const kpi = () => {
        kpiApi({ account: user.userAccount })
          .then((res) => {
            console.log(res);
            setallusersData(res);
          })
          .catch((err) => {
            setStatus("Something went wrong.");
          });
      };

    
    
    
  return (
    <div className='contentdasboard'>
        { user.isSidebar === 1 && <div className='primarydetail'>
            <AddAdminPage />
        </div> }
        {user.isSidebar === 2 && <div className='primarydetail'>
            <div className="heading-primarydetails">
                <h2>All Users</h2>
            </div>
            {users.length > 0 && (
            <>
            <KPIUSERS numofUsers={numofUsers} />
            <UserDetailsContainer users={users} update={poppulateUserData} />
            </>
            )}
        </div> 
        }
        {user.isSidebar === 3 && <div className='primarydetail'>
            <div className="heading-primarydetails">
                <h2>Analytics</h2>
            </div>
            <KPI allusersData={allusersData} />
           <PieChart allusersData={allusersData} />
        </div> 
        }
    </div>
  )
}

const PrimaryDetails = () => {
    const user = useContext(UserContext);
    const userData = user.userData;
  
    const details1 = {
      Name: userData.name,
      Description: userData.description,
      Email: userData.email,
      Website: userData.website,
      Account: userData.account,
    };
    const details2 = {
      Status:
        userData.status === "Approved"
          ? "Verified"
          : userData.status === "in_progress"
          ? "Verification Pending"
          : "Unverified",
      "Reg. Id": userData.regId,
      "Id Proof": (
        <IconButton onClick={() => fileDownload(userData.idProof, "idProof")}>
          <DownloadForOfflineIcon color="primary" />
        </IconButton>
      ),
      "Personal storage":
        userData["storage_used"] + " / " + userData["storage_limit"] + " MB",
      "Contract Address": userData["contract_address"],
    };
  
    return (
      <>
        <div className='heading-primarydetails'>
          <h2>Primary Details</h2>
        </div>
        <div className="primarydatacontainer">
          <div className="userdetail">
            {Object.keys(details1).map((item) => (
              <div className="userdetails" key={item + "inuserData1"}>
                <h4>{item}:</h4>
                <h4>{details1[item]}</h4>
              </div>
            ))}
          </div>
          <div className="userdetail">
            {Object.keys(details2).map((item) => (
              <div className="userdetails" key={item + "inuserData2"}>
                <h4>{item}:</h4>
                <h4>{details2[item]}</h4>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const PieChart = (props) => {
    const user = useContext(UserContext);
    const userData = props.allusersData;
    const[ countries, setCountries ] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [countryid, setCountryid] = useState("");

    useEffect(() => {
        async function getCountries() {
          try {
            let countries = await Country.getAllCountries();
            console.log(countries);
            setCountries(countries)
          } catch (err) {
            console.log(err);
          }

            
        }
        getCountries();
        



    }, []);

    async function getData (){
      try{
        let data = await adminkpiTx({
          timefrom: "2021-01-01",
          timeto: "2021-01-31",
          country: "India",
          state: "Maharashtra",
          city: "Mumbai",
         })
        console.log(data);
        setUsers(data);
      }catch(err){
        console.log(err);
      }
    };

    const handlecountry = (e) => {
      const country = e.target.value;
      setCountryid(country);
      const getAllStates = async () => {
        try {
          let states = await State.getStatesOfCountry(country);
          console.log(states);
          setStates(states);
        } catch (err) {
          console.log(err);
        }
      };
      getAllStates();
    }

    const handlestate = (e) => {
      const state = e.target.value;
      // fetch(`https://www.universal-tutorial.com/api/cities/${state}`, {
      //   method: 'GET',
      //   headers: {
      //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzYm0ucHZ0LmxtdEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiIzM1NXaUgxSU4xUXRCNEtRRElDYzlwZWdGQlhhZVJFMnFDSjhyUGZBQWs5ejFqdm95TVdzcHBQUnZqRWh4U0hUc2RrIn0sImV4cCI6MTY3NjEwNjc1NH0.llQ9icFPIa99aM6KNeVLv5qfImPEiZq3n6sQZHFbWSM",
      //     "Accept": "application/json"
      //   }
      // })
      // .then(response => response.json())
      // .then(data => setCities(data))
      // .then(response => console.warn(response))
      // .catch(err => console.error(err));

      const getAllCities = async () => {
        try {
          let cities = await City.getCitiesOfState(countryid,state);
          console.log(cities);
          setCities(cities)
        } catch (err) {
          console.log(err);
        }
      };
      getAllCities();
    }

      
          

    const series = [userData["certificates"],userData["souvenirs"],userData["total_loyalty_nfts"]];
    const series2 = [800,200];
    const series1= [{
      name: 'Total Certificates',
      data: [44, 55, 41]
    }, {
      name: 'Total Souvenirs',
      data: [53, 32, 33]
    }, {
      name: 'Total Loyalty NFTs',
      data: [12, 17, 11]
    }]
    

    const options= {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          // horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: ''
      },
      xaxis: {
        categories: [2021, 2022, 2023,],
        labels: {
          formatter: function (val) {
            return val
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K"
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 40
      }
    };
  
    return (
      <>
        <div className="chart-box">
          <div className="certContainer" id="pie">
          <React.Fragment>
            <div className="container-fuild">
                <Chart type="donut"
                      width={500}
                      height={550}
                      
                      series={[series[1], series[0], series[2]]}
                      options={{
                        title:{text:"Total Transaction",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                            labels: ['Total certificates', 'Total Souvenirs', 'Total NFTs'],
                            colors: ['#FF4560', '#FFB64D', '#28C76F', '#00E396', '#00CFDD']
                        }}
                >
  
                </Chart>
            </div>
        </React.Fragment>
          <div className="piedata">
            <h5 >Total Certificate : 20</h5>
            <h5 >Total Souvenirs : 30</h5>
            <h5 >Total Loyalty NFTs : 45</h5>
          </div>
            
        </div>
  
        <div className="certContainer" id="pie">
          <React.Fragment>
            <div className="container-fuild">
                <Chart type="pie"
                      width={500}
                      height={550}
                      
                      series={[20,40,30,50,70]}
                      options={{
                        title:{text:"Sector",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                            labels: ['Food', 'Health', 'Education', 'Sports', 'Entertainment'],
                            colors: ['#3D85C1', '#85B5DD', '#28C76F', '#00E396', '#00CFDD']
                        }}
                >
  
                </Chart>
            </div>
        </React.Fragment>
        {/* <div className="piedata">
          <h5 >Total Storage : 1000 MB</h5>
          <h5 >Used Storage : 800 MB </h5>
          <h5 >Empty Storage : 200 MB</h5>
        </div> */}
            
        </div>
      </div>
  
      
      <div className="certContainer" id="bargraph">
        {/* <select className="select" name="select" id="select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
      <React.Fragment>
          <div className="container-fuild">
              <select className="select" name="select" id="select">
                <option value="1">Last Three Years</option>
                <option value="3">Last One Years</option>
              </select>
              <select className="select" name="select" id="select" onClick={handlecountry}>
                <option value="all">All countries</option>
                {
                  countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                  ))
                }
              </select>
              <select className="select" name="select" id="select" onClick={handlestate}>
                <option value="1">All States</option>
                {
                  states.map((state) => (
                    <option value={state.isoCode}>{state.name}</option>
                  ))
                }
              </select>
              <select className="select" name="select" id="select">
                <option value="1">All Cities</option>
                {
                  cities.map((city) => (
                    <option value={city.name}>{city.name}</option>
                  ))
                }
              </select>
              
              <Chart type="bar"
                      width={800}
                      height={550}
                      series={series1}
                      // options={{
                      //     title:{text:"Month Data Bargraph",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                      //     chart: {
                      //         type: 'bar',
                      //         height: 350
                      //     },
                      //     plotOptions: {
                      //         bar: {
                      //             horizontal: false,
                      //             columnWidth: '55%',
                      //             endingShape: 'rounded'
                      //         },
                      //     },
                      //     dataLabels: {
                      //         enabled: false
                      //     },
                      //     stroke: {
                      //         show: true,
                      //         width: 2,
                      //         colors: ['transparent']
                      //     },
                      //     xaxis: {
                      //         categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
                              
                      //     },
                      //     yaxis: {
                      //         title: {
                      //             text: 'Total Certificates'
                      //         }
                      //     },
                      //     fill: {
                      //         opacity: 1
                      //     },
                      //     tooltip: {
                      //         y: {
                      //             formatter: function (val) {
                      //                 return  val + " Certificates"
                      //             }
                      //         }
                      //     }
                      // }}
                      options={options}
              >
  
              </Chart>
          </div>
      </React.Fragment>
            
        </div>
      </>
    );
  };

  const KPI = (props) => {
    const user = useContext(UserContext);
    const userData = props.allusersData;
    console.log(userData);
  
    return (
      <div className="certificatesectioncontainer1">
        <div className="certificatesissued1">
          <div className="heading3">{userData["certificates"]}</div>
          <div className="heading2">Total certificates issued</div>
        </div>
  
        <div className="certificatesissued1">
          <div className="heading3">{userData["souvenirs"]}</div>
          <div className="heading2">Total souvenirs issued</div>
        </div>
        <div className="certificatesissued1">
          <div className="heading3">{userData["total_loyalty_nfts"]}</div>
          <div className="heading2">Total Loyalty NFTs</div>
        </div>
      </div>
    );
  };

  const KPIUSERS = (props) => {
    const user = useContext(UserContext);
    const numofUsers = props.numofUsers;
    

    // users.length > 0 && users.map((user) => {
    //   if (user.status === "in_progress") {
    //     setnumofUsers((prev) => {
    //       return {
    //         ...prev,
    //         pending: prev.pending + 1,
    //       };
    //     });
    //   } else if (user.status === "Approved") {
    //     setnumofUsers((prev) => {
    //       return {
    //         ...prev,
    //         verified: prev.verified + 1,
    //       };
    //     });
    //   } else if (user.status === "unverified") {
    //     setnumofUsers((prev) => {
    //       return {
    //         ...prev,
    //         unverified: prev.unverified + 1,
    //       };
    //     });
    //   }
    // });
    // setnumofUsers((prev) => {
    //   return {
    //     ...prev,
    //     total: users.length,
    //   };
    // });

    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].status === "in_progress") {
    //     setnumofUsers((prev) => {
    //       return {
    //         ...prev,
    //         pending: prev.pending + 1,
    //       };
    //     });
    //   } else if (users[i].status === "Approved") {
    //     setnumofUsers((prev) => {
    //       return {
    //         ...prev,
    //         verified: prev.verified + 1,
    //       };
    //     });
    //   } else if (users[i].status === "unverified") {
    //     setnumofUsers((prev) => {
    //       return {
    //         ...prev,
    //         unverified: prev.unverified + 1,
    //       };
    //     });
    //   }
    // }
    // setnumofUsers((prev) => {
    //   return {
    //     ...prev,
    //     total: users.length,
    //   };
    // });
    // setnumofUsers({
    //   total: users.length,
    //   verified: users.filter((user) => user.status === "Approved").length,
    //   unverified: users.filter((user) => user.status === "unverified").length,
    //   pending: users.filter((user) => user.status === "in_progress").length,
    // })
    

    




  
    return (
      <div className="certificatesectioncontainer1">
      <div className="certificatesissued1">
        <div className="heading3">{numofUsers.pending}</div>
        <div className="heading2">Total Pending Account</div>
      </div>
      +
      <div className="certificatesissued1">
        <div className="heading3">{numofUsers.verified}</div>
        <div className="heading2">Total Verified Account</div>
      </div>
      +
      <div className="certificatesissued1">
        <div className="heading3">{numofUsers.unverified}</div>
        <div className="heading2">Total Unerified Account</div>
      </div>
      =
      <div className="certificatesissued1">
        <div className="heading3">{numofUsers.total}</div>
        <div className="heading2">All Account</div>
      </div>
    </div>
    );
  };