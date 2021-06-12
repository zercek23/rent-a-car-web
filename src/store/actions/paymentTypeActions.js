import { GET_PAYMENTTYPE, GET_PAYMENTTYPES, ADD_PAYMENTTYPE, UPDATE_PAYMENTTYPE, DELETE_PAYMENTTYPE } from './types';
import API from '../../service/api'

export const getPaymentTypes = () => dispatch => {
    API
        .getData('/PaymentType/getall')
        .then(res =>
            dispatch({
                type: GET_PAYMENTTYPES,
                payload: res.data.data
            })
        )
}

export const getPaymentType = (id) => dispatch => {
    API
        .getData(`/PaymentType/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_PAYMENTTYPE,
                payload: res.data.data
            })
        )
}

export const addPaymentType = (paymentType) => dispatch => {
    API
        .postData('/PaymentType/add', paymentType)
        .then(res =>
            dispatch({
                type: ADD_PAYMENTTYPE,
                payload: res.data.data
            })
        )
}

export const updatePaymentType = (paymentType) => dispatch => {
    API
        .putData(`/PaymentType/update`, paymentType)
        .then(res =>
            dispatch({
                type: UPDATE_PAYMENTTYPE,
                payload: { paymentType }
            })
        )
}

export const deletePaymentType = (id) => dispatch => {
    API
        .deleteData(`/PaymentType/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_PAYMENTTYPE,
                payload: id
            })
        )
}