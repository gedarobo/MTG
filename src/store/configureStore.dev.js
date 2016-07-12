import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import creatorLogger from 'redux-logger'
import DevTools from '../containers/DevTools'

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                thunkMiddleware
            ),
            DevTools.instrument()
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}