import { GET_DRIVERLICENCE, GET_DRIVERLICENCES, ADD_DRIVERLICENCE, UPDATE_DRIVERLICENCE, DELETE_DRIVERLICENCE } from './types';
import API from '../../service/api'

export const getDriverLicences = () => dispatch => {
    API
        .getData('/DriverLicence/getall')
        .then(res =>
            dispatch({
                type: GET_DRIVERLICENCES,
                payload: res.data.data
            })
        )
}

export const getDriverLicence = (id) => dispatch => {
    API
        .getData(`/DriverLicence/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_DRIVERLICENCE,
                payload: res.data.data
            })
        )
}

export const addDriverLicence = (driverLicence) => dispatch => {
    API
        .postData('/DriverLicence/add', driverLicence)
        .then(res =>
            dispatch({
                type: ADD_DRIVERLICENCE,
                payload: res.data.data
            })
        )
}

export const updateDriverLicence = (driverLicence) => dispatch => {
    API
        .putData(`/DriverLicence/update`, driverLicence)
        .then(res =>
            dispatch({
                type: UPDATE_DRIVERLICENCE,
                payload: { driverLicence }
            })
        )
}

export const deleteDriverLicence = (id) => dispatch => {
    API
        .deleteData(`/DriverLicence/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_DRIVERLICENCE,
                payload: id
            })
        )
}