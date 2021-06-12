import { GET_VEHICLEBRAND, GET_VEHICLEBRANDS, ADD_VEHICLEBRAND, UPDATE_VEHICLEBRAND, DELETE_VEHICLEBRAND } from './types';
import API from '../../service/api'

export const getVehicleBrands = () => dispatch => {
    API
        .getData('/VehicleBrand/getall')
        .then(res =>
            dispatch({
                type: GET_VEHICLEBRANDS,
                payload: res.data.data
            })
        )
}

export const getVehicleBrand = (id) => dispatch => {
    API
        .getData(`/VehicleBrand/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_VEHICLEBRAND,
                payload: res.data.data
            })
        )
}

export const addVehicleBrand = (vehicleBrand) => dispatch => {
    API
        .postData('/VehicleBrand/add', vehicleBrand)
        .then(res =>
            dispatch({
                type: ADD_VEHICLEBRAND,
                payload: res.data.data
            })
        )
}

export const updateVehicleBrand = (vehicleBrand) => dispatch => {
    API
        .putData(`/VehicleBrand/update`, vehicleBrand)
        .then(res =>
            dispatch({
                type: UPDATE_VEHICLEBRAND,
                payload: { vehicleBrand }
            })
        )
}

export const deleteVehicleBrand = (id) => dispatch => {
    API
        .deleteData(`/VehicleBrand/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_VEHICLEBRAND,
                payload: id
            })
        )
}