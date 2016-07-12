import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import CardSearch from '../components/CardSearch'
import * as Actions from '../actions'

class SearchPage extends Component {
    handleSearch(name) {
        const { actions } = this.props
        actions.fetchCards(name)
        browserHistory.push('/result')
    }

    render() {
        return (
            <div>
                <CardSearch onSearchClick={this.handleSearch.bind(this)} />
            </div>
        )
    }
}

SearchPage.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
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
)(SearchPage)