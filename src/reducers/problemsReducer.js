import Actions from "../actions/types/problemsActionTypes";

const initialState = {
  problems: [],
  moreProblems: [],
  count: 0,
  offset: 0,
  offsetStep: 15,
  orderValue: null,
};

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_ALL_PROBLEMS:
      return {
        ...state,
        problems: action.payload.problems,
        count: action.payload.count,
      };
    case Actions.SET_MORE_PROBLEMS:
      return {
        ...state,
        moreProblems: action.payload,
        offset: state.offset + state.offsetStep,
      };
    default:
      return state;
  }
};

export default problemsReducer;
