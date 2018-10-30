import { LIST_PLANS_REQUEST, LIST_PLANS_SUCCESS, LIST_PLANS_FAILURE } from "../constants/action-types";

const initialState = {
    list: [],
    isLoading: false,
    error: null
}

export const plansReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PLANS_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case LIST_PLANS_SUCCESS:
            return {
                ...state,
                fetching: false,
                list: action.list
            };
        case LIST_PLANS_FAILURE:
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
