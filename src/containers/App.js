import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CardSearch from '../components/CardSearch'
import CardList from '../components/CardList'
import Navigation from '../components/Navigation'
import * as Actions from '../actions'

export default class App extends Component {
    render() {
        const { children } = this.props

        return (
            <div>
                { children }
                <Navigation/>
            </div>
        )
    }
}