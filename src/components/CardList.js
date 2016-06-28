import React, {Component, PropTypes} from 'react'
import Card from './Card'

export default class CardList extends Component {
    render() {
        return (
            <ul>
                {this.props.cards.map(card =>
                    <Card key={card.id} card={card}/>
                )}
            </ul>
        );
    }
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired
}