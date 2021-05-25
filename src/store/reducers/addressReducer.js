import { GET_ADDRESS, GET_ADDRESSES, ADD_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS } from '../actions/types';

const initialState = {
    addresses: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ADDRESSES:
            return {
                ...state,
                addresses: action.payload,
            };
        case GET_ADDRESS:
            return {
                address: action.payload
            };
        case ADD_ADDRESS:
            return {
                ...state,
                addresses: [...state.addresses, action.payload]
            };
        case UPDATE_ADDRESS:
            return {
                ...state,
                addresses: state.addresses.map((address) => {
                    if (action.payload.id === address.ID) {
                        address = action.payload.address;
                    }
                    return address;
                })
            };
        case DELETE_ADDRESS:
            return {
                ...state,
                addresses: state.addresses.filter(address => address.ID !== action.payload)
            };

        default:
            return state;
    }
}