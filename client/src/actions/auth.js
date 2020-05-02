import axios from 'axios';
import {setAlert} from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    RESET_PASSWORD
} from './types';
import setAuthToken from '../utils/setAuthToken';


// Load users

export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data   
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}



//Register User

export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch(err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
} 

//Login User

export const login = ( email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    const body = JSON.stringify({ email, password});

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch(err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
};


//Logout User

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
};

export const resetPassword = (email) => dispatch => {
    //todo restPassword
    dispatch(setAlert(`Password reset link has been sent to your email id - ${email}`, 'success'));

    setTimeout(() => dispatch({type: RESET_PASSWORD}), 5000)
}