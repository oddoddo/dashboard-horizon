import React from 'react'
import TodoHd from './components/TodoHd'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

const Todo = () => {
    return (
        <div>
            <TodoHd />
            <TodoEditor />
            <TodoList />
        </div>
    )
}

export default Todo
