import { GET_FUELTYPE, GET_FUELTYPES, ADD_FUELTYPE, UPDATE_FUELTYPE, DELETE_FUELTYPE } from '../actions/types';

const initialState = {
    fuelTypes: [],
    fuelType: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FUELTYPES:
            return {
                ...state,
                fuelTypes: action.payload,
                loading: false
            };
        case GET_FUELTYPE:
            return {
                ...state,
                fuelType: action.payload
            };
        case ADD_FUELTYPE:
            return {
                ...state,
                fuelTypes: [...state.fuelTypes, action.payload]
            };
        case UPDATE_FUELTYPE:
            return {
                ...state,
                fuelTypes: state.fuelTypes.map((fuelType) => {
                    if (action.payload.fuelType.id === fuelType.id) {
                        fuelType = action.payload.fuelType;
                    }
                    return fuelType;
                })
            };
        case DELETE_FUELTYPE:
            return {
                ...state,
                fuelTypes: state.fuelTypes.filter(fuelType => fuelType.id !== action.payload)
            };

        default:
            return state;
    }
}