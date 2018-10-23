import { ADD_TODO, TOGGLE_TODO } from "../../constants/action-types";
import { LIST_TODOS_REQUEST, LIST_TODOS_SUCCESS, LIST_TODOS_FAILURE } from "../../constants/action-types";

const initialState = {
    list: [],
    isLoading: false,
    error: null
}
let nextGeneratedId = 0;

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: nextGeneratedId++,
                        text: action.payload,
                        completed: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                list: state.list.map(todo => {
                    if (todo._id !== action.payload) {
                        return todo;
                    }
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                })
            }
        case LIST_TODOS_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case LIST_TODOS_SUCCESS:
            return {
                ...state,
                fetching: false,
                list: action.list
            };
        case LIST_TODOS_FAILURE:
            return {
                ...state,
                fetching: false,
                list: null,
                error: action.error
            };
        default:
            return state;
    }
}
