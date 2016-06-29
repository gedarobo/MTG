import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk';

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware
        )
    )

    return store
}