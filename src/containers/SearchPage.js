import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import CardSearch from '../components/CardSearch'

class SearchPage extends Component {
    handleSearch(searchKeyword) {
        const paramList = []
        Object.keys(searchKeyword).forEach(key => {
            if (searchKeyword[key]) {
                paramList.push(key + '=' + searchKeyword[key])
            }
        })

        browserHistory.push(`/result?${paramList.join('&')}`)
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