import Actions from "../actions/types/searchActionTypes";

const initialState = {
  searchStr: "",
  isActual: true,
  isDone: true,
  orderValue: null,
  dateRange: [],
  areas: [],
  problemCodes: [],
  orderData: [
    {
      label: "Новые",
      value: [["id", "DESC"]],
    },
    {
      label: "Старые",
      value: [["id", "ASC"]],
    },
    {
      label: "По цехам",
      value: [["area", "ASC"]],
    },
  ],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_STR:
      return {
        ...state,
        searchStr: action.payload.searchStr,
      };
    case Actions.SET_IS_ACTUAL:
      return {
        ...state,
        isActual: action.payload,
      };
    case Actions.SET_IS_DONE:
      return {
        ...state,
        isDone: action.payload,
      };
    case Actions.SET_ORDER_VALUE:
      return {
        ...state,
        orderValue: action.payload,
      };
    case Actions.SET_DATE_RANGE:
      return {
        ...state,
        dateRange: action.payload,
      };
    case Actions.SET_AREAS:
      return {
        ...state,
        areas: action.payload,
      };
    case Actions.SET_PROBLEM_CODES:
      return {
        ...state,
        problemCodes: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
