import { Button, Checkbox, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const TodoItem = () => {
    return (
        <Flex as={'li'} alignItems={'center'} gap={3}>
            <Checkbox name="" id="" />
            <Text as={'strong'} fontSize={20} fontWeight={600}>
                고양이 밥주기
            </Text>
            <span>2024.04.27</span>
            <Spacer />
            <Button>삭제</Button>
        </Flex>
    )
}

export default TodoItem
