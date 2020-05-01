import axios from 'axios';
import {ADD_KEEP, GET_KEEPS, KEEP_ERROR} from './types';
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
        dispatch({
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
        if(userid == null){
            dispatch({
                type: KEEP_ERROR,
                payload: {msg:"Error"}
            });
        }
        const res = await axios.get(`/api/keeps/${userid}`);
        dispatch({
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
}