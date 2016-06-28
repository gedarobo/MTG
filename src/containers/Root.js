import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import routes from '../routes'
import  {Router} from 'react-router'
import DeckManager from '../components/DeckManager'

export default class Root extends Component {
    render() {
        const {store} = this.props

        return (
            <Provider store={store}>
                <DeckManager/>
            </Provider>
        )
    }
}

Root.PropTypes = {
    store: PropTypes.object.isRequired
}