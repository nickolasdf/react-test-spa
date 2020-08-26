import { takeEvery } from 'redux-saga/effects';

import { startTimer } from './reducers/App/actions';
import { START_TIMER } from './reducers/App/actionTypes';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* timeWatcher() {
    takeEvery(START_TIMER, timeWorker);
}

function* timeWorker() {
    yield delay(250);
    yield startTimer();
}
