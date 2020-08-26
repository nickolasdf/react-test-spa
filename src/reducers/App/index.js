import * as actionTypes from './actionTypes';

const initialState = {
    time: new Date()
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_TIMER:
            return {
                ...state,
                time: new Date()
            };
        default:
            return state;
    }
};

