import React, { PropTypes } from 'react';

const Card = ({ card, edition }) => (
    <li className="card_item">
        <div className="card_content">
            <div className="card_img">
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'url(' + edition.image_url + ')',
                    backgroundPosition: '-19px -40px',
                    borderRadius: '3%'
                }}></div>
            </div>
            <div className="card_info">
                <div>{card.name}</div>
                <div>{card.types.join(' ')}</div>
                <div>{card.cost}</div>
            </div>
        </div>
    </li>
)

export default Card;

Card.propTypes = {
    card: PropTypes.object.isRequired,
    edition: PropTypes.object.isRequired
}