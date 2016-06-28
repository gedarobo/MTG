import React, {Component, PropTypes} from 'react';

export default class Card extends Component {
    render() {
        return (
            <li className="card_item">
                <div className="card_content">
                    <div className="card_img">
                        <img src={this.props.card.editions[0].image_url} />
                    </div>
                    <div style={{padding: '0 0 0 7rem'}}>{this.props.card.name}</div>
                    <div style={{padding: '0 0 0 7rem'}}>{this.props.card.types.join(' ')}</div>
                    <div style={{padding: '0 0 0 7rem'}}>{this.props.card.cost}</div>
                </div>
            </li>
        )
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}