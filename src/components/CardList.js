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
                            card.editions.sort((a, b) => a - b).map(edition =>
                                <Card card={card} edition={editions[edition]}/>
                            )
                        )
                    } else {
                        return cards.map(card =>
                            <Card key={card.id} card={card} edition={editions[card.editions.sort((a, b) => b - a)[0]]}/>
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