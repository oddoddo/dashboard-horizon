import React, { useReducer, useState } from 'react'
import TodoHd from './components/TodoHd'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import { TodoProvider } from '../../contexts/TodoContext'
import { Provider } from 'react-redux'
import store from '../../store'

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
