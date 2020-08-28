import * as actionTypes from './actionTypes';

const initialState = {
    isLoading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADER:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.HIDE_LOADER:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};
