import { GET_ADDRESS, GET_ADDRESSES, ADD_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS } from './types';
import API from '../../service/api'

export const getAddresses = () => dispatch => {
    API
        .getData('/Address/getall')
        .then(res =>
            dispatch({
                type: GET_ADDRESSES,
                payload: res.data.data
            })
        )
}

export const getAddress = (id) => dispatch => {
    API
        .getData(`/Address/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_ADDRESS,
                payload: res.data.data
            })
        )
}

export const addAddress = (address) => dispatch => {
    API
        .postData('/Address/add', address)
        .then(res =>
            dispatch({
                type: ADD_ADDRESS,
                payload: res.data.data
            })
        )
}

export const updateAddress = (address) => dispatch => {
    API
        .putData(`/Address/update`, address)
        .then(res =>
            dispatch({
                type: UPDATE_ADDRESS,
                payload: { address }
            })
        )
}

export const deleteAddress = (id) => dispatch => {
    API
        .deleteData(`/Address/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ADDRESS,
                payload: id
            })
        )
}