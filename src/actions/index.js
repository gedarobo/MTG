import * as types from '../constants/ActionTypes';

export function searchCardByName(name) {
    return {
        type: types.SEARCH_NAME,
        name
    };
}