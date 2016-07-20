import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import { fetchCards } from '../actions'

class ResultPage extends Component {
    componentDidMount() {
        this.props.fetchCards(this.props.params.name)
    }

    render() {
        const { cards, editions, filter } = this.props

        return (
            <div>
                <CardList cards={cards} editions={editions} editionFilter={filter.showAllEdition} />
            </div>
        )
    }
}

ResultPage.propTypes = {
    cards: PropTypes.array.isRequired,
    editions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    const {
        cards: {
            entities,
            result
        }
    } = state
    const results = result || []
    const editions = entities && entities.editions || {}

    return {
        cards: results.map(card => entities.cardList[card]),
        editions,
        filter: state.filter
    }
}

export default connect(mapStateToProps, {
    fetchCards
})(ResultPage)