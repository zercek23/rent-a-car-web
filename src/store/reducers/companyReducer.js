import { GET_COMPANY, GET_COMPANIES, ADD_COMPANY, UPDATE_COMPANY, DELETE_COMPANY } from '../actions/types';

const initialState = {
    companies: [],
    company: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.payload,
                loading: false
            };
        case GET_COMPANY:
            return {
                ...state,
                company: action.payload
            };
        case ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.payload]
            };
        case UPDATE_COMPANY:
            return {
                ...state,
                companies: state.companies.map((company) => {
                    if (action.payload.company.id === company.id) {
                        company = action.payload.company;
                    }
                    return company;
                })
            };
        case DELETE_COMPANY:
            return {
                ...state,
                companies: state.companies.filter(company => company.id !== action.payload)
            };

        default:
            return state;
    }
}