import { GET_PAYMENTTYPE, GET_PAYMENTTYPES, ADD_PAYMENTTYPE, UPDATE_PAYMENTTYPE, DELETE_PAYMENTTYPE } from '../actions/types';

const initialState = {
    paymentTypes: []
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
                    if (action.payload.id === paymentType.ID) {
                        paymentType = action.payload.paymentType;
                    }
                    return paymentType;
                })
            };
        case DELETE_PAYMENTTYPE:
            return {
                ...state,
                paymentTypes: state.paymentTypes.filter(paymentType => paymentType.ID !== action.payload)
            };

        default:
            return state;
    }
}