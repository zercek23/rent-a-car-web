import { GET_VEHICLEBRAND, GET_VEHICLEBRANDS, ADD_VEHICLEBRAND, UPDATE_VEHICLEBRAND, DELETE_VEHICLEBRAND } from '../actions/types';

const initialState = {
    vehicleBrands: [],
    vehicleBrand: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLEBRANDS:
            return {
                ...state,
                vehicleBrands: action.payload,
                loading: false
            };
        case GET_VEHICLEBRAND:
            return {
                ...state,
                vehicleBrand: action.payload
            };
        case ADD_VEHICLEBRAND:
            return {
                ...state,
                vehicleBrands: [...state.vehicleBrands, action.payload]
            };
        case UPDATE_VEHICLEBRAND:
            return {
                ...state,
                vehicleBrands: state.vehicleBrands.map((vehicleBrand) => {
                    if (action.payload.vehicleBrand.id === vehicleBrand.id) {
                        vehicleBrand = action.payload.vehicleBrand;
                    }
                    return vehicleBrand;
                })
            };
        case DELETE_VEHICLEBRAND:
            return {
                ...state,
                vehicleBrands: state.vehicleBrands.filter(vehicleBrand => vehicleBrand.id !== action.payload)
            };

        default:
            return state;
    }
}