import { GET_COMPANY, GET_COMPANIES, ADD_COMPANY, UPDATE_COMPANY, DELETE_COMPANY } from '../actions/types';

const initialState = {
    companies: []
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
                    if (action.payload.id === company.ID) {
                        company = action.payload.company;
                    }
                    return company;
                })
            };
        case DELETE_COMPANY:
            return {
                ...state,
                companies: state.companies.filter(company => company.ID !== action.payload)
            };

        default:
            return state;
    }
}