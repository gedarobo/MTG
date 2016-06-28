import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <li className="card_item">
                <div className="card_content">
                    <div className="card_img">
                        <img src={this.props.data.editions[0].image_url} />
                    </div>
                    <div style={{padding: '0 0 0 7rem'}}>{this.props.data.name}</div>
                    <div style={{padding: '0 0 0 7rem'}}>{this.props.data.types.join(' ')}</div>
                    <div style={{padding: '0 0 0 7rem'}}>{this.props.data.cost}</div>
                </div>
            </li>
        );
    }
};

export default Card;