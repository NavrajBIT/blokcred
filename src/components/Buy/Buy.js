import React from "react";
import "../../Styles/buy.css";
import img from "../../Styles/nftimage.webp";
import { FaEthereum } from "react-icons/fa";

const Buy = () => {
  const handleClick = (e) => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  };
  return (
    <>
      <div className="buy_box">
        <div className="buy_info">
          <div className="upper_part">
            <div className="nft_image">
              <img src={img} alt="" />
            </div>
            <div className="nft_details">
              <div className="nft_name">
                <h2>Name Of The NFT</h2>
              </div>
              <div className="owner_createdby">
                <div className="owner">
                  <h4>Owner - Anubhav Soni </h4>
                </div>
                <div className="creator">
                  <h4>Created By - Anubhav Soni </h4>
                </div>
              </div>
              <div className="buy_now">
                <p>Current Price</p>
                <div className="price">
                  <FaEthereum /> ($15,890)
                </div>
                <div className="buy_button">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="lower_part">
            {/* <div className="buy_description_box">
              <div className="desc">
                <div className="heading">
                  <h4>Description</h4>
                </div>
                <div className="content_box">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus saepe cupiditate odit qui neque provident ipsam?
                    Quibusdam velit error quo debitis fugiat exercitationem
                    ipsum, obcaecati voluptate sint mollitia odio animi
                    dignissimos? Dolore, ipsam aut!
                  </p>
                </div>
              </div>
              <div className="spec">
                <div className="heading">
                  <h4>Specification</h4>
                </div>
                <div className="content_box">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus saepe cupiditate odit qui neque provident ipsam?
                    Quibusdam velit error quo debitis fugiat exercitationem
                    ipsum, obcaecati voluptate sint mollitia odio animi
                    dignissimos? Dolore, ipsam aut!
                  </p>
                </div>
              </div>

              <div className="details">
                <div className="heading">
                  <h4>Details</h4>
                </div>
                <div className="content_box">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus saepe cupiditate odit qui neque provident ipsam?
                    Quibusdam velit error quo debitis fugiat exercitationem
                    ipsum, obcaecati voluptate sint mollitia odio animi
                    dignissimos? Dolore, ipsam aut!
                  </p>
                </div>
              </div>
            </div> */}

            <div className="desc">
              <button
                type="button"
                onClick={(e) => handleClick(e)}
                className="collapsible"
              > Description </button>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="spec">
              <button type="button" 
                onClick={(e) => handleClick(e)}
              className="collapsible">
                Specification
              </button>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="details">
              <button type="button"
                onClick={(e) => handleClick(e)}
               className="collapsible">
                Details
              </button>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
