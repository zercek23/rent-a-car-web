import { GET_FUELTYPE, GET_FUELTYPES, ADD_FUELTYPE, UPDATE_FUELTYPE, DELETE_FUELTYPE } from './types';
import API from '../../service/api';

export const getFuelTypes = () => dispatch => {
    API
        .getData('/FuelType/getall')
        .then(res =>
            dispatch({
                type: GET_FUELTYPES,
                payload: res.data.data
            })
        )
}

export const getFuelType = (id) => dispatch => {
    API
        .getData(`/FuelType/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_FUELTYPE,
                payload: res.data.data
            })
        )
}

export const addFuelType = (fuelType) => dispatch => {
    API
        .postData('/FuelType/add', fuelType)
        .then(res =>
            dispatch({
                type: ADD_FUELTYPE,
                payload: fuelType
            })
        )
}

export const updateFuelType = (fuelType) => dispatch => {
    API
        .putData(`/FuelType/update?id=${fuelType.id}`, fuelType)
        .then(res =>
            dispatch({
                type: UPDATE_FUELTYPE,
                payload: { fuelType }
            })
        )
}

export const deleteFuelType = (id) => dispatch => {
    API
        .deleteData(`/FuelType/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_FUELTYPE,
                payload: id
            })
        )
}