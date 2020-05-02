import {ADD_KEEP, GET_KEEPS, KEEP_ERROR, DELETE_KEEP} from '../actions/types';


const initialState = {
    keeps : [],
    keep: [],
    loading : true,
    error: {}
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case GET_KEEPS:
            return{
                ...state,
                keeps: payload,
                loading: false,
                error: {}
            };
        case ADD_KEEP:
            return{
                ...state,
                keeps: [payload, ...state.keeps],
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
        case DELETE_KEEP:
            return {
                ...state,
                keeps: state.keeps.filter(keep => keep._id !== payload),
                loading: false
            }
        default:
            return state;
    }
} 
