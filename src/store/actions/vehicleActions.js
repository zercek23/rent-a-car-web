import { GET_VEHICLE, GET_VEHICLES, ADD_VEHICLE, UPDATE_VEHICLE, DELETE_VEHICLE } from './types';
import API from '../../service/api'

export const getVehicles = () => dispatch => {
    API
        .getData('/Vehicle/getall')
        .then(res =>
            dispatch({
                type: GET_VEHICLES,
                payload: res.data.data
            })
        )
}

export const getVehicle = (id) => dispatch => {
    API
        .getData(`/Vehicle/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_VEHICLE,
                payload: res.data.data
            })
        )
}

export const addVehicle = (vehicle) => dispatch => {
    API
        .postData('/Vehicle/add', vehicle)
        .then(res =>
            dispatch({
                type: ADD_VEHICLE,
                payload: res.data.data
            })
        )
}

export const updateVehicle = (vehicle) => dispatch => {
    API
        .putData(`/Vehicle/update`, vehicle)
        .then(res =>
            dispatch({
                type: UPDATE_VEHICLE,
                payload: { vehicle }
            })
        )
}

export const deleteVehicle = (id) => dispatch => {
    API
        .deleteData(`/Vehicle/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_VEHICLE,
                payload: id
            })
        )
}