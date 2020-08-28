import * as actionTypes from './actionTypes';

const initialState = {
    data: {
        info: {},
        results: []
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS:
            return state;
        case actionTypes.USERS_SUCCESS:
            return {
                ...state,
                data: {
                    info: action.payload.info,
                    results: [...state.data.results, ...action.payload.results]
                }
            };
        case actionTypes.USERS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case actionTypes.UPDATE_USERS:
            return {
                ...state,
                data: {
                    ...state.data,
                    results: action.payload
                }
            };
        default:
            return state;
    }
}
