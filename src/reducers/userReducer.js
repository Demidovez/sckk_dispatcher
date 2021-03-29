import Actions from "../actions/types/userActionTypes";

const initialState = {
  id: null,
  isLogined: false,
  login: "",
  firstname: "",
  lastname: "",
  role: "",
  config: null,
  errorMessage: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.TRY_LOGIN:
      return {
        ...state,
        errorMessage: "",
      };
    case Actions.SET_USER:
      return {
        ...state,
        id: action.payload.id,
        isLogined: true,
        login: action.payload.login,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        role: action.payload.role,
        config: action.payload.config,
      };
    case Actions.SET_ERROR_LOGIN:
      return {
        ...state,
        isLogined: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
