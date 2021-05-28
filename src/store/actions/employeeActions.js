import { GET_EMPLOYEE, GET_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from './types';
import API from '../../service/api'

export const getEmployees = () => dispatch => {
    // dispatch(setProjectsLoading());
    API
        .getData('/Employee/getall')
        .then(res =>
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data.data
            })
        )
}

export const getEmployee = (id) => dispatch => {
    API
        .getData(`/Employee/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_EMPLOYEE,
                payload: res.data.data
            })
        )
}

export const addEmployee = (employee) => dispatch => {
    API
        .postData('/Employee/add', employee)
        .then(res =>
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            })
        )
}

export const updateEmployee = (employee) => dispatch => {
    API
        .putData(`/Employee/update`, employee)
        .then(res =>
            dispatch({
                type: UPDATE_EMPLOYEE,
                payload: { employee }
            })
        )
}

export const deleteEmployee = (id) => dispatch => {
    API
        .deleteData(`/Employee/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: id
            })
        )
}