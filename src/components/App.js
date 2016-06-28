import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CardSearch from './CardSearch'
import CardList from './CardList'
import Navigation from './Navigation'
import * as Actions from '../actions'

class App extends Component {
    render() {
        const {cards, actions} = this.props

        return (
            <div>
                <CardSearch onSearchClick={actions.searchCardByName} />
                <CardList cards={cards} actions={actions} />
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