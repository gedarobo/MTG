import React, {Component, PropTypes} from 'react'
import Card from './Card'

export default class CardList extends Component {
    render() {
        const { cards, editions } = this.props

        return (
            <ul>
                {cards.map(card =>
                    <Card key={card.id} card={card} editions={editions} />
                )}
            </ul>
        );
    }
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    editions: PropTypes.object.isRequired
}