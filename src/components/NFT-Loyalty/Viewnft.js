import {React,useState} from 'react';
import { NFTNavbar } from './NFTLoyalty';
import { ScanPop } from './ScanPop';
import { view_nft } from '../Scripts/apiCalls';
import UserContext from "../../context/userContext/UserContext";
import { useContext } from "react";

export const Viewnft = () => {
    const user = useContext(UserContext);
    const [walletAddress, setWalletAddress] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [NFTs,setNFTs] = useState([]);
    const [card,setCard] = useState(false);
    const [status, setStatus] = useState('');

      
    //   // Optional Config object, but defaults to demo api-key and eth-mainnet.
    //   const settings = {
    //     apiKey: "demo", // Replace with your Alchemy API Key.
    //     network: Network.ETH_MAINNET, // Replace with your network.
    //   };
      
    //   const alchemy = new Alchemy(settings);
      
    //   // Print total NFT count returned in the response:
    //   alchemy.nft.refreshContract(
    //     "0x5180db8F5c931aaE63c74266b211F580155ecac8",
    //     "1590"
    //   ).then(console.log);





    const handleOnclick = async () => {
        setStatus("Loading...")
        try{
            // let data = await fetch(`https://polygon-mumbai.g.alchemy.com/v2/grUWncEJ7W6uEsFhwdjcdVzDJPktAulv/getNFTs?owner=${walletAddress}`)
            // .then((data) => data.json());
            // for(let i=0;i<data.ownedNfts.length;i++){
            //     if (data.ownedNfts[i].title=="XYZ"){
            //         setNFTs([data.ownedNfts[i]]);
            //     }

            // }
            let data = await view_nft({
                account:walletAddress
            })
            if (data.length > 0){
                console.log(data)
                setNFTs([data[0]]);
                console.log(data[0])
                setStatus("");
                setCard(true);
            }else{
                setStatus("No NFTs found");
            }
        } catch (error) {
            console.log(error);
        } 

    }

   
    

  return (
    <div className="dashboardpage">
        <div className="dashboardcontainer">
            <NFTNavbar />
            <ScanPop
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
            setWalletAddress={setWalletAddress}
            />
            <div style={{marginTop:"20px"}}>
            <label htmlFor="contract-address-for-cert-verification">
            Wallet Address:
            </label>
            <div className="input-icons">
                <i onClick={() => setDialogOpen(true)}  className="fa fa-camera icon">
                </i>
                <input className="input-field" id="viewnft-input" 
                type="text"
                placeholder="Enter address. e.g. 0xbff6C2094387.."
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}/>
            </div>
            {/* <input
            type="text"
            id="contract-address-for-cert-verification"
            placeholder="Enter address. e.g. 0xbff6CbaE23f790826f4209438752bd269e63e8c5"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            /> */}
            <button onClick={handleOnclick}>View NFT</button>
            <p style={{textAlign:"center"}}>{status}</p>
            </div>
            {card && 
            NFTs.map((NFT,index) => { 
            console.log(NFT)
            return(<div className='card'>
                <div className='card-body'>
                    <div className='subheader'>
                        <div className="card-image"> 
                            <img src="https://gateway.pinata.cloud/ipfs/Qmb52oqVqNh7gn6ZRfaB88FdykuzMZgDttek8yeJXooX5U" alt="NFT" />
                        </div>
                        <div className='card-title'>
                            <h4>{NFT.metadata.name}</h4>
                            <p>Token Id :<span>{NFT.Token_id}</span></p>
                            <p>Membership:<br /><span>{NFT.metadata.membership}</span></p>
                            <p>Membership Expiry Date: <br /><span>{NFT.metadata.expiry_date_memberShip}</span></p>
                            <p>Issue Date: <span>{NFT.metadata.issue_date_nft}</span></p>

                        </div>
                    </div>
                    <div className='card-text'>
                        <p>wallet Add: {walletAddress}</p>
                    </div>
                    <div className='rewardtable'>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Reward</th>
                                <th>Redeem</th>
                                <th>Expiry Date</th>
                            </tr>
                           
                            {(NFT.metadata.rewards).map((reward,index) => {
                            return(<tr>
                                <td>{reward.issue_date_reward}</td>
                                <td>{reward.reward}</td>
                                <td>{reward.is_claimed ? "Yes" :"No"}</td>
                                <td>{reward.expiry_date_reward}</td>
                            </tr>)})}
                            
                        </table>
                    </div>
                </div>
            </div>)})}
        </div>
    </div>
  )
}
