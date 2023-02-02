import React from 'react';
import Dialog from "@mui/material/Dialog";

export const UpdateForm = (props) => {
    const {dialogOpen,setDialogOpen,setImage,setMembershipLevel,membershipLevel,
        membershipexpirydate,setMembershipExpiryDate,isReward,setIsReward,reward,setReward,rewardexpirydate,setRewardExpiryDate,update_nft} = props;
  return (
    <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <div className="individualpage">
                 <div className="individualformcontainer" >
                    <h3>Update NFT</h3>
                <label htmlFor="image-for-nft">
                Image for NFT:
                </label>
                <input
                type="file"
                id="image-for-nft"
                onChange={(e) => setImage(e.target.files[0])}
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
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                placeholder='eg. 10% off'
                />

                <label htmlFor="expiry-date-reward">
                Expiry Date of Reward
                </label>
                <input
                type="date"
                id="expiry-date-reward"
                value={rewardexpirydate}
                onChange={(e) => setRewardExpiryDate(e.target.value)}
                />
                </>}

            
                <button onClick={update_nft }>Update NFT</button>
                </div>
            </div> 
  </Dialog>
  )
}
