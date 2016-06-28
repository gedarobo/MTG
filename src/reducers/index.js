import * as types from '../constants/ActionTypes';

const initialState = {
    cards: []
}

export default function search(state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_CARDS:
            return Object.assign({}, state, {

            })

        case types.RECEIVE_CARDS:
            return Object.assign({}, state, {
                cards: action.cards
            })

        default:
            return state
    }
}



