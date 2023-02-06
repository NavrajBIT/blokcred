import React from 'react';
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";
import NoWalletPage from "../connection/NoWalletPage";
import KYC from "../kyc/kyc";
import Connect from "../connection/Connect";
import { useNavigate } from 'react-router-dom';
import "./nftloyalty.css"

export const NFTLoyalty = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    if (!user.iswalletAvailable) {
        return <NoWalletPage />;
      }
    
      if (!user.isConnected) {
        return <Connect />;
      }
    
      // if (user.userData.status !== "Approved") {
      //   return <KYC />;
      // }

  return (
    <div className="dashboardpage">
        <div className="dashboardcontainer">
            <NFTNavbar />
            <h3>Welcome to dNFT Reward/Loyalty Program</h3>
            <ol>
                <li>For Issue NFT Please Click on 'Issue NFT'</li>
                <li>For View NFT Please Click on 'View NFT'</li>
                <li>For Update NFT Please Click on 'Update NFT'</li>
            </ol>
        </div>
    </div>
  )
}

const NFTNavbar = () => {
    const navigate = useNavigate();
    return (
        <div className="sectionheading">
        <div className='navbuttoncontainer'>
            <div className='navbutton' onClick={() => navigate("/issuenft")}>Issue NFT</div>
            <div className='navbutton' onClick={() => navigate("/viewnft")}>View NFT</div>
            <div className='navbutton'onClick={() => navigate("/updatenft")}>Update NFT</div>
        </div>
    </div>
  
    )
}
export { NFTNavbar};
