import { GET_DISTRICT, GET_DISTRICTS, ADD_DISTRICT, UPDATE_DISTRICT, DELETE_DISTRICT } from '../actions/types';

const initialState = {
    districts: [],
    district: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DISTRICTS:
            return {
                ...state,
                districts: action.payload,
                loading: false
            };
        case GET_DISTRICT:
            return {
                ...state,
                district: action.payload
            };
        case ADD_DISTRICT:
            return {
                ...state,
                districts: [...state.districts, action.payload]
            };
        case UPDATE_DISTRICT:
            return {
                ...state,
                districts: state.districts.map((district) => {
                    if (action.payload.district.id === district.id) {
                        district = action.payload.district;
                    }
                    return district;
                })
            };
        case DELETE_DISTRICT:
            return {
                ...state,
                districts: state.districts.filter(district => district.id !== action.payload)
            };

        default:
            return state;
    }
}