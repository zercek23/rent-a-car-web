import { GET_GEARTYPE, GET_GEARTYPES, ADD_GEARTYPE, UPDATE_GEARTYPE, DELETE_GEARTYPE } from '../actions/types';

const initialState = {
    gearTypes: [],
    gearType: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GEARTYPES:
            return {
                ...state,
                gearTypes: action.payload
            };
        case GET_GEARTYPE:
            return {
                ...state,
                gearType: action.payload
            };
        case ADD_GEARTYPE:
            return {
                ...state,
                gearTypes: [...state.gearTypes, action.payload]
            };
        case UPDATE_GEARTYPE:
            return {
                ...state,
                gearTypes: state.gearTypes.map((gearType) => {
                    if (action.payload.gearType.id === gearType.id) {
                        gearType = action.payload.gearType;
                    }
                    return gearType;
                })
            };
        case DELETE_GEARTYPE:
            return {
                ...state,
                gearTypes: state.gearTypes.filter(gearType => gearType.id !== action.payload)
            };

        default:
            return state;
    }
}