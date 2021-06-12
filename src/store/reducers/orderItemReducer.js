import { GET_ORDERITEM, GET_ORDERITEMS, ADD_ORDERITEM, UPDATE_ORDERITEM, DELETE_ORDERITEM } from '../actions/types';

const initialState = {
    orderItems: [],
    orderItem: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ORDERITEMS:
            return {
                ...state,
                orderItems: action.payload,
                loading: false
            };
        case GET_ORDERITEM:
            return {
                ...state,
                orderItem: action.payload
            };
        case ADD_ORDERITEM:
            return {
                ...state,
                orderItems: [...state.orderItems, action.payload]
            };
        case UPDATE_ORDERITEM:
            return {
                ...state,
                orderItems: state.orderItems.map((orderItem) => {
                    if (action.payload.orderItem.id === orderItem.id) {
                        orderItem = action.payload.orderItem;
                    }
                    return orderItem;
                })
            };
        case DELETE_ORDERITEM:
            return {
                ...state,
                orderItems: state.orderItems.filter(orderItem => orderItem.id !== action.payload)
            };

        default:
            return state;
    }
}