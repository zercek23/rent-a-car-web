import { GET_INVOICE, GET_INVOICES, ADD_INVOICE, UPDATE_INVOICE, DELETE_INVOICE } from './types';
import API from '../../service/api'

export const getInvoices = () => dispatch => {
    API
        .getData('/Invoice/getall')
        .then(res =>
            dispatch({
                type: GET_INVOICES,
                payload: res.data.data
            })
        )
}

export const getInvoice = (id) => dispatch => {
    API
        .getData(`/Invoice/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_INVOICE,
                payload: res.data.data
            })
        )
}

export const addInvoice = (invoice) => dispatch => {
    API
        .postData('/Invoice/add', invoice)
        .then(res =>
            dispatch({
                type: ADD_INVOICE,
                payload: res.data.data
            })
        )
}

export const updateInvoice = (invoice) => dispatch => {
    API
        .putData(`/Invoice/update`, invoice)
        .then(res =>
            dispatch({
                type: UPDATE_INVOICE,
                payload: { invoice }
            })
        )
}

export const deleteInvoice = (id) => dispatch => {
    API
        .deleteData(`/Invoice/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_INVOICE,
                payload: id
            })
        )
}