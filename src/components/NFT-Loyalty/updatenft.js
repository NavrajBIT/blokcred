
import {React,useState,useEffect, useRef} from 'react';
import { NFTNavbar } from './NFTLoyalty';
import { UpdateForm } from './UpdateForm';
import { ScanPop } from './ScanPop';
import { claim_reward,updateNftreward,issueNftreward } from '../Scripts/apiCalls';
import UserContext from "../../context/userContext/UserContext";
import { useContext } from "react";

export const Updatenft = () => {
    const user = useContext(UserContext);
    const [walletAddress, setWalletAddress] = useState('');
    const [isUpdate,setisUpdate] = useState(false);
    const [image, setImage] = useState('');
    const [membershipLevel, setMembershipLevel] = useState('REGULAR');
    const [membershipexpirydate, setMembershipExpiryDate] = useState('');
    const [isReward, setIsReward] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogOpen2, setDialogOpen2] = useState(false);
    const [reward, setReward] = useState('');
    const [expiry_date_reward, setExpiryDateReward] = useState('');
    const [token_id,setToken_id] = useState('');
    const [issue_date_nft,setIssue_date_nft] = useState('');
    const [inputtoken_id,setInputToken_id] = useState(''); 



    const [NFTs,setNFTs] = useState([]);
    const [card,setCard] = useState(false);
    const [status, setStatus] = useState('');

    const handleOnclick = async () => {
        setStatus("Loading...")
        try{
            // let data = await fetch(`https://polygon-mumbai.g.alchemy.com/v2/grUWncEJ7W6uEsFhwdjcdVzDJPktAulv/getNFTs?owner=${walletAddress}`)
            // .then((data) => data.json());
            // for(let i=0;i<data.ownedNfts.length;i++){
            //     if (data.ownedNfts[i].title=="XYZ"){
            //         setNFTs([data.ownedNfts[i]]);
            //         setToken_id(parseInt(data.ownedNfts[i].id.tokenId));
            //     }

            // }
            // // setNFTs(data.ownedNfts);
            // setStatus("")
            // setCard(true);
            console.log(walletAddress)
            let data = await issueNftreward({
                request_type:"view_reward",
                account:user.userAccount,
                receiver:walletAddress,
                // token_id:inputtoken_id
            })
            if  (data.length > 0){
                console.log(data)
                setNFTs(data);
                setStatus("");
                setCard(true);
            }else{
                setStatus("No NFTs found");
            }
        } catch (error) {
            console.log(error);
        } 

    }

    const handleRedeem = async (token_id,arr_index) => {
        setCard(false);
        setStatus('Waiting for transaction to be mined...');
        try{
            let data = await issueNftreward({
                request_type:"claim_reward",
                account:walletAddress,
                token_id:token_id,
                arr_index:arr_index
            });
            if(data=='Success'){
                alert('Reward claimed successfully');
                handleOnclick()
                
            }
            else{
                alert('Reward not claimed');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onClickUpdateNft = async () => {
        setStatus('Waiting for transaction to be mined...');
        let ismebsershipLevel = true;
        console.log(membershipLevel,"membershipLevel........");
        if( membershipLevel ==='REGULAR'){
            ismebsershipLevel= false;
        }
        try{
            let data = await issueNftreward({
                request_type:"update_nft",
                account:user.userAccount,
                token_id:token_id,
                nameOfOrg:'XYZ',
                image:image,
                isMembership:ismebsershipLevel,
                membership:membershipLevel ,
                expiry_date_of_membership:membershipexpirydate, 
                isReward:isReward, 
                reward:reward, 
                expiry_date_of_reward:expiry_date_reward,
                });
            if(data=='Success'){
                alert('NFT updated successfully');
                handleOnclick()
                setDialogOpen2(false)
                setImage('');
                setMembershipLevel('REGULAR');
                setMembershipExpiryDate('');
                setIsReward(false);
                setReward('');
                setExpiryDateReward('');

            }
            else{
                alert('NFT not updated');
            }
        } catch (error) {
            console.log(error);
        }
    }
   

    
    const messageRef = useRef();
    
    useEffect(() => {
        if (messageRef.current) {
          messageRef.current.scrollIntoView(
            {
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest'
            })
        }
      },
      [isUpdate,isReward])

    

  return (
    <div className="dashboardpage">
        <div className="dashboardcontainer" style={{maxWidth:"100%"}}>
            <NFTNavbar />
            <ScanPop dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} setWalletAddress={setWalletAddress}/>
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
            {/* <label htmlFor="contract-address-for-cert-verification">
            Token ID:
            </label>
            <div className="input-icons">
                
                <input className="input-field" id="viewnft-input"
                type="text"
                placeholder="Enter Token ID. e.g. 0xbff6C2094387.."
                value={inputtoken_id}
                onChange={(e) => setInputToken_id(e.target.value)}/>
            </div> */}

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
            <div style={{ display:"flex",width:"60%",justifyContent:"space-around",flexWrap:"wrap"}}className='card-container'>
            {card && 
            NFTs.map((NFT,index) => { 
                
            return(<div className='card-update'>
                <div className='card-body'>
                    <div className='subheader'>
                        <div className="card-image"> 
                        <img src={`http://127.0.0.1:8000${NFT.nft_image}`} style={{marginTop:"20px",height:"200px",width:"200px"}}alt="NFT"  />
                        </div>
                        <div className='card-title'>
                            <h4>{NFT.metadata.name}</h4>
                            <p>Token Id :<span>{NFT.token_id}</span></p>
                           <div>
                            <p>Membership:<br /><span>{NFT.metadata.membership}</span></p>
                            {NFT.metadata.expiry_date_memberShip ==="" ? <></> : <p>Membership Expiry Date: <br /><span> {NFT.metadata.expiry_date_memberShip}</span></p> }
                            <p>Issue Date: <span>{NFT.metadata.issue_date_nft}</span></p>
                            </div>
                            <button className='update-btn' onClick={() => {
                                  setToken_id(NFT.token_id)
                                  console.log(NFT.token_id,"token_id")
                                  setDialogOpen2(true)
                            }}>Update</button>
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
                                <th>Action</th>
                            </tr>
                           
                            {NFT.metadata.rewards && (NFT.metadata.rewards).map((reward,i) => {
                            return(<tr>
                                <td>{reward.issue_date_reward}</td>
                                <td>{reward.reward}</td>
                                <td>{reward.is_claimed ? "Yes" :"No"}</td>
                                <td>{reward.expiry_date_reward}</td>
                                <td> {reward.is_claimed ? <button className='update-btn-disable' disabled>Redeem</button> : <button className='update-btn' onClick={(e) => {  
                                    setToken_id(NFT.token_id) 
                                     handleRedeem(NFT.token_id,i) }} >Redeem</button>}</td>
                            </tr>)})}
                            
                        </table>
                    </div>
                </div>
            </div>)})}
          </div>
           
            {/* {isUpdate &&
            <div className='updateform' ref={messageRef}>
                 <div className="individualformcontainer" id='updateform'>
                    <h3>Update NFT</h3>
                <label htmlFor="image-for-nft">
                Image for NFT:
                </label>
                <input
                type="file"
                id="image-for-nft"
                onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="membership-level">
                Membership
                </label>
                <select onChange={(e)=> setMembershipLevel(e.target.value)} name="membership-level" id="membership-level">
                    <option value="REGULAR">REGULAR</option>
                    <option value="PREMIUM">PREMIUM</option>
                </select>
            
                {membershipLevel==="PREMIUM" && <><label htmlFor="Expiry-date-membership">
                Expiry Date of Membership
                </label>
                <input
                type="date"
                id="Expiry-date-membership"
                value={membershipexpirydate}
                onChange={(e) => setMembershipExpiryDate(e.target.value)}
                />
                </>}
                <label htmlFor="reward-yes-no">
                Reward
                </label>
                <select value={isReward} onChange={(e) => setIsReward(e.target.value)} name="reward-yes-no" id="reward-yes-no">
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                </select>
             
               
                {isReward && <><label htmlFor="reward-amount">
                    Reward 
                </label>
                <input
                type="text"
                id="reward-amount"
                placeholder='eg. 10% off'
                />
                <label htmlFor="expiry-date-reward">
                Expiry Date of Reward
                </label>
                <input
                type="date"
                id="expiry-date-reward"
                />
                </>}
            
                <button>Issue NFT</button>
                </div>
            </div> } */}
            <UpdateForm 
            dialogOpen={dialogOpen2}
            setDialogOpen={setDialogOpen2}
            membershipLevel={membershipLevel}
            setMembershipLevel={setMembershipLevel}
            membershipexpirydate={membershipexpirydate}
            setMembershipExpiryDate={setMembershipExpiryDate}
            isReward={isReward}
            setIsReward={setIsReward}
            reward={reward}
            setReward={setReward}
            rewardexpirydate={expiry_date_reward}
            setRewardExpiryDate={setExpiryDateReward}
            update_nft={onClickUpdateNft}
            setImage={setImage}

            />
            </div>

        </div>
 
  )
}