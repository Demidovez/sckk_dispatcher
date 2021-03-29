import { all } from "redux-saga/effects";
import problemsSagas from "./problemsSagas";
import userSagas from "./userSagas";

function* rootSaga() {
  yield all([problemsSagas(), userSagas()]);
}

export default rootSaga;
