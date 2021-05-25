import { GET_VEHICLE, GET_VEHICLES, ADD_VEHICLE, UPDATE_VEHICLE, DELETE_VEHICLE } from '../actions/types';

const initialState = {
    vehicles: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
                loading: false
            };
        case GET_VEHICLE:
            return {
                vehicle: action.payload
            };
        case ADD_VEHICLE:
            return {
                ...state,
                vehicles: [...state.vehicles, action.payload]
            };
        case UPDATE_VEHICLE:
            return {
                ...state,
                vehicles: state.vehicles.map((vehicle) => {
                    if (action.payload.id === vehicle.ID) {
                        vehicle = action.payload.vehicle;
                    }
                    return vehicle;
                })
            };
        case DELETE_VEHICLE:
            return {
                ...state,
                vehicles: state.vehicles.filter(vehicle => vehicle.ID !== action.payload)
            };

        default:
            return state;
    }
}