import { GET_COLOR, GET_COLORS, ADD_COLOR, UPDATE_COLOR, DELETE_COLOR } from '../actions/types';

const initialState = {
    colors: [],
    color: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COLORS:
            return {
                ...state,
                colors: action.payload,
                loading: false
            };
        case GET_COLOR:
            return {
                ...state,
                color: action.payload
            };
        case ADD_COLOR:
            return {
                ...state,
                colors: [...state.colors, action.payload]
            };
        case UPDATE_COLOR:
            return {
                ...state,
                colors: state.colors.map((color) => {
                    if (action.payload.color.id === color.id) {
                        color = action.payload.color;
                    }
                    return color;
                })
            };
        case DELETE_COLOR:
            return {
                ...state,
                colors: state.colors.filter(color => color.id !== action.payload)
            };

        default:
            return state;
    }
}