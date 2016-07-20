import React, {Component, PropTypes} from 'react'
import Card from './Card'

export default class CardList extends Component {
    render() {
        const { cards, editions, editionFilter } = this.props

        return (
            <ul>
                {(() => {
                    if (editionFilter) {
                        return cards.map(card =>
                            card.editions.map(edition =>
                                <Card card={card} edition={editions[edition]}/>
                            )
                        )
                    } else {
                        return cards.map(card =>
                            <Card key={card.id} card={card} edition={editions[card.editions[0]]}/>
                        )
                    }
                })()}
            </ul>
        )
    }
}

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    editions: PropTypes.object.isRequired,
    editionFilter: PropTypes.bool.isRequired
}