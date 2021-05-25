import { GET_ITEM, GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case GET_ITEM:
            return {
                item: action.payload
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.projects.map((item) => {
                    if (action.payload.id === item.ID) {
                        item = action.payload.item;
                    }
                    return item;
                })
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.ID !== action.payload)
            };

        default:
            return state;
    }
}