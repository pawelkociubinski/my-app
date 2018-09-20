import { takeLatest, put } from "redux-saga/effects";

import * as actions from "../constants/actions";

function* getRepositories(action) {
  try {
    yield put({ type: actions.FETCH_REPOSITORIES_STARTED });

    yield put({ type: actions.FETCH_REPOSITORIES_FINISHED });
  } catch (error) {
    yield put({ type: actions.FETCH_REPOSITORIES_FAILED, payload: { error: true } });
  }
}

export default function* repositoriesSaga() {
  yield takeLatest(actions.FETCH_REPOSITORIES_REQUESTED, getRepositories);
}
