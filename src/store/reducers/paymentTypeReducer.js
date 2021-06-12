import { GET_PAYMENTTYPE, GET_PAYMENTTYPES, ADD_PAYMENTTYPE, UPDATE_PAYMENTTYPE, DELETE_PAYMENTTYPE } from '../actions/types';

const initialState = {
    paymentTypes: [],
    paymentType: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PAYMENTTYPES:
            return {
                ...state,
                paymentTypes: action.payload,
                loading: false
            };
        case GET_PAYMENTTYPE:
            return {
                ...state,
                paymentType: action.payload
            };
        case ADD_PAYMENTTYPE:
            return {
                ...state,
                paymentTypes: [...state.paymentTypes, action.payload]
            };
        case UPDATE_PAYMENTTYPE:
            return {
                ...state,
                paymentTypes: state.paymentTypes.map((paymentType) => {
                    if (action.payload.paymentType.id === paymentType.id) {
                        paymentType = action.payload.paymentType;
                    }
                    return paymentType;
                })
            };
        case DELETE_PAYMENTTYPE:
            return {
                ...state,
                paymentTypes: state.paymentTypes.filter(paymentType => paymentType.id !== action.payload)
            };

        default:
            return state;
    }
}