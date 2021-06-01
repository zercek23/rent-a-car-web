import { GET_COUNTRY, GET_COUNTRIES, ADD_COUNTRY, UPDATE_COUNTRY, DELETE_COUNTRY } from '../actions/types';

const initialState = {
    countries: [],
    country: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            };
        case ADD_COUNTRY:
            return {
                ...state,
                countries: [...state.countries, action.payload]
            };
        case UPDATE_COUNTRY:
            return {
                ...state,
                countries: state.countries.map((country) => {
                    if (action.payload.country.id === country.id) {
                        country = action.payload.country;
                    }
                    return country;
                })
            };
        case DELETE_COUNTRY:
            return {
                ...state,
                countries: state.countries.filter(country => country.id !== action.payload)
            };

        default:
            return state;
    }
}