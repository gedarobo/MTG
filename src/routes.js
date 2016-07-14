import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import SearchPage from './containers/SearchPage'
import ResultPage from './containers/ResultPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={SearchPage} />
        <Route path="/result/:name" component={ResultPage} />
    </Route>
)