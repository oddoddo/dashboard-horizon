import { Button, Checkbox, Flex, FormLabel, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../../store/actions/todoAction'

const TodoItem = ({ id, isDone, task, createdDate }) => {
    const dispatch = useDispatch()

    return (
        <Flex key={id} as={'li'} alignItems={'center'} gap={3}>
            <Checkbox onChange={() => dispatch(updateTodo(id))} checked={isDone} name="todoTask" id="todoTask">
                <Text textDecoration={isDone ? 'line-through' : 'none'} as={'strong'} fontSize={20} fontWeight={600}>
                    {task}
                </Text>
                <span>{new Date(createdDate).toLocaleDateString()}</span>
            </Checkbox>
            <Spacer />
            <Button
                onClick={() => {
                    dispatch(deleteTodo(id))
                }}
            >
                삭제
            </Button>
        </Flex>
    )
}

export default TodoItem
