import {createStore, applyMiddleware} from 'redux'
import search from '../reducers'
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
    const createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware
    )(createStore);

    const store = createStoreWithMiddleware(search)

    return store
}