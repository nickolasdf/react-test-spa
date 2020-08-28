import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_USERS } from './reducers/Users/actionTypes';
import { usersFailure, usersSuccess } from './reducers/Users/actions';
import { hideLoader } from './reducers/App/actions';
import api from './api';

function* fetchUsersWorker(action) {
    try {
        const resp = yield call(api.Users.getUsers, action.payload);
        yield put(usersSuccess(resp.data));
        yield put(hideLoader());
    } catch (error) {
        yield put(usersFailure(error));
        yield put(hideLoader());
    }
};

export function* watchUsers() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
