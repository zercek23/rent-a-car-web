import { GET_CITY, GET_CITIES, ADD_CITY, UPDATE_CITY, DELETE_CITY } from './types';
import API from '../../service/api'

export const getCities = () => dispatch => {
    // dispatch(setProjectsLoading());
    API
        .getData('/City/getall')
        .then(res =>
            dispatch({
                type: GET_CITIES,
                payload: res.data.data
            })
        )
}

export const getCity = (id) => dispatch => {
    API
        .getData(`/City/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_CITY,
                payload: res.data.data
            })
        )
}

export const addCity = (caseType) => dispatch => {
    API
        .postData('/City/add', caseType)
        .then(res =>
            dispatch({
                type: ADD_CITY,
                payload: res.data.data
            })
        )
}

export const updateCity = (caseType) => dispatch => {
    API
        .putData(`/City/update`, caseType)
        .then(res =>
            dispatch({
                type: UPDATE_CITY,
                payload: { caseType }
            })
        )
}

export const deleteCity = (id) => dispatch => {
    API
        .deleteData(`/City/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_CITY,
                payload: id
            })
        )
}