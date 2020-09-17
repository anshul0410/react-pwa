import {createStore, combineReducers, applyMiddleware} from 'redux';
import Reducers from './reducers';

const rootReducer = combineReducers({
    coffeeList: Reducers.coffeeList
})

export default function configureStore() {
    return createStore(
        rootReducer
    )
}