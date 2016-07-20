import { Schema, arrayOf, normalize } from 'normalizr'
import * as types from '../constants/ActionTypes'

function requestDetail(id) {
    return {
        type: types.REQUEST_DETAIL,
        id
    }
}

function receiveDetail(id, detail) {
    return {
        type: types.RECEIVE_DETAIL,
        id,
        detail
    }
}

export function fetchDetail(id) {
    return dispatch => {
        dispatch(requestDetail(id))

        return fetch(`/mtg/cards/${id}`)
            .then(res => res.json())
            .then(data => dispatch(receiveDetail(id, normalize(data, cardScehma))))
            .catch(e => console.log(e));
    }
}

function requestCards(name) {
    return {
        type: types.REQUEST_CARDS,
        name
    }
}

function receiveCards(name, cards) {
    return {
        type: types.RECEIVE_CARDS,
        name,
        cards
    }
}


export function fetchCards(name) {
    return dispatch => {
        dispatch(requestCards(name))

        return fetch(`/mtg/cards?name=${name}`)
            .then(res => res.json())
            .then(data => dispatch(receiveCards(name, normalize(data, arrayOf(cardScehma)))))
            .catch(e => console.log(e));
    }
}

const cardScehma = new Schema('cardList', {
    assignEntity: (output, key, value, input) => {
        if (key === 'editions') {
            const newValue = []
            value.forEach(edition => {
                if (edition !== 0) {
                    newValue.push(edition)
                }
            })
            output[key] = newValue
        }
    }
})

const editionSchema = new Schema('editions', {
    idAttribute: edition => edition.multiverse_id
})

cardScehma.define({
    editions: arrayOf(editionSchema)
})

export function toggleEditionFilter() {
    return {
        type: types.TOGGLE_EDITION_FILTER
    }
}