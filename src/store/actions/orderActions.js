import { GET_ORDER, GET_ORDERS, ADD_ORDER, UPDATE_ORDER, DELETE_ORDER } from './types';
import API from '../../service/api'

export const getOrders = () => dispatch => {
    API
        .getData('/Order/getall')
        .then(res =>
            dispatch({
                type: GET_ORDERS,
                payload: res.data.data
            })
        )
}

export const getOrder = (id) => dispatch => {
    API
        .getData(`/Order/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_ORDER,
                payload: res.data.data
            })
        )
}

export const addOrder = (order) => dispatch => {
    API
        .postData('/Order/add', order)
        .then(res =>
            dispatch({
                type: ADD_ORDER,
                payload: res.data.data
            })
        )
}

export const updateOrder = (order) => dispatch => {
    API
        .putData(`/Order/update`, order)
        .then(res =>
            dispatch({
                type: UPDATE_ORDER,
                payload: { order }
            })
        )
}

export const deleteOrder = (id) => dispatch => {
    API
        .deleteData(`/Order/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ORDER,
                payload: id
            })
        )
}