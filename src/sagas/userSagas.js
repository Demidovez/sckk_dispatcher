import { put, call, takeEvery } from "redux-saga/effects";
import Actions from "../actions/types/userActionTypes";
import { tryLogin } from "../api";
import {
  setUserAction,
  setErrorLoginAction,
} from "../actions/creators/userActionCreators";

function* workerTryLogin(action) {
  const { user } = yield call(tryLogin, action.payload);

  if (user) {
    yield put(setUserAction(user));
  } else {
    yield put(setErrorLoginAction("Ошибка авторизации!"));
  }
}

export default function* watcherSaga() {
  yield takeEvery(Actions.TRY_LOGIN, workerTryLogin);
}
