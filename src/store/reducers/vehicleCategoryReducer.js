import { GET_VEHICLECATEGORY, GET_VEHICLECATEGORIES, ADD_VEHICLECATEGORY, UPDATE_VEHICLECATEGORY, DELETE_VEHICLECATEGORY } from '../actions/types';

const initialState = {
    vehicleCategorys: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLECATEGORIES:
            return {
                ...state,
                vehicleCategories: action.payload,
                loading: false
            };
        case GET_VEHICLECATEGORY:
            return {
                vehicleCategory: action.payload
            };
        case ADD_VEHICLECATEGORY:
            return {
                ...state,
                vehicleCategories: [...state.vehicleCategories, action.payload]
            };
        case UPDATE_VEHICLECATEGORY:
            return {
                ...state,
                vehicleCategories: state.vehicleCategories.map((vehicleCategory) => {
                    if (action.payload.id === vehicleCategory.ID) {
                        vehicleCategory = action.payload.vehicleCategory;
                    }
                    return vehicleCategory;
                })
            };
        case DELETE_VEHICLECATEGORY:
            return {
                ...state,
                vehicleCategorys: state.vehicleCategorys.filter(vehicleCategory => vehicleCategory.ID !== action.payload)
            };

        default:
            return state;
    }
}