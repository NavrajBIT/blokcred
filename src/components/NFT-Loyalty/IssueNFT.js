import {React,useState} from 'react';
import './nftloyalty.css';
import { NFTNavbar } from './NFTLoyalty';
import { ScanPop } from './ScanPop';
import { issueNftreward } from '../Scripts/apiCalls';
import UserContext from "../../context/userContext/UserContext";
import { useContext } from "react";





export const IssueNFT = () => {
    const user = useContext(UserContext);
    const [walletAddress, setWalletAddress] = useState('');
    const [image, setImage] = useState('');
    const [membershipLevel, setMembershipLevel] = useState('REGULAR');
    const [membershipexpirydate, setMembershipExpiryDate] = useState('');
    const [isReward, setIsReward] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [reward, setReward] = useState('');
    const [expiry_date_reward, setExpiryDateReward] = useState('');
    const [status, setStatus] = useState('');

    const onClickIssueNft = async () => {
        if (walletAddress === '') {
            alert('Please enter wallet address');
            return;
        }
        if (image === '') {
            alert('Please select image');
            return;
        }
        if (membershipLevel === 'PREMIUM' && membershipexpirydate === '') {
            alert('Please enter expiry date of membership');
            return;
        }
        if (isReward && reward === '') {
            alert('Please enter reward');
            return;
        }
        if (isReward && expiry_date_reward === '') {
            alert('Please enter expiry date of reward');
            return;
        }
        
        setStatus('Waiting for transaction to be mined...');
        let ismebsershipLevel = true;
        if( membershipLevel ==='REGULAR'){
            ismebsershipLevel= false;
        }
        const result = await issueNftreward(
            {account:user.userAccount,
            receiver:walletAddress,
            nameOfOrg:user.userData.name,
            image:image,
            isMembership:ismebsershipLevel,
            membership: membershipLevel,
            expiry_date_of_membership:membershipexpirydate, 
            isReward:isReward, 
            reward:reward, 
            expiray_date_of_reward:expiry_date_reward
            });
        if(result=='Success'){
            alert('NFT issued successfully');
            window.location.reload();
        }
        else{
            alert('NFT not issued');
        }

    };




    


  return (
    <div className="dashboardpage">
        <div className="dashboardcontainer">
            <NFTNavbar />
            <div className='wallet-address'>
            <div className="individualformcontainer">
                {/* <button onClick={() => setDialogOpen(true)}>Scan QR Code</button> */}
                <label htmlFor="contract-address-for-cert-verification">
                Wallet Address:
                </label>
                <div className="input-icons">
                <i onClick={() => setDialogOpen(true)}  className="fa fa-camera icon">
                </i>
                <input className="input-field" 
                type="text"
                id="contract-address-for-cert-verification"
                placeholder="Wallet Add. e.g.0xbff6CbaE.."
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
                <label htmlFor="image-for-nft">
                Image for NFT:
                </label>
                <input
                type="file"
                id="image-for-nft"
                onChange={(e) => setImage(e.target.files[0])}
                />
                {image.name}
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
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                />

                <label htmlFor="expiry-date-reward">
                Expiry Date of Reward
                </label>
                <input
                type="date"
                id="expiry-date-reward"
                value={expiry_date_reward}
                onChange={(e) => setExpiryDateReward(e.target.value)}
                />
                </>}

            
                <button onClick={onClickIssueNft} >Issue NFT</button>
                <p>{status}</p>
                </div>
            </div>
            <ScanPop 
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                setWalletAddress={setWalletAddress}
            />
        </div>
    </div>
  )
}
