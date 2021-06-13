import { GET_COMPANY, GET_COMPANIES, ADD_COMPANY, UPDATE_COMPANY, DELETE_COMPANY } from './types';
import API from '../../service/api'

export const getCompanies = () => dispatch => {
    API
        .getData('/Company/getall')
        .then(res =>
            dispatch({
                type: GET_COMPANIES,
                payload: res.data.data
            })
        )
}

export const getCompany = (id) => dispatch => {
    API
        .getData(`/Company/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_COMPANY,
                payload: res.data.data
            })
        )
}

export const addCompany = (company) => dispatch => {
    API
        .postData('/Company/add', company)
        .then(res =>
            dispatch({
                type: ADD_COMPANY,
                payload: res.data.data
            })
        )
}

export const updateCompany = (company) => dispatch => {
    API
        .putData(`/Company/update`, company)
        .then(res =>
            dispatch({
                type: UPDATE_COMPANY,
                payload: { company }
            })
        )
}

export const deleteCompany = (id) => dispatch => {
    API
        .deleteData(`/Company/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_COMPANY,
                payload: id
            })
        )
}