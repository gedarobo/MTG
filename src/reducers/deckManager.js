import * as types from '../constants/ActionTypes';

const initialState = [];

export default function deckManager(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_NAME:
            return [];
    }
}