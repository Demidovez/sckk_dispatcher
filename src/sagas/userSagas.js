import { put, call, takeEvery } from "redux-saga/effects";
import Actions from "../actions/types/userActionTypes";
import { tryLogin } from "../api";
import {
  setUserAction,
  setErrorLoginAction,
} from "../actions/creators/userActionCreators";

function* workerTryLogin(action) {
  const { user, isLogined, errorMessage } = yield call(
    tryLogin,
    action.payload
  );

  if (isLogined) {
    yield put(setUserAction(user));
  } else {
    yield put(setErrorLoginAction(errorMessage));
  }
}

export default function* watcherSaga() {
  yield takeEvery(Actions.TRY_LOGIN, workerTryLogin);
}
