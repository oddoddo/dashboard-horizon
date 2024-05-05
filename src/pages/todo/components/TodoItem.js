import React from 'react'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo } from '../../../store/slices/todoSlice' // todoSlice에서 액션 함수 가져오기

function TodoItem({ id, isDone, task, createdDate }) {
    const dispatch = useDispatch()

    return (
        <li key={id}>
            <input type="checkbox" checked={isDone} onChange={() => dispatch(updateTodo(id))} />
            <strong style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{task}</strong>
            <span>{format(new Date(createdDate), 'yyyy.MM.dd')}</span>
            <button onClick={() => dispatch(deleteTodo(id))}>삭제</button>
        </li>
    )
}

export default React.memo(TodoItem)
