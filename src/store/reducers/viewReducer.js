import { OPEN_NAVBAR, CLOSE_NAVBAR, OPEN_FOOTER, CLOSE_FOOTER } from '../actions/types';

const initialState = {
    navbar: true,
    footer: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_NAVBAR:
            return {
                ...state,
                navbar: true
            };
        case CLOSE_NAVBAR:
            return {
                ...state,
                navbar: false
            };
        case OPEN_FOOTER:
            return {
                ...state,
                footer: true
            };
        case CLOSE_FOOTER:
            return {
                ...state,
                footer: false
            };
        default:
            return state;
    }
}