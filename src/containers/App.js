import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CardSearch from '../components/CardSearch'
import CardList from '../components/CardList'
import Navigation from '../components/Navigation'
import * as Actions from '../actions'

class App extends Component {
    render() {
        const {cards, actions} = this.props

        return (
            <div>
                <CardSearch onSearchClick={actions.fetchCards} />
                <CardList cards={cards} />
                <Navigation/>
            </div>
        )
    }
}

App.propTypes = {
    cards: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)