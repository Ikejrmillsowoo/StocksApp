import React from "react";
import StockDisplay from "../StockDisplay";
import "./style.css";

function Display() {
  return (
    <div className="main-display">
      <h1>Display Component</h1>
      <StockDisplay />
    </div>
  );
}

export default Display;
