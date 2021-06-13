import { GET_DEALER, GET_DEALERS, ADD_DEALER, UPDATE_DEALER, DELETE_DEALER } from './types';
import API from '../../service/api'

export const getDealers = () => dispatch => {
    API
        .getData('/Dealer/getall')
        .then(res =>
            dispatch({
                type: GET_DEALERS,
                payload: res.data.data
            })
        )
}

export const getDealer = (id) => dispatch => {
    API
        .getData(`/Dealer/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_DEALER,
                payload: res.data.data
            })
        )
}

export const addDealer = (dealer) => dispatch => {
    API
        .postData('/Dealer/add', dealer)
        .then(res =>
            dispatch({
                type: ADD_DEALER,
                payload: res.data.data
            })
        )
}

export const updateDealer = (dealer) => dispatch => {
    API
        .putData(`/Dealer/update`, dealer)
        .then(res =>
            dispatch({
                type: UPDATE_DEALER,
                payload: { dealer }
            })
        )
}

export const deleteDealer = (id) => dispatch => {
    API
        .deleteData(`/Dealer/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_DEALER,
                payload: id
            })
        )
}