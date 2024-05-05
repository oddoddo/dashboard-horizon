import { combineReducers, createStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    // cart: cartReducer,
})

const store = createStore(rootReducer)

export default store
