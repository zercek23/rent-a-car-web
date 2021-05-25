import { GET_ORDER, GET_ORDERS, ADD_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../actions/types';

const initialState = {
    orders: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            };
        case GET_ORDER:
            return {
                order: action.payload
            };
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };
        case UPDATE_ORDER:
            return {
                ...state,
                orders: state.orders.map((order) => {
                    if (action.payload.id === order.ID) {
                        order = action.payload.order;
                    }
                    return order;
                })
            };
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.ID !== action.payload)
            };

        default:
            return state;
    }
}