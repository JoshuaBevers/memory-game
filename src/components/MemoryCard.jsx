import React, { Component } from "react";
import logo from "./digitalcrafts.png";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
  }

  clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className="MemoryCardInner flipped">
          <div className="MemoryCardBack">
            <img src={logo} alt="" className="Image"></img>
          </div>
          <div className="MemoryCardFront">∆</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
