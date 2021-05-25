import { GET_VEHICLEBRAND, GET_VEHICLEBRANDS, ADD_VEHICLEBRAND, UPDATE_VEHICLEBRAND, DELETE_VEHICLEBRAND } from '../actions/types';

const initialState = {
    vehicleBrands: []
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
                    if (action.payload.id === vehicleBrand.ID) {
                        vehicleBrand = action.payload.vehicleBrand;
                    }
                    return vehicleBrand;
                })
            };
        case DELETE_VEHICLEBRAND:
            return {
                ...state,
                vehicleBrands: state.vehicleBrands.filter(vehicleBrand => vehicleBrand.ID !== action.payload)
            };

        default:
            return state;
    }
}