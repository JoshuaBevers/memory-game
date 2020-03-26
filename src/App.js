import React, { Component } from "react";
import "./App.css";
//components
import MemoryCard from "./components/MemoryCard";

function generateDeck() {
  const Symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`];
  let Deck = [];

  for (let i = 0; i < 16; i++) {
    const NewCard = { isFlipped: false, symbol: Symbols[i % 8] };
    Deck.push(NewCard);
  }
  shuffle(Deck);
  return Deck;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    };
  }
  pickCard = cardIndex => {
    if (this.state.deck[cardIndex].isFlipped === true) {
      return;
    }

    let cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];

      console.log("The card index is: ", card2Index);
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        console.log("they match. Unflip them");
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
      }
      newPickedCards = [];
    }
    this.setState({ deck: newDeck, pickedCards: newPickedCards });
  };

  unflipCards(card1Index, card2Index) {
    let card1 = { ...this.state.deck[card1Index] };
    let card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;
    console.log(card1, card2);
    let newDeck = this.state.deck.map((card, index) => {
      if (index === card1Index) {
        return card1;
      }
      if (index === card2Index) {
        return card2;
      }
      return card;
    });
    this.setState({ deck: newDeck });
  }
  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          key={index}
          pickCard={this.pickCard.bind(this, index)}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory game</h1>
          <p>Match cards to win</p>
        </header>
        <div className="row">{cardsJSX.slice(0, 4)}</div>
        <div className="row">{cardsJSX.slice(4, 8)}</div>
        <div className="row">{cardsJSX.slice(8, 12)}</div>
        <div className="row">{cardsJSX.slice(12, 16)}</div>
      </div>
    );
  }
}

export default App;
