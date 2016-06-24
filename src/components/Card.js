import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <li style={{listStyle: 'none', height: '10rem'}}>
                <div style={{position: 'relative'}}>
                    <div style={{position: 'absolute', top: 0, left: 0, width: '7rem'}}>
                        <img width="100%" src={this.props.data.editions[0].image_url} />
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