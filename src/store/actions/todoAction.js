export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (task) => ({
    type: ADD_TODO,
    payload: {
        id: new Date().getTime(),
        isDone: false,
        task,
        createdDate: new Date().getTime(),
    },
})

// todo 업데이트 함수
export const updateTodo = (id) => ({
    type: UPDATE_TODO,
    payload: id,
})

// todo 삭제 함수
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
})
