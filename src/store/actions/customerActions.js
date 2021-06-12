import { GET_CUSTOMER, GET_CUSTOMERS, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from './types';
import API from '../../service/api'

export const getCustomers = () => dispatch => {
    API
        .getData('/Customer/getall')
        .then(res =>
            dispatch({
                type: GET_CUSTOMERS,
                payload: res.data.data
            })
        )
}

export const getCustomer = (id) => dispatch => {
    API
        .getData(`/Customer/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_CUSTOMER,
                payload: res.data.data
            })
        )
}

export const addCustomer = (customer) => dispatch => {
    API
        .postData('/Customer/add', customer)
        .then(res =>
            dispatch({
                type: ADD_CUSTOMER,
                payload: res.data.data
            })
        )
}

export const updateCustomer = (customer) => dispatch => {
    API
        .putData(`/Customer/update`, customer)
        .then(res =>
            dispatch({
                type: UPDATE_CUSTOMER,
                payload: { customer }
            })
        )
}

export const deleteCustomer = (id) => dispatch => {
    API
        .deleteData(`/Customer/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_CUSTOMER,
                payload: id
            })
        )
}