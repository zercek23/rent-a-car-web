import { OPEN_NAVBAR, CLOSE_NAVBAR, OPEN_FOOTER, CLOSE_FOOTER } from '../actions/types';
import axios from 'axios';

export const openNavbar = () => dispatch => {
    dispatch({
        type: OPEN_NAVBAR
    })
}

export const closeNavbar = (id) => dispatch => {
    dispatch({
        type: CLOSE_NAVBAR
    })
}

export const openFooter = (project) => dispatch => {
    dispatch({
        type: OPEN_FOOTER
    })
}

export const closeFooter = (id, project) => dispatch => {
    dispatch({
        type: CLOSE_FOOTER
    })
}