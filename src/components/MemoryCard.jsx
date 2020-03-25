import React, { Component } from "react";
import logo from "./digitalcrafts.png";
import "./MemoryCard.css";

class MemoryCard extends Component {
  render() {
    return (
      <div className="MemoryCard">
        <div className="MemoryCardInner">
          <div className="MemoryCardFront">
            ∆
            <div className="MemoryCardBack">
              <img src={logo} alt="" className="Image"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
