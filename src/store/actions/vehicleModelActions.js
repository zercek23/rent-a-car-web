import { GET_VEHICLEMODEL, GET_VEHICLEMODELS, ADD_VEHICLEMODEL, UPDATE_VEHICLEMODEL, DELETE_VEHICLEMODEL } from './types';
import API from '../../service/api'

export const getVehicleModels = () => dispatch => {
    API
        .getData('/VehicleModel/getall')
        .then(res =>
            dispatch({
                type: GET_VEHICLEMODELS,
                payload: res.data.data
            })
        )
}

export const getVehicleModel = (id) => dispatch => {
    API
        .getData(`/VehicleModel/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_VEHICLEMODEL,
                payload: res.data.data
            })
        )
}

export const addVehicleModel = (vehicleModel) => dispatch => {
    API
        .postData('/VehicleModel/add', vehicleModel)
        .then(res =>
            dispatch({
                type: ADD_VEHICLEMODEL,
                payload: res.data.data
            })
        )
}

export const updateVehicleModel = (vehicleModel) => dispatch => {
    API
        .putData(`/VehicleModel/update`, vehicleModel)
        .then(res =>
            dispatch({
                type: UPDATE_VEHICLEMODEL,
                payload: { vehicleModel }
            })
        )
}

export const deleteVehicleModel = (id) => dispatch => {
    API
        .deleteData(`/VehicleModel/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_VEHICLEMODEL,
                payload: id
            })
        )
}