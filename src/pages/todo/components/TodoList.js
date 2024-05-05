// TodoList.js
import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

function TodoList() {
    const [search, setSearch] = useState('')
    const todos = useSelector((state) => state.todo.todos) // 수정된 부분

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const filteredTodo = () => {
        if (Array.isArray(todos)) {
            return todos.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
        } else {
            return []
        }
    }

    return (
        <div>
            <h3>할 일 목록 📃</h3>
            <input type="text" placeholder="검색어를 입력하세요" onChange={onChangeSearch} value={search} />

            <div>
                {filteredTodo().map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default TodoList
