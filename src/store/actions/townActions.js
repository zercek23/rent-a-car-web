import { GET_TOWN, GET_TOWNS, ADD_TOWN, UPDATE_TOWN, DELETE_TOWN } from './types';
import API from '../../service/api'

export const getTowns = () => dispatch => {
    API
        .getData('/Town/getall')
        .then(res =>
            dispatch({
                type: GET_TOWNS,
                payload: res.data.data
            })
        )
}

export const getTown = (id) => dispatch => {
    API
        .getData(`/Town/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_TOWN,
                payload: res.data.data
            })
        )
}

export const addTown = (town) => dispatch => {
    API
        .postData('/Town/add', town)
        .then(res =>
            dispatch({
                type: ADD_TOWN,
                payload: res.data.data
            })
        )
}

export const updateTown = (town) => dispatch => {
    API
        .putData(`/Town/update`, town)
        .then(res =>
            dispatch({
                type: UPDATE_TOWN,
                payload: { town }
            })
        )
}

export const deleteTown = (id) => dispatch => {
    API
        .deleteData(`/Town/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_TOWN,
                payload: id
            })
        )
}