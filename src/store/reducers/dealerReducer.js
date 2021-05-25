import { GET_DEALER, GET_DEALERS, ADD_DEALER, UPDATE_DEALER, DELETE_DEALER } from '../actions/types';

const initialState = {
    dealers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DEALERS:
            return {
                ...state,
                dealers: action.payload,
                loading: false
            };
        case GET_DEALER:
            return {
                dealer: action.payload
            };
        case ADD_DEALER:
            return {
                ...state,
                dealers: [...state.dealers, action.payload]
            };
        case UPDATE_DEALER:
            return {
                ...state,
                dealers: state.projects.map((dealer) => {
                    if (action.payload.id === dealer.ID) {
                        dealer = action.payload.dealer;
                    }
                    return dealer;
                })
            };
        case DELETE_DEALER:
            return {
                ...state,
                dealers: state.dealers.filter(dealer => dealer.ID !== action.payload)
            };

        default:
            return state;
    }
}