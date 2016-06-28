import React from 'react'
import {Route} from 'react-router'
import DeckManager from '../components/DeckManager'

export default (
    <Route path="/" component={DeckManager}>
        <Route path="/search" component={DeckManager}/>
    </Route>
)