import { GET_CITY, GET_CITIES, ADD_CITY, UPDATE_CITY, DELETE_CITY } from '../actions/types';

const initialState = {
    cities: [],
    city: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload,
                loading: false
            };
        case GET_CITY:
            return {
                ...state,
                city: action.payload
            };
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            };
        case UPDATE_CITY:
            return {
                ...state,
                cities: state.cities.map((city) => {
                    if (action.payload.city.id === city.id) {
                        city = action.payload.city;
                    }
                    return city;
                })
            };
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== action.payload)
            };

        default:
            return state;
    }
}