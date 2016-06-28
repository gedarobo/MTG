import * as types from '../constants/ActionTypes';

const getCardList = name => {
    fetch('/mtg/cards?name=' + name)
        .then(res => res.json())
        .then(data => data
        )
        .catch(e => console.log(e));
}

const initialState = {
    cards: []
}

export default function search(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_NAME:
            fetch('/mtg/cards?name=' + name)
                .then(res => res.json())
                .then(data => {
                    console.log('@')
                    return Object.assign({}, state, {
                        cards: data
                    })
                })
                .catch(e => console.log(e));

        default:
            return state
    }
}



