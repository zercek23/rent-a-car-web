import { GET_CASETYPE, GET_CASETYPES, ADD_CASETYPE, UPDATE_CASETYPE, DELETE_CASETYPE } from './types';
import API from '../../service/api'

export const getCaseTypes = () => dispatch => {
    API
        .getData('/CaseType/getall')
        .then(res =>
            dispatch({
                type: GET_CASETYPES,
                payload: res.data.data
            })
        )
}

export const getCaseType = (id) => dispatch => {
    API
        .getData(`/CaseType/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_CASETYPE,
                payload: res.data.data
            })
        )
}

export const addCaseType = (caseType) => dispatch => {
    API
        .postData('/CaseType/add', caseType)
        .then(res =>
            dispatch({
                type: ADD_CASETYPE,
                payload: res.data.data
            })
        )
}

export const updateCaseType = (caseType) => dispatch => {
    API
        .putData(`/CaseType/update`, caseType)
        .then(res =>
            dispatch({
                type: UPDATE_CASETYPE,
                payload: { caseType }
            })
        )
}

export const deleteCaseType = (id) => dispatch => {
    API
        .deleteData(`/CaseType/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_CASETYPE,
                payload: id
            })
        )
}