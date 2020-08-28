import * as actionTypes from './actionTypes';

export const fetchUsers = params => {
    return {
        type: actionTypes.FETCH_USERS,
        payload: params
    };
};

export const usersSuccess = data => {
    return {
        type: actionTypes.USERS_SUCCESS,
        payload: data
    };
};

export const usersFailure = error => {
    return {
        type: actionTypes.USERS_FAILURE,
        payload: error
    };
};

export const updateUsers = users => {
    return {
        type: actionTypes.UPDATE_USERS,
        payload: users
    };
};
