import { GET_ITEM, GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    // dispatch(setProjectsLoading());
    axios
        .get('/api/projects')
        .then(res =>
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            })
        )
}

export const getItem = (id) => dispatch => {
    axios
        .get(`/api/projects/${id}`)
        .then(res =>
            dispatch({
                type: GET_PROJECT,
                payload: res.data
            })
        )
}

export const addItem = (project) => dispatch => {
    axios
        .post('/api/projects', project)
        .then(res =>
            dispatch({
                type: ADD_PROJECT,
                payload: res.data
            })
        )
}

export const updateItem = (id, project) => dispatch => {
    axios
        .put(`/api/projects/${id}`, project)
        .then(res =>
            dispatch({
                type: UPDATE_PROJECT,
                payload: { id, project }
            })
        )
}

export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/api/projects/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_PROJECT,
                payload: id
            })
        )
}