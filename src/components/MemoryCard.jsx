import React, { Component } from "react";
import logo from "./digitalcrafts.png";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
  }

  clickHandler = () => {
    console.log("this is being called.");
    this.setState({ isFlipped: !this.state.isFlipped });
    console.log(this.state.isFlipped);
  };

  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    if (this.state.isFlipped === true) {
      memoryCardInnerClass = "MemoryCardInner flipped";
    }

    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className={memoryCardInnerClass}>
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
