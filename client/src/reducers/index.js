import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import keep from './keep';

export default combineReducers({
    alert,
    auth,
    keep
});