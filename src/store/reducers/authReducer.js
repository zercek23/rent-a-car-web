import Users from 'src/views/users/Users';
import { LOGIN, REGISTER, GET_USER, GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from '../actions/types';

const initialState = {
    user: {},
    users: [],
    getUser: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case REGISTER:
            return {
                ...state,
                user: action.payload
            };
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case GET_USER:
            return {
                user: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.payload.id === user.ID) {
                        user = action.payload.user;
                    }
                    return user;
                })
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.ID !== action.payload)
            };
        default:
            return state;
    }
}