import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CardList from '../components/CardList'

class ResultPage extends Component {
    render() {
        const {cards} = this.props

        return (
            <div>
                <CardList cards={cards} />
            </div>
        )
    }
}

ResultPage.propTypes = {
    cards: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultPage)