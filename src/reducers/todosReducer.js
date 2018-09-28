import { ADD_TODO } from "../constants/action-types";
import { TOGGLE_TODO } from "../constants/action-types";

const initialState = [];

let nextGeneratedId = 0;

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: nextGeneratedId++, //action.id,
                text: action.payload,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id !== action.payload) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, todo(undefined, action)];
        case TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
}

