import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

function detail(state = {}, action) {
    switch (action.type) {
        case types.REQUEST_DETAIL:
            return state

        case types.RECEIVE_DETAIL:
            return action.detail

        default:
            return state
    }
}

function cards(state = {}, action) {
    switch (action.type) {
        case types.REQUEST_CARDS:
            return state

        case types.RECEIVE_CARDS:
            return action.cards

        default:
            return state
    }
}

function filter(state = { showAllEdition: false }, action) {
    switch (action.type) {
        case types.TOGGLE_EDITION_FILTER:
            return Object.assign({}, state, {
                showAllEdition: !state.showAllEdition
            })

        default:
            return state
    }
}


const rootReducer = combineReducers({
    detail,
    cards,
    filter,
    routing
})

export default rootReducer
