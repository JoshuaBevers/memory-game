import React, { Component } from "react";
import logo from "./digitalcrafts.png";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    // let flipCard = this.state.isFlipped
    //   ? false
    //   : (memoryCardInnerClass = "MemoryCardInner flipped");
    if (this.props.isFlipped === true) {
      memoryCardInnerClass = "MemoryCardInner flipped";
    }

    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img src={logo} alt="" className="Image"></img>
          </div>
          <div className="MemoryCardFront">{this.props.symbol}</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
