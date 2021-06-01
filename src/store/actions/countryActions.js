import { GET_COUNTRY, GET_COUNTRIES, ADD_COUNTRY, UPDATE_COUNTRY, DELETE_COUNTRY } from './types';
import API from '../../service/api'

export const getCountries = () => dispatch => {
    // dispatch(setProjectsLoading());
    API
        .getData('/Country/getall')
        .then(res =>
            dispatch({
                type: GET_COUNTRIES,
                payload: res.data.data
            })
        )
}

export const getCountry = (id) => dispatch => {
    API
        .getData(`/Country/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_COUNTRY,
                payload: res.data.data
            })
        )
}

export const addCountry = (caseType) => dispatch => {
    API
        .postData('/Country/add', caseType)
        .then(res =>
            dispatch({
                type: ADD_COUNTRY,
                payload: res.data.data
            })
        )
}

export const updateCountry = (caseType) => dispatch => {
    API
        .putData(`/Country/update`, caseType)
        .then(res =>
            dispatch({
                type: UPDATE_COUNTRY,
                payload: { caseType }
            })
        )
}

export const deleteCountry = (id) => dispatch => {
    API
        .deleteData(`/Country/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_COUNTRY,
                payload: id
            })
        )
}