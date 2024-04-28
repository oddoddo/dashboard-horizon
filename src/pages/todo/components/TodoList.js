import React from 'react'
import TodoItem from './TodoItem'
import { Box, Heading, Input } from '@chakra-ui/react'

const TodoList = () => {
    return (
        <Box py={5}>
            <Heading as={'h2'} fontSize={20}>
                할 일 목록
            </Heading>
            <Input type="text" placeholder="search" my={3} bg={'white'} />

            <ul>
                <TodoItem />
            </ul>
        </Box>
    )
}

export default TodoList
