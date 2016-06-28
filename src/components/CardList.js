import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        return (
            <ul>
                {this.props.cards.map(card =>
                    <Card key={card.id} data={card}/>
                )}
            </ul>
        );
    }
};

export default CardList;