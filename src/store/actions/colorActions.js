import { GET_COLOR, GET_COLORS, ADD_COLOR, UPDATE_COLOR, DELETE_COLOR } from './types';
import API from '../../service/api'

export const getColors = () => dispatch => {
    // dispatch(setProjectsLoading());
    API
        .getData('/Color/getall')
        .then(res =>
            dispatch({
                type: GET_COLORS,
                payload: res.data.data
            })
        )
}

export const getColor = (id) => dispatch => {
    API
        .getData(`/Color/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_COLOR,
                payload: res.data.data
            })
        )
}

export const addColor = (caseType) => dispatch => {
    API
        .postData('/Color/add', caseType)
        .then(res =>
            dispatch({
                type: ADD_COLOR,
                payload: res.data.data
            })
        )
}

export const updateColor = (caseType) => dispatch => {
    API
        .putData(`/Color/update`, caseType)
        .then(res =>
            dispatch({
                type: UPDATE_COLOR,
                payload: { caseType }
            })
        )
}

export const deleteColor = (id) => dispatch => {
    API
        .deleteData(`/Color/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_COLOR,
                payload: id
            })
        )
}