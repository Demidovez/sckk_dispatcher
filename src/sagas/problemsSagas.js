import { put, call, takeEvery } from "redux-saga/effects";
import Actions from "../actions/types/problemsActionTypes";
import { getProblems } from "../api";
import {
  setAllProblemsAction,
  setMoreProblemsAction,
} from "../actions/creators/problemsActionCreators";

function* workerGetProblems(action) {
  const { problems, count } = yield call(getProblems);
  yield put(setAllProblemsAction(problems, count));
}

function* workerGetMoreProblems(action) {
  const { problems } = yield call(getProblems, action.payload);
  yield put(setMoreProblemsAction(problems));
}

export default function* watcherSaga() {
  yield takeEvery(Actions.GET_ALL_PROBLEMS, workerGetProblems);
  yield takeEvery(Actions.GET_MORE_PROBLEMS, workerGetMoreProblems);
}
