import { GET_TOWN, GET_TOWNS, ADD_TOWN, UPDATE_TOWN, DELETE_TOWN } from '../actions/types';

const initialState = {
    towns: [],
    town: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TOWNS:
            return {
                ...state,
                towns: action.payload,
                loading: false
            };
        case GET_TOWN:
            return {
                ...state,
                town: action.payload
            };
        case ADD_TOWN:
            return {
                ...state,
                towns: [...state.towns, action.payload]
            };
        case UPDATE_TOWN:
            return {
                ...state,
                towns: state.towns.map((town) => {
                    if (action.payload.town.id === town.id) {
                        town = action.payload.town;
                    }
                    return town;
                })
            };
        case DELETE_TOWN:
            return {
                ...state,
                towns: state.towns.filter(town => town.id !== action.payload)
            };

        default:
            return state;
    }
}