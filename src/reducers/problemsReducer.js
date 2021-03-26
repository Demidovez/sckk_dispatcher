import Actions from "../actions/types/problemsActionTypes";

const initialState = {
  problems: [],
  moreProblems: [],
  count: 0,
  offset: 0,
  offsetStep: 15,
  orderValue: null,
  areaList: [
    { label: "Другой", value: "another" },
    { label: "1ABCDEH", value: "1ABCDEH" },
    { label: "2ABCDE", value: "2ABCDE" },
    { label: "5ABC", value: "5ABC" },
    { label: "6ABCDEF", value: "6ABCDEF" },
  ],
  codeProblemList: [
    { label: "Другой", value: "another" },
    { label: "T345", value: "T345" },
    { label: "A14", value: "A14" },
    { label: "X90", value: "X90" },
    { label: "K89", value: "K89" },
  ],
  locale: {
    sunday: "Вс",
    monday: "Пн",
    tuesday: "Вт",
    wednesday: "Ср",
    thursday: "Чт",
    friday: "Пт",
    saturday: "Сб",
    ok: "OK",
  },
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
