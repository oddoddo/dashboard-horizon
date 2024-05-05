import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { Box, Heading, Input } from '@chakra-ui/react'
import { useTodoState } from '../../../contexts/TodoContext'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const [search, setSearch] = useState('')
    // const todo = useTodoState()
    const todo = useSelector((state) => state.todo.todos)

    function onChangeSearch(e) {
        setSearch(e.target.value)
    }

    // 검색어가 포함된 todo만 필터링
    const filteredTodo = () => {
        return todo.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
    }

    return (
        <Box py={5}>
            <Heading as={'h2'} fontSize={20}>
                할 일 목록
            </Heading>
            <Input value={search} onChange={onChangeSearch} type="text" placeholder="search" my={3} bg={'white'} />

            <ul>
                {filteredTodo().map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </ul>
        </Box>
    )
}

export default TodoList
