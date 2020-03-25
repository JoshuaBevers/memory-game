import React, { Component } from "react";
import logo from "./digitalcrafts.png";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor() {
    super();
    this.state = { isFlipped: true };
  }

  clickHandler = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    memoryCardInnerClass = this.state.isFlipped
      ? false
      : (memoryCardInnerClass = "MemoryCardInner");
    memoryCardInnerClass = this.state.isFlipped
      ? true
      : (memoryCardInnerClass = "MemoryCardInner flipped");
    // if (this.state.isFlipped === true) {
    //   memoryCardInnerClass = "MemoryCardInner flipped";
    // }

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
