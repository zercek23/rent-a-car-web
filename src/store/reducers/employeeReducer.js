import { GET_EMPLOYEE, GET_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../actions/types';

const initialState = {
    employees: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false
            };
        case GET_EMPLOYEE:
            return {
                employee: action.payload
            };
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.map((employee) => {
                    if (action.payload.id === employee.ID) {
                        employee = action.payload.employee;
                    }
                    return employee;
                })
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.ID !== action.payload)
            };

        default:
            return state;
    }
}