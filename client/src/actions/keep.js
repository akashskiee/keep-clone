import axios from 'axios';
import {ADD_KEEP, GET_KEEPS, KEEP_ERROR, DELETE_KEEP} from './types';
import {setAlert} from './alert';


//POST KEEPS
export const createKeep = (formData) => async dispatch => {
    try {
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        };
        const res = await axios.post('/api/keeps', formData, config);
        return dispatch({
            type: ADD_KEEP,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: KEEP_ERROR,
            payload: {msg: err.response, status: err.status}
        });
    }
};

//GET Keeps

export const getKeeps = userid => async dispatch => {
    try {
        const res = await axios.get(`/api/keeps/${userid}`);
        return dispatch({
            type: GET_KEEPS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: KEEP_ERROR,
            payload: {msg: err.response, status: err.status}
        });
    }
};

//Delete keep

export const deleteKeep = (id) => async dispatch => {
    if(window.confirm('Are you sure you want to delete the keep?')){
    try {
        await axios.delete(`/api/keeps/${id}`);
        dispatch({
            type: DELETE_KEEP,
            payload: id
        });
    } catch (err) {
        const errors = err.response;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: KEEP_ERROR,
            payload: {msg: err.response, status: err.status}
        });
    }
}
};