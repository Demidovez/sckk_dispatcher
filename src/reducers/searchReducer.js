import Actions from "../actions/types/searchActionTypes";

const initialState = {
  searchData: {
    searchStr: "",
    isActual: true,
    isDone: false,
    orderValue: null,
    fromDate: null,
    toDate: null,
    areas: [],
    problemCodes: [],
  },
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
        searchData: {
          ...state.searchData,
          searchStr: action.payload,
        },
      };
    case Actions.SET_IS_ACTUAL:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          isActual: action.payload,
        },
      };
    case Actions.SET_IS_DONE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          isDone: action.payload,
        },
      };
    case Actions.SET_ORDER_VALUE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          orderValue: action.payload,
        },
      };
    case Actions.SET_ADDITIONAL_SEARCH_DATA:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          areas: action.payload.areas,
          problemCodes: action.payload.problemCodes,
          fromDate: action.payload.fromDate,
          toDate: action.payload.toDate,
        },
      };
    case Actions.RESET_ADDITIONAL_SEARCH_DATA:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          areas: initialState.searchData.areas,
          problemCodes: initialState.searchData.problemCodes,
          dateRange: initialState.searchData.dateRange,
          fromDate: initialState.searchData.fromDate,
          toDate: initialState.searchData.toDate,
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
