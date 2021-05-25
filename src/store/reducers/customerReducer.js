import { GET_CUSTOMER, GET_CUSTOMERS, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../actions/types';

const initialState = {
    customers: []
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
                    if (action.payload.id === customer.ID) {
                        customer = action.payload.customer;
                    }
                    return customer;
                })
            };
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.ID !== action.payload)
            };

        default:
            return state;
    }
}