import * as types from '../constants/ActionTypes';

function requestCards(name) {
    return {
        type: types.REQUEST_CARDS,
        name
    }
}

function receiveCards(name, data) {
    return {
        type: types.RECEIVE_CARDS,
        name,
        cards: [...data]
    }
}


export function fetchCards(name) {
    return dispatch => {
        dispatch(requestCards(name))

        return fetch(`/mtg/cards?name=${name}`)
            .then(res => res.json())
            .then(data => dispatch(receiveCards(name, data)))
            .catch(e => console.log(e));
    }
}