import React from 'react'
import '../../Styles/sell.css'
import img from "../../Styles/nftimage.webp"

const Sell = () => {
  return (
    <>
        <div className="sell_box">
            <div className="sell_info">
              <div className="upper_image_part">
                <img src={img} alt="" />
              </div>
              <div className="span_head">
              <span>Type</span>
              </div>
              <div className="price_type">
                <div className="fixed_price">
                  <p>$</p>
                  <h4>Fixed Price</h4>

                </div>
                <div className="time_auction">
                  <p>@</p>
                  <h4>Timed Auction</h4>

                </div>
              </div>

              <div className="span_head">
              <span>Price</span>
              </div>

              <div className="price_info">
                <div className="currency_selection">
                  <select name="select" id="">
                    <option value="eth">ETH</option>
                    <option value="btc">BTC</option>
                  </select>
                </div>
                  <div className="input">
                    <input type="text" placeholder='Amount' />
                  </div>
              </div>

              <div className="span_head">
              <span>Duration</span>
              </div>
              <div className="duration">
                <input type="date" />
              </div>

              <div className="sell_button">
                <button>Sell</button>
              </div>

            </div>
        </div>
    </>
  )
}

export default Sell