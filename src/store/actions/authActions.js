import { LOGIN, REGISTER, GET_USER, GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from '../actions/types';
import axios from 'axios';
import API from '../../service/api'

export const LoginUser = (user) => dispatch => {
    API
        .postData('/Auth/login', user)
        .then(res =>
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        );
}

export const RegisterUser = (user) => dispatch => {
    API
        .postData('/Auth/register', user)
        .then(res =>
            dispatch({
                type: REGISTER,
                payload: res.data
            })
        );
}

export const getUsers = () => dispatch => {
    // dispatch(setProjectsLoading());
    axios
        .get('/Employee/getall')
        .then(res =>
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        )
}

export const getUser = (id) => dispatch => {
    API
        .getData(`/Employee/getbyid/${id}`)
        .then(res =>
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        )
}

export const addUser = (user) => dispatch => {
    axios
        .post('/Employee/add', user)
        .then(res =>
            dispatch({
                type: ADD_USER,
                payload: res.data
            })
        )
}

export const updateUser = (id, user) => dispatch => {
    axios
        .put(`/Employee/update/${id}`, user)
        .then(res =>
            dispatch({
                type: UPDATE_USER,
                payload: { id, user }
            })
        )
}

export const deleteUser = (id) => dispatch => {
    axios
        .delete(`/Employee/delete/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_USER,
                payload: id
            })
        )
}