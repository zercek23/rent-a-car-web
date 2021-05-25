import { GET_PAYMENT, GET_PAYMENTS, ADD_PAYMENT, UPDATE_PAYMENT, DELETE_PAYMENT } from '../actions/types';

const initialState = {
    payments: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PAYMENTS:
            return {
                ...state,
                payments: action.payload,
                loading: false
            };
        case GET_PAYMENT:
            return {
                payment: action.payload
            };
        case ADD_PAYMENT:
            return {
                ...state,
                payments: [...state.payments, action.payload]
            };
        case UPDATE_PAYMENT:
            return {
                ...state,
                payments: state.payments.map((payment) => {
                    if (action.payload.id === payment.ID) {
                        payment = action.payload.payment;
                    }
                    return payment;
                })
            };
        case DELETE_PAYMENT:
            return {
                ...state,
                payments: state.payments.filter(payment => payment.ID !== action.payload)
            };

        default:
            return state;
    }
}