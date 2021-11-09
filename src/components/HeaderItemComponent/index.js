import React from "react";
import "./style.css";

function HeaderItem() {
  return (
    <div className="header-items">
      <div value="BTC" className="header-item">
        <div>
          <div className="top-item">
            <div>BTC/USD</div> <div>60000</div>
          </div>
        </div>
        <div>direction</div>
      </div>
      <div value="BTC" className="header-item">
        <div>
          <div className="top-item">
            <div>ETH/USD</div> <div>60000</div>
          </div>
        </div>
        <div>direction</div>
      </div>
      <div value="BTC" className="header-item">
        <div>
          <div className="top-item">
            <div>EUR/USD</div> <div>60000</div>
          </div>
        </div>
        <div>direction</div>
      </div>
      <div value="BTC" className="header-item">
        <div>
          <div className="top-item">
            <div>AAPL</div> <div>60000</div>
          </div>
        </div>
        <div>direction</div>
      </div>
      <div value="BTC" className="header-item">
        <div>
          <div className="top-item">
            <div>MSFT</div> <div>60000</div>
          </div>
        </div>
        <div>direction</div>
      </div>
      <div value="BTC" className="header-item">
        <div>
          <div className="top-item">
            <div>AMZN</div> <div>60000</div>
          </div>
        </div>
        <div>direction</div>
      </div>
    </div>
  );
}

export default HeaderItem;
