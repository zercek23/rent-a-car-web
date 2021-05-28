import { GET_GEARTYPE, GET_GEARTYPES, ADD_GEARTYPE, UPDATE_GEARTYPE, DELETE_GEARTYPE } from './types';
import API from '../../service/api';

export const getGearTypes = () => dispatch => {
    console.log('2');
    API
        .getData('/GearType/getall')
        .then(res =>
            dispatch({
                type: GET_GEARTYPES,
                payload: res.data.data
            })
        )
}

export const getGearType = (id) => dispatch => {
    API
        .getData(`/GearType/getbyid?id=${id}`)
        .then(res => {
            dispatch({
                type: GET_GEARTYPE,
                payload: res.data.data
            });
        })
}

export const addGearType = (gearType) => dispatch => {
    API
        .postData('/GearType/add', gearType)
        .then(res => {
            dispatch({
                type: ADD_GEARTYPE,
                payload: res.data.data
            })
        });
}

export const updateGearType = (gearType) => dispatch => {
    API
        .putData(`/GearType/update?id=${gearType.id}`, gearType)
        .then(res =>
            dispatch({
                type: UPDATE_GEARTYPE,
                payload: { gearType }
            })
        );
}

export const deleteGearType = (id) => dispatch => {
    API
        .deleteData(`/GearType/delete?id=${id}`)
        .then(res => {
            dispatch({
                type: DELETE_GEARTYPE,
                payload: id
            })
        });
}