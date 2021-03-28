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

export const setAdditionalSearchData = (searchData) => ({
  type: Actions.SET_ADDITIONAL_SEARCH_DATA,
  payload: searchData,
});

export const setResetAdditionalSearchData = () => ({
  type: Actions.RESET_ADDITIONAL_SEARCH_DATA,
});
