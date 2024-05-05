import { createContext, useContext, useReducer } from 'react'

const initialState = [
    {
        id: 1,
        isDone: false,
        task: '고양이 밥주기',
        createdDate: new Date().getTime(), // 현재 시간
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
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [action.payload, ...state]
        case 'update':
            return state.map((item) => (item.id === action.payload ? { ...item, isDone: !item.isDone } : item))
        case 'delete':
            return state.filter((item) => item.id !== action.payload)
        default:
            return state
    }
}

// context 생성
const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

// context 제공
export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

// context 사용
export function useTodoState() {
    return useContext(TodoStateContext)
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext)
}
