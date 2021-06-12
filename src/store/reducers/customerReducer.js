import { GET_CUSTOMER, GET_CUSTOMERS, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../actions/types';

const initialState = {
    customers: [],
    customer: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
                loading: false
            };
        case GET_CUSTOMER:
            return {
                ...state,
                customer: action.payload
            };
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            };
        case UPDATE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map((customer) => {
                    if (action.payload.customer.id === customer.id) {
                        customer = action.payload.customer;
                    }
                    return customer;
                })
            };
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            };

        default:
            return state;
    }
}