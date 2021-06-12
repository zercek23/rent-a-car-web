import { GET_ITEM, GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './types';
import API from '../../service/api'

export const getItems = () => dispatch => {
    API
        .getData('/Item/getall')
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data.data
            })
        )
}

export const getItem = (id) => dispatch => {
    API
        .getData(`/Item/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_ITEM,
                payload: res.data.data
            })
        )
}

export const addItem = (item) => dispatch => {
    API
        .postData('/Item/add', item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data.data
            })
        )
}

export const updateItem = (item) => dispatch => {
    API
        .putData(`/Item/update`, item)
        .then(res =>
            dispatch({
                type: UPDATE_ITEM,
                payload: { item }
            })
        )
}

export const deleteItem = (id) => dispatch => {
    API
        .deleteData(`/Item/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
}