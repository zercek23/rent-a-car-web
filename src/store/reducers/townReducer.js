import { GET_TOWN, GET_TOWNS, ADD_TOWN, UPDATE_TOWN, DELETE_TOWN } from '../actions/types';

const initialState = {
    towns: []
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
                    if (action.payload.id === town.ID) {
                        town = action.payload.town;
                    }
                    return town;
                })
            };
        case DELETE_TOWN:
            return {
                ...state,
                towns: state.towns.filter(town => town.ID !== action.payload)
            };

        default:
            return state;
    }
}