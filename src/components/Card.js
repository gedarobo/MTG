import React, {Component, PropTypes} from 'react';

const Card = ({ card }) => (
    <li className="card_item">
        <div className="card_content">
            <div className="card_img">
                <img src={card.editions[0].image_url} />
            </div>
            <div style={{padding: '0 0 0 7rem'}}>{card.name}</div>
            <div style={{padding: '0 0 0 7rem'}}>{card.types.join(' ')}</div>
            <div style={{padding: '0 0 0 7rem'}}>{card.cost}</div>
        </div>
    </li>
)

export default Card;

Card.propTypes = {
    card: PropTypes.object.isRequired
}