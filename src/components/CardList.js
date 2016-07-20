import React, {Component, PropTypes} from 'react'
import Card from './Card'

export default class CardList extends Component {
    render() {
        const { cards, editions } = this.props

        return (
            <ul>
                {cards.map(card =>
                    card.editions.map(edition =>
                        <Card card={card} edition={editions[edition]} />
                    )
                )}
            </ul>
        );
    }
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    editions: PropTypes.object.isRequired
}