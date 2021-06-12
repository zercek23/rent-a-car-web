import { GET_PAYMENT, GET_PAYMENTS, ADD_PAYMENT, UPDATE_PAYMENT, DELETE_PAYMENT } from './types';
import API from '../../service/api'

export const getPayments = () => dispatch => {
    API
        .getData('/Payment/getall')
        .then(res =>
            dispatch({
                type: GET_PAYMENTS,
                payload: res.data.data
            })
        )
}

export const getPayment = (id) => dispatch => {
    API
        .getData(`/Payment/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_PAYMENT,
                payload: res.data.data
            })
        )
}

export const addPayment = (payment) => dispatch => {
    API
        .postData('/Payment/add', payment)
        .then(res =>
            dispatch({
                type: ADD_PAYMENT,
                payload: res.data.data
            })
        )
}

export const updatePayment = (payment) => dispatch => {
    API
        .putData(`/Payment/update`, payment)
        .then(res =>
            dispatch({
                type: UPDATE_PAYMENT,
                payload: { payment }
            })
        )
}

export const deletePayment = (id) => dispatch => {
    API
        .deleteData(`/Payment/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_PAYMENT,
                payload: id
            })
        )
}