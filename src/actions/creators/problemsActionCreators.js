import Actions from "../types/problemsActionTypes";

export const getAllProblemsAction = () => ({
  type: Actions.GET_ALL_PROBLEMS,
});

export const setAllProblemsAction = (problems, count) => ({
  type: Actions.SET_ALL_PROBLEMS,
  payload: { problems, count },
});

export const getMoreProblemsAction = (options) => ({
  type: Actions.GET_MORE_PROBLEMS,
  payload: options,
});

export const setMoreProblemsAction = (moreProblems) => ({
  type: Actions.SET_MORE_PROBLEMS,
  payload: moreProblems,
});
