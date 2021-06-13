import { GET_INVOICE, GET_INVOICES, ADD_INVOICE, UPDATE_INVOICE, DELETE_INVOICE } from '../actions/types';

const initialState = {
    invoices: [],
    invoice: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INVOICES:
            return {
                ...state,
                invoices: action.payload,
                loading: false
            };
        case GET_INVOICE:
            return {
                ...state,
                invoice: action.payload
            };
        case ADD_INVOICE:
            return {
                ...state,
                invoices: [...state.invoices, action.payload]
            };
        case UPDATE_INVOICE:
            return {
                ...state,
                invoices: state.invoices.map((invoice) => {
                    if (action.payload.invoice.id === invoice.id) {
                        invoice = action.payload.invoice;
                    }
                    return invoice;
                })
            };
        case DELETE_INVOICE:
            return {
                ...state,
                invoices: state.invoices.filter(invoice => invoice.id !== action.payload)
            };

        default:
            return state;
    }
}