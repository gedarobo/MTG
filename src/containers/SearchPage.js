import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import CardSearch from '../components/CardSearch'

class SearchPage extends Component {
    handleSearch(name) {
        browserHistory.push(`/result/${name}`)
    }

    render() {
        return (
            <div>
                <CardSearch onSearchClick={this.handleSearch.bind(this)} />
            </div>
        )
    }
}

export default SearchPage