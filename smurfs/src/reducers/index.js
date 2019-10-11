import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL
} from "../actions";

import {
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL
} from "../actions";

const initialState = {
    smurfs: [],
    fetchError: "",
    isFetching: false,
    isPosting: false,
    postError: ""
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state, 
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, ...action.payload],
                isFetching: false
            }
        case FETCH_SMURFS_FAIL:
            return {
                ...state, 
                fetchError: action.payload,
                isFetching: false
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                isPosting: false,
                postError: ""
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isPosting: true
            }
        case ADD_SMURF_FAIL: 
            return {
                ...state,
                isPosting: false,
                postError: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;