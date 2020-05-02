import {ADD_KEEP, GET_KEEPS, KEEP_ERROR} from '../actions/types';


const initialState = {
    keeps : [],
    keep: [],
    loading : true,
    error: {}
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case ADD_KEEP:
        case GET_KEEPS:
            return{
                ...state,
                keeps: payload,
                loading: false,
                error: {}
            };
        case KEEP_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
                keeps: []
            }
        default:
            return state;
    }
} 
