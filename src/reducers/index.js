import { ADD_TODO } from "../constants/action-types";

const initialState = {
  todos: []
};

let nextGeneratedId = 0;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: 
      return { ...state, 
        todos: [ ...state.todos, 
          {
            id: nextGeneratedId++,
            text: action.payload, 
            completed: false
          }]
      };
    default:
      return state;
  }
}

export default rootReducer;

