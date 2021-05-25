import { GET_FUELTYPE, GET_FUELTYPES, ADD_FUELTYPE, UPDATE_FUELTYPE, DELETE_FUELTYPE } from '../actions/types';

const initialState = {
    fuelTypes: []
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
                    if (action.payload.id === fuelType.ID) {
                        fuelType = action.payload.fuelType;
                    }
                    return fuelType;
                })
            };
        case DELETE_FUELTYPE:
            return {
                ...state,
                fuelTypes: state.fuelTypes.filter(fuelType => fuelType.ID !== action.payload)
            };

        default:
            return state;
    }
}