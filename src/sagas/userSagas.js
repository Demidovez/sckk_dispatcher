import { put, call, takeEvery } from "redux-saga/effects";
import Actions from "../actions/types/userActionTypes";
import { tryLogin, getUser } from "../api";
import {
  setUserAction,
  setErrorLoginAction,
} from "../actions/creators/userActionCreators";

function* workerTryLogin(action) {
  const user = yield call(tryLogin, action.payload);

  if (user) {
    yield put(setUserAction(user));
  } else {
    yield put(setErrorLoginAction("Ошибка авторизации!"));
  }
}

function* workerGetUser() {
  const user = yield call(getUser);

  if (user) {
    yield put(setUserAction(user));
  }
}

export default function* watcherSaga() {
  yield takeEvery(Actions.TRY_LOGIN, workerTryLogin);
  yield takeEvery(Actions.GET_USER, workerGetUser);
}
