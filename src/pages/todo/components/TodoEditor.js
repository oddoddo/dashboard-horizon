import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const TodoEditor = () => {
    return (
        <Box py={5}>
            <Heading as={'h2'} fontSize={20}>
                새로운 todo 작성하기
            </Heading>
            <Flex py={3}>
                <Input type="text" placeholder="할 일을 추가하세요." bg={'white'} />
                <Button>추가</Button>
            </Flex>
        </Box>
    )
}

export default TodoEditor
