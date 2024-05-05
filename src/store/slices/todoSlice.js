import { createSlice } from '@reduxjs/toolkit'

// 초기 상태
const initialState = {
    todos: [
        {
            id: 1,
            isDone: false,
            task: '고양이 밥주기',
            createdDate: new Date().getTime(),
        },
        {
            id: 2,
            isDone: false,
            task: '감자 캐기',
            createdDate: new Date().getTime(),
        },
        {
            id: 3,
            isDone: false,
            task: '고양이 놀아주기',
            createdDate: new Date().getTime(),
        },
    ],
}

// todoSlice 함수를 사용하여 `slice`를 생성합니다.
// slice는 액션 생성자 함수와 리듀서 함수를 한 번에 생성합니다.
export const todoSlice = createSlice({
    name: 'todo', // 슬라이스 이름
    initialState, // 초기 상태
    // 객체 형태로 리듀서 함수를 정의합니다.
    reducers: {
        addTodo: (state, action) => {
            // state.todos 배열에 새로운 할 일을 추가합니다.
            // action.payload에는 새로운 할 일이 들어있습니다.
            state.todos.push(action.payload) // 새로운 할 일을 추가합니다.
        },
        updateTodo: (state, action) => {
            // state.todos 배열에서 id가 일치하는 할 일을 찾습니다.
            // action.payload에는 할 일의 id가 들어있습니다.
            // 삼항 연산자를 사용하여 isDone 값을 반전시킵니다.
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
            )
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})

// 액션 생성자 함수 내보내기
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

// todoSlice.reducer 내보내기
export default todoSlice.reducer
