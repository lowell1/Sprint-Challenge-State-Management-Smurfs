import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const getSmurfs = () => dispatch => {
    dispatch({
        type: FETCH_SMURFS_START
    });

    axios.get("http://localhost:3333/smurfs")
    .then(resp => {
        console.log(resp);
        dispatch({
            type: FETCH_SMURFS_SUCCESS,
            payload: resp.data
        });
    })
    .catch(err => {
        dispatch({
            type: FETCH_SMURFS_FAIL,
            payload: err
        });
    });
}

export const addSmurf = (newSmurf) => dispatch => {
    dispatch({
        type: ADD_SMURF_START
    });

    console.log(newSmurf);

    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(() => {
        dispatch({
            type: ADD_SMURF_SUCCESS
        })
    })
    .catch(err => {
        console.log(err.response.data);
        dispatch({
            type: ADD_SMURF_FAIL,
            payload: err.response.data.Error
        })
    })
}