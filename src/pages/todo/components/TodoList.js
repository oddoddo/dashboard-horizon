// TodoList.js
import React, { useMemo, useState } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

function TodoList() {
    const [search, setSearch] = useState('')
    const todos = useSelector((state) => state.todo.todos) // 수정된 부분

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const filteredTodo = useMemo(() => {
        if (Array.isArray(todos)) {
            return todos.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
        } else {
            return []
        }
    }, [todos, search])

    const lookback = useMemo(() => {
        console.log('lookback')
        const total = todos.length
        const done = todos.filter((item) => item.isDone).length
        const notDone = total - done

        return {
            total,
            done,
            notDone,
        }
    }, [todos])

    return (
        <div>
            <h3>할 일 목록 📃</h3>
            <input type="text" placeholder="검색어를 입력하세요" onChange={onChangeSearch} value={search} />

            <div>
                {filteredTodo.map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </div>

            <div>
                <h4>👀 통계</h4>
                <p>총 할 일: {lookback.total}</p>
                <p>완료한 할 일: {lookback.done}</p>
                <p>미완료한 할 일: {lookback.notDone}</p>
            </div>
        </div>
    )
}

export default TodoList
