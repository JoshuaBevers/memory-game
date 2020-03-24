import React, { Component } from "react";
import logo from "./digitalcrafts.png";
import "./MemoryCard.css";

class MemoryCard extends Component {
  render() {
    return (
      <div className="MemoryCard">
        <img src={logo} alt="" className="Image"></img>
      </div>
    );
  }
}

export default MemoryCard;
