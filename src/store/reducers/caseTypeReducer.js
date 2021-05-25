import { GET_CASETYPE, GET_CASETYPES, ADD_CASETYPE, UPDATE_CASETYPE, DELETE_CASETYPE } from '../actions/types';

const initialState = {
    caseTypes: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CASETYPES:
            return {
                ...state,
                caseTypes: action.payload,
                loading: false
            };
        case GET_CASETYPE:
            return {
                caseType: action.payload
            };
        case ADD_CASETYPE:
            return {
                ...state,
                caseTypes: [...state.caseTypes, action.payload]
            };
        case UPDATE_CASETYPE:
            return {
                ...state,
                caseTypes: state.caseTypes.map((caseType) => {
                    if (action.payload.id === caseType.ID) {
                        caseType = action.payload.caseType;
                    }
                    return caseType;
                })
            };
        case DELETE_CASETYPE:
            return {
                ...state,
                caseTypes: state.caseTypes.filter(caseType => caseType.ID !== action.payload)
            };

        default:
            return state;
    }
}