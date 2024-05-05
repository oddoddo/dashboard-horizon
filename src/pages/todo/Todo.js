import React, { useReducer, useState } from 'react'
import TodoHd from './components/TodoHd'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../../store/slices/todoSlice'

// Redux store 생성
// configureStore 함수를 사용하여 Redux store를 생성합니다.
const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
})

const Todo = () => {
    return (
        <Provider store={store}>
            <TodoHd />
            <TodoEditor />
            <TodoList />
        </Provider>
    )
}

export default Todo
