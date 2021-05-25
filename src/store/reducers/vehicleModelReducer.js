import { GET_VEHICLEMODEL, GET_VEHICLEMODELS, ADD_VEHICLEMODEL, UPDATE_VEHICLEMODEL, DELETE_VEHICLEMODEL } from '../actions/types';

const initialState = {
    vehicleModels: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLEMODELS:
            return {
                ...state,
                vehicleModels: action.payload,
                loading: false
            };
        case GET_VEHICLEMODEL:
            return {
                vehicleModel: action.payload
            };
        case ADD_VEHICLEMODEL:
            return {
                ...state,
                vehicleModels: [...state.vehicleModels, action.payload]
            };
        case UPDATE_VEHICLEMODEL:
            return {
                ...state,
                vehicleModels: state.vehicleModels.map((vehicleModel) => {
                    if (action.payload.id === vehicleModel.ID) {
                        vehicleModel = action.payload.vehicleModel;
                    }
                    return vehicleModel;
                })
            };
        case DELETE_VEHICLEMODEL:
            return {
                ...state,
                vehicleModels: state.vehicleModels.filter(vehicleModel => vehicleModel.ID !== action.payload)
            };

        default:
            return state;
    }
}