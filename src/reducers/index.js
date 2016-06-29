import {combineReducers} from 'redux'
import * as types from '../constants/ActionTypes'

function cards(state = [], action) {
    switch (action.type) {
        case types.REQUEST_CARDS:
            return state

        case types.RECEIVE_CARDS:
            return action.cards

        default:
            return state
    }
}


const rootReducer = combineReducers({
    cards
})

export default rootReducer
