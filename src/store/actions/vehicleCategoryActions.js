import { GET_VEHICLECATEGORY, GET_VEHICLECATEGORIES, ADD_VEHICLECATEGORY, UPDATE_VEHICLECATEGORY, DELETE_VEHICLECATEGORY } from './types';
import API from '../../service/api'

export const getVehicleCategories = () => dispatch => {
    API
        .getData('/VehicleCategory/getall')
        .then(res =>
            dispatch({
                type: GET_VEHICLECATEGORIES,
                payload: res.data.data
            })
        )
}

export const getVehicleCategory = (id) => dispatch => {
    API
        .getData(`/VehicleCategory/getbyid?id=${id}`)
        .then(res =>
            dispatch({
                type: GET_VEHICLECATEGORY,
                payload: res.data.data
            })
        )
}

export const addVehicleCategory = (vehicleCategory) => dispatch => {
    API
        .postData('/VehicleCategory/add', vehicleCategory)
        .then(res =>
            dispatch({
                type: ADD_VEHICLECATEGORY,
                payload: res.data.data
            })
        )
}

export const updateVehicleCategory = (vehicleCategory) => dispatch => {
    API
        .putData(`/VehicleCategory/update`, vehicleCategory)
        .then(res =>
            dispatch({
                type: UPDATE_VEHICLECATEGORY,
                payload: { vehicleCategory }
            })
        )
}

export const deleteVehicleCategory = (id) => dispatch => {
    API
        .deleteData(`/VehicleCategory/delete?id=${id}`)
        .then(res =>
            dispatch({
                type: DELETE_VEHICLECATEGORY,
                payload: id
            })
        )
}