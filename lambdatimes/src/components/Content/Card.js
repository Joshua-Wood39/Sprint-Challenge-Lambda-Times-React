import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  console.log(props.card)
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt={props.card.img}/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.PropTypes = {
  card: PropTypes.arrayOf(PropTypes.string)
}

export default Card;
