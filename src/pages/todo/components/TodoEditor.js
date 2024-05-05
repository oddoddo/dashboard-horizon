import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../store/slices/todoSlice'

const TodoEditor = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    function onSubmit() {
        if (!task) return
        dispatch(
            addTodo({
                id: Date.now(),
                isDone: false,
                task,
                createdDate: new Date().getTime(),
            }),
        )
        setTask('')
    }

    function onChange(e) {
        setTask(e.target.value)
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }

    return (
        <Box py={5}>
            <Heading as={'h2'} fontSize={20}>
                새로운 todo 작성하기
            </Heading>
            <Flex py={3}>
                <Input
                    // inputRef를 사용하여 input 요소에 포커스를 줄 수 있습니다.
                    ref={(inputRef) => inputRef && inputRef.focus()}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={task}
                    type="text"
                    placeholder="할 일을 추가하세요."
                    bg={'white'}
                />
                <Button onClick={onSubmit}>추가</Button>
            </Flex>
        </Box>
    )
}

export default TodoEditor
