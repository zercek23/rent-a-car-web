import { GET_DISTRICT, GET_DISTRICTS, ADD_DISTRICT, UPDATE_DISTRICT, DELETE_DISTRICT } from './types';
import API from '../../service/api'

export const getDistricts = () => dispatch => {
    API
        .getData('/District/getall')
        .then(res =>
            dispatch({
                type: GET_DISTRICTS,
                payload: res.data.data
            })
        )
}

export const getDistrict = (id) => dispatch => {
    API
        .getData(`/District/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_DISTRICT,
                payload: res.data.data
            })
        )
}

export const addDistrict = (district) => dispatch => {
    API
        .postData('/District/add', district)
        .then(res =>
            dispatch({
                type: ADD_DISTRICT,
                payload: res.data.data
            })
        )
}

export const updateDistrict = (district) => dispatch => {
    API
        .putData(`/District/update`, district)
        .then(res =>
            dispatch({
                type: UPDATE_DISTRICT,
                payload: { district }
            })
        )
}

export const deleteDistrict = (id) => dispatch => {
    API
        .deleteData(`/District/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_DISTRICT,
                payload: id
            })
        )
}