import Actions from "../types/searchActionTypes";

export const setSearchStrAction = (searchStr) => ({
  type: Actions.SET_SEARCH_STR,
  payload: searchStr,
});

export const setIsActualAction = (isActual) => ({
  type: Actions.SET_IS_ACTUAL,
  payload: isActual,
});

export const setIsDoneAction = (isDone) => ({
  type: Actions.SET_IS_DONE,
  payload: isDone,
});

export const setOrderValueAction = (orderValue) => ({
  type: Actions.SET_ORDER_VALUE,
  payload: orderValue,
});

export const setDateRangeAction = (dateRange) => ({
  type: Actions.SET_DATE_RANGE,
  payload: dateRange,
});

export const setAreasAction = (areas) => ({
  type: Actions.SET_AREAS,
  payload: areas,
});

export const setProblemCodesAction = (problemCodes) => ({
  type: Actions.SET_PROBLEM_CODES,
  payload: problemCodes,
});
