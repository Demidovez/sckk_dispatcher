import Actions from "../types/userActionTypes";

export const tryLoginAction = ({ login, password }) => ({
  type: Actions.TRY_LOGIN,
  payload: { login, password },
});

export const tryLogoutAction = () => ({
  type: Actions.TRY_LOGOUT,
});

export const getLoginedUserAction = () => ({
  type: Actions.GET_USER,
});

export const setUserAction = (user) => ({
  type: Actions.SET_USER,
  payload: user,
});

export const resetUserAction = () => ({
  type: Actions.RESET_USER,
});

export const setErrorLoginAction = (errorMessage) => ({
  type: Actions.SET_ERROR_LOGIN,
  payload: errorMessage,
});
