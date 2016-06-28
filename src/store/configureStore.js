import {createStore} from 'redux'
import search from '../reducers'

export default function configureStore() {
    const store = createStore(search)

    store.subscribe(() => console.log(store.getState()))

    return store
}