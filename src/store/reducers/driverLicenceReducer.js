import { GET_DRIVERLICENCE, GET_DRIVERLICENCES, ADD_DRIVERLICENCE, UPDATE_DRIVERLICENCE, DELETE_DRIVERLICENCE } from '../actions/types';

const initialState = {
    driverLicences: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DRIVERLICENCES:
            return {
                ...state,
                driverLicences: action.payload,
                loading: false
            };
        case GET_DRIVERLICENCE:
            return {
                driverLicence: action.payload
            };
        case ADD_DRIVERLICENCE:
            return {
                ...state,
                driverLicences: [...state.driverLicences, action.payload]
            };
        case UPDATE_DRIVERLICENCE:
            return {
                ...state,
                driverLicences: state.driverLicences.map((driverLicence) => {
                    if (action.payload.id === driverLicence.ID) {
                        driverLicence = action.payload.driverLicence;
                    }
                    return driverLicence;
                })
            };
        case DELETE_DRIVERLICENCE:
            return {
                ...state,
                driverLicences: state.driverLicences.filter(driverLicence => driverLicence.ID !== action.payload)
            };

        default:
            return state;
    }
}