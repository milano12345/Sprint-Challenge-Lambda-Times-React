import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => ( <Card card={card} />)
      )
  }

    </div>
  )
}


export default Cards;