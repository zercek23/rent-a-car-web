import { GET_ORDERITEM, GET_ORDERITEMS, ADD_ORDERITEM, UPDATE_ORDERITEM, DELETE_ORDERITEM } from './types';
import API from '../../service/api'

export const getOrderItems = () => dispatch => {
    API
        .getData('/OrderItem/getall')
        .then(res =>
            dispatch({
                type: GET_ORDERITEMS,
                payload: res.data.data
            })
        )
}

export const getOrderItem = (id) => dispatch => {
    API
        .getData(`/OrderItem/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_ORDERITEM,
                payload: res.data.data
            })
        )
}

export const addOrderItem = (orderItem) => dispatch => {
    API
        .postData('/OrderItem/add', orderItem)
        .then(res =>
            dispatch({
                type: ADD_ORDERITEM,
                payload: res.data.data
            })
        )
}

export const updateOrderItem = (orderItem) => dispatch => {
    API
        .putData(`/OrderItem/update`, orderItem)
        .then(res =>
            dispatch({
                type: UPDATE_ORDERITEM,
                payload: { orderItem }
            })
        )
}

export const deleteOrderItem = (id) => dispatch => {
    API
        .deleteData(`/OrderItem/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ORDERITEM,
                payload: id
            })
        )
}